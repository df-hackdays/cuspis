package bns.df.cuspis.domain;

import jdk.nashorn.internal.objects.annotations.Constructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity(name = "users")
@ToString
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column
    private String _id;
    @Column
    private String name;
    @Column
    private String gender;

    public User(String i, String s) {
    }
}
