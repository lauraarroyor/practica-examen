package csrent.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import csrent.model.Space;
import csrent.repository.SpaceRepository;

@Service
public class SpaceService {
//similar a cuando creabamo sinstancia de una clase para acceder a los metodos
@Autowired
SpaceRepository repository;


//    public void addSpace () {
//            repository.add(new Space(1, "Grabación In", "Cabina de grabación", 20));
//            repository.add(new Space(2, "TV Group", "Estudio de televisión", 100));
//            repository.add(new Space(3, "Ballet Vero", "Salón de Ballet", 50));
//            repository.add(new Space(4, "Esteban Record", "Estudio de grabación", 24));
//    }

    // GET ALL
public ArrayList<Space> getAll(){
    return repository.getAll();
}
    //GET SPACE BY ID
public Space findById(Integer id){
        return repository.findById(id);
    }
    //POST SPACE
public Space add(Space space){
    return repository.add(space);
}
    //PUT SPACE
public Space update (Space space){
    return repository.update(space);
}
    //DELETE SPACE
 public Space delete(Integer id){
return repository.delete(id);
 }


    public Space remove(Integer id){
        Space localSpace = repository.findById(id).get();
        if(localSpace != null){
            return localSpace;
        }
        return localSpace;
    }

    public boolean existsById(Integer id){
        return repository.existsById(id);
    }


    public Space getById(Integer id){
        return repository.findById(id).get();
    }


}
