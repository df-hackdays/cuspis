package bns.df.cuspis.service;

import bns.df.cuspis.CuspisApplication;
import bns.df.cuspis.repo.UserRepo;
import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.session.ClientSession;
import com.mongodb.util.JSON;
import jdk.nashorn.internal.parser.JSONParser;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DBService {
    private static final Logger log = LoggerFactory.getLogger(CuspisApplication.class);
    MongoClient mongoClient;
    MongoDatabase database;

    public DBService() {
        MongoClientURI uri = new MongoClientURI(
                "mongodb+srv://cuspisuser:cuspis123@cluster0-f7h2k.mongodb.net/test?retryWrites=true");
        mongoClient = new MongoClient(uri);
        database = mongoClient.getDatabase("cuspis");
    }

    /**
     *
     * @param id
     * @param name
     * @param code
     */
    public void createCourse(String id, String name, String code) {
        MongoCollection collection = database.getCollection("courses");

        Document document = new Document("title", "MongoDB")
                .append("_id", id)
                .append("name", name)
                .append("code", code);
        collection.insertOne(document);

        System.out.println("Courses inserted successfully");
    }

    public void addCourseToUser(String userid, String courseId) {
        MongoCollection collection = database.getCollection("users");

        BasicDBObject fields = new BasicDBObject();
        fields.put("_id", new ObjectId(userid));
        Document doc = (Document) collection.find(fields).first();

        ArrayList<String> list0 = (ArrayList<String>) doc.get("courses");
        if(list0==null){
            list0 =  new ArrayList<String>();
            list0.add(courseId);
        }else{
            if(!list0.contains(courseId)){
                list0.add(courseId);
            }
        }

        BasicDBObject newDocument = new BasicDBObject();
        if(courseId!=null)
            newDocument.put("courses",list0);

        //update the doc
        BasicDBObject query = new BasicDBObject();
        query.put("_id", new ObjectId(userid));
        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", newDocument);
        collection.updateOne(query, updateObject);
        System.out.println("User updated successfully");
    }


    public void demo(UserRepo repository) {
        MongoCollection collection = database.getCollection("test");

        Document document = new Document("title", "MongoDB")
                .append("id", 1)
                .append("description", "database")
                .append("likes", 100)
                .append("url", "http://www.tutorialspoint.com/mongodb/")
                .append("by", "tutorials point");
        collection.insertOne(document);
        System.out.println("Document inserted successfully");
    }
}
