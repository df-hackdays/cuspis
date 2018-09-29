package bns.df.cuspis.controller;

import bns.df.cuspis.repo.UserRepo;
import bns.df.cuspis.service.DBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class DBController {

    @Autowired
    UserRepo userRepo;
    DBService service;

    public DBController(DBService service) {
        this.service = service;
    }

    @RequestMapping(value = "/createCourse", produces = {
            "application/json"}, method = RequestMethod.GET)
    private void createCourse(@RequestParam String id, @RequestParam String name, @RequestParam String code) {
        service.createCourse(id, name, code);
//        service.demo(userRepo);
    }

    @RequestMapping(value = "/addCourseToUser", produces = {
            "application/json"}, method = RequestMethod.GET)
    private void addCourseToUser(@RequestParam String userId, @RequestParam String courseId) {
        service.addCourseToUser(userId, courseId);
    }

}
