<template>
<div>
    <img :src=imageUrl alt="store">
</div>
</template>
<script>
import storeImage from "../img/store.png";

export default {
    name: "store",
    data: function(){
        return {
            imageUrl: storeImage
        }
    }
}
</script>
