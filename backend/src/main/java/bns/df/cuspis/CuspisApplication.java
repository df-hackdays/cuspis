package bns.df.cuspis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories("bns.df.cuspis.repo")
@SpringBootApplication
public class CuspisApplication {

	public static void main(String[] args) {
		SpringApplication.run(CuspisApplication.class, args);
	}

}
