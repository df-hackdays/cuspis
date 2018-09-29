package bns.df.cuspis.controller;

import bns.df.cuspis.repo.UserRepo;
import bns.df.cuspis.service.DBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class DBController {

    @Autowired
    UserRepo userRepo;
    DBService service;

    public DBController(DBService service) {
        this.service = service;
    }

    @RequestMapping(value = "/createCourse", produces = {
            "application/json"}, method = RequestMethod.POST)
    private void createCourse(@RequestParam String id, @RequestParam String name, @RequestParam String code) {
        service.createCourse(id, name, code);
    }

    @RequestMapping(value = "/addCourseToUser", produces = {
            "application/json"}, method = RequestMethod.PUT)
    private void addCourseToUser(@RequestParam String userId, @RequestParam String courseId) {
        service.addCourseToUser(userId, courseId);
    }

    @RequestMapping(value = "/addAchivementToUser", produces = {
            "application/json"}, method = RequestMethod.PUT)
    private void addAchivementToUser(@RequestParam String userId, @RequestParam String achId) {
        service.addAchievementToUser(userId, achId);
    }

    @RequestMapping(value = "/getCoursesByUser", produces = {
            "application/json"}, method = RequestMethod.GET)
    private ResponseEntity<ArrayList<String>> getCoursesByUser(@RequestParam String userId) {
        //return service.getCoursesByUser(userId);
        return ResponseEntity.ok(service.getCoursesByUser(userId));
    }

    @RequestMapping(value = "/getAchievementsByUser", produces = {
            "application/json"}, method = RequestMethod.GET)
    private ResponseEntity<ArrayList<String>> getAchievementsByUser(@RequestParam String userId) {
        //return service.getCoursesByUser(userId);
        return ResponseEntity.ok(service.getAchievementsByUser(userId));
    }
}
