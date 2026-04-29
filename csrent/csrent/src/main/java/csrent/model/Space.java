package csrent.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_space")
public class Space {
@Id
//el resgitro en tabla se vera como objeto en java:
//se convierte en tabl aautomaticametne en la bd

@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String type;
    private Integer capacity;

    public Space() {
    }

    public Space(Integer id, String name, String type, Integer capacity) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.capacity = capacity;
    }
//deberia tener un override
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }




}//class en d