import axios from "axios"

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import api from "./api.js"
import getWeb3 from "./getWeb3.js"
import pollWeb3 from "./pollWeb3.js"
import getStorageContract from "./getStorageContract.js"
import getTokenContract from "./getTokenContract.js"

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        web3: {
            isInjected: false,
            web3Instance: null,
            networkId: null,
            coinbase: null,
            balance: null,
            error: null,
            accounts: null
        },
        storageContractInstance: null,
        tokenContractInstance: null,
        rewards: 0,
        last_error: null,
        _loading_count: 0,
        username: window.localStorage.getItem("username"),
        session_id: window.localStorage.getItem("session_id"),
        _next_route: null,
        _next_dispatch_action: null,
        _next_dispatch_payload: null,
        _feedback: [],
        _feedback_delay: false,
        thing: null
    },
    getters: {
        is_loading(state) {
            return state._loading_count !== 0
        },
        next_route(state) {
            if (state._next_route == null) {
                return null
            }
            return {
                name: state._next_route.name,
                path: state._next_route.path,
                params: state._next_route.params,
                query: state._next_route.query
            }
        },
        signed_in(state) {
            return state.session_id != null
        },
        show_dialog(state) {
            return state.last_error != null
        },
        $http(state) {
            return axios.create({
                headers: { Authorization: "Session id=\"" + state.session_id + "\"" }
            })
        },
        current_feedback(state) {
            if (state._feedback_delay || state._feedback.length === 0) { return null }
            return state._feedback[0]
        }
    },
    mutations: {
        UPDATE_ERROR(state, error) {
            state.last_error = error
        },
        START_LOADING(state) {
            state._loading_count++
            state.last_error = null
        },
        STOP_LOADING(state) {
            state._loading_count--
        },
        UPDATE_CREDENTIALS(state, { username, session_id }) {
            state.username = username
            window.localStorage.setItem("username", username)
            state.session_id = session_id
            window.localStorage.setItem("session_id", session_id)
        },
        SIGNOUT(state) {
            state.username = null
            window.localStorage.removeItem("username")
            state.session_id = null
            window.localStorage.removeItem("session_id")
        },
        UPDATE_NEXT_ROUTE(state, route) {
            state._next_route = route
        },
        UPDATE_NEXT_DISPATCH(state, { action, payload }) {
            state._next_dispatch_action = action
            state._next_dispatch_payload = payload
        },
        ADD_FEEDBACK(state, msg) {
            if (state._feedback[state._feedback.length - 1] !== msg) {
                state._feedback.push(msg)
            }
        },
        CLEAR_FEEDBACK(state) {
            // remove first element
            state._feedback.splice(0, 1)
            state._feedback_delay = true
        },
        CLEAR_FEEDBACK_DELAY(state) {
            state._feedback_delay = false
        },
        UPDATE_THING(state, thing) {
            state.thing = thing
        },
        registerWeb3Instance(state, payload) {
            console.log('registerWeb3instance Mutation being executed', payload)
            let result = payload
            let web3Copy = state.web3
            web3Copy.coinbase = result.coinbase
            web3Copy.networkId = result.networkId
            web3Copy.balance = parseInt(result.balance, 10)
            web3Copy.isInjected = result.injectedWeb3
            web3Copy.web3Instance = result.web3
            web3Copy.accounts = result.accounts
            state.web3 = web3Copy,
                pollWeb3()
        },
        pollWeb3Instance(state, payload) {
            console.log('pollWeb3Instance mutation being executed', payload)
            state.web3.coinbase = payload.coinbase
            state.web3.balance = parseInt(payload.balance, 10)
        },
        registerStorageContractInstance(state, payload) {
            console.log("Storage contract instance: ", payload)
            state.storageContractInstance = () => payload
        },
        registerTokenContractInstance(state, payload) {
            console.log("Token contract instance: ", payload)
            state.tokenContractInstance = () => payload
        }
    },
    actions: {
        async authenticate(context, { username, password }) {
            context.commit("START_LOADING")

            try {
                var response = await api.authenticate(username, password)
            } catch (err) {
                context.commit("STOP_LOADING")
                if (err.response !== null && err.response.status === 401) {
                    context.commit("UPDATE_ERROR", "Wrong username or password")
                    return
                }
                context.commit("UPDATE_ERROR", "Oops! Something bad happened. Contact your system administrator")
                console.error({ error: err })
                return
            }

            context.commit("STOP_LOADING")
            context.commit("UPDATE_CREDENTIALS", { username, session_id: response.data.session_id })
        },
        async signout(context) {
            context.commit("SIGNOUT")
        },
        next_route(context, router) {
            var next = context.state._next_route
            if (next == null) {
                next = { name: "content" }
            }
            router.push(next)
            context.commit("UPDATE_NEXT_ROUTE", null)
        },
        async next_dispatch(context) {
            if (context.state._next_dispatch_action == null) { return }
            try {
                await context.dispatch(context.state._next_dispatch_action, context.state._next_dispatch_payload)
            } catch (err) { }
            context.commit("UPDATE_NEXT_DISPATCH", { action: null, payload: null })
        },
        clear_feedback(context) {
            context.commit("CLEAR_FEEDBACK")
            window.setTimeout(() => {
                context.commit("CLEAR_FEEDBACK_DELAY")
            }, 500)
        },
        async get_thing(context) {
            context.commit("START_LOADING")

            try {
                var response = await api.get_thing()
            } catch (err) {
                context.commit("STOP_LOADING")
                if (err.response !== null && err.response.status === 401) {
                    context.dispatch("signout")
                    context.commit("ADD_FEEDBACK", "Session expired. Please sign back in to load Thing")
                    context.commit("UPDATE_NEXT_DISPATCH", { action: "get_thing" })
                } else {
                    context.commit("UPDATE_ERROR", "Oops! Something bad happened. Contact your system administrator")
                    console.error({ err: err })
                }
                return
            }

            context.commit("STOP_LOADING")
            context.commit("UPDATE_THING", response.data.msg)
            context.commit("ADD_FEEDBACK", "Thing loaded")
        },
        registerWeb3({ commit }) {
            console.log('registerWeb3 Action being executed')
            getWeb3.then(result => {
                console.log('committing result to registerWeb3Instance mutation')
                commit('registerWeb3Instance', result)
            }).catch(e => {
                console.log('error in action registerWeb3', e)
            })
        },
        pollWeb3({ commit }, payload) {
            console.log('pollWeb3 action being executed')
            commit('pollWeb3Instance', payload)
        },
        getStorageContractInstance({ commit }) {
            getStorageContract.then(result => {
                commit("registerStorageContractInstance", result)
            }).catch(e => console.log(e))
        },
        getTokenContractInstance({ commit }) {
            getTokenContract.then(result => {
                commit("registerTokenContractInstance", result)
            }).catch(e => console.log(e))
        }
    }
})

export default store
