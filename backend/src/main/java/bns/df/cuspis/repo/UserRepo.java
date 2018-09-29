package bns.df.cuspis.repo;

import bns.df.cuspis.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepo extends MongoRepository<User, Long> {
    List<User> findByName(String name);
}
