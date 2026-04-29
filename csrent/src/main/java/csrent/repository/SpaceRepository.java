package csrent.repository;

import org.springframework.stereotype.Repository;

import csrent.model.Space;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;


@Repository
public class SpaceRepository extends CRUDMemory<Space> {
    private ArrayList<Space> data = new ArrayList<>();

    public SpaceRepository() {
    }

// GET ALL
    //retornar todos los espacios
    public ArrayList<Space> getAll() {
        return data;

    }
//GET SPACE BY ID
    //encontrar espacio por id
    public Space findById(Integer id) {
        for (Space element : data) {
            if (element.getId().equals(id)) {
                return element;
            }
        }
        return null;
    }
//POST SPACE
//anadir espacio
    public Space add(Space space) {
        data.add(space);
        return space;
    }
//PUT SPACE
//actualizar datos del espacio
    public Space edit(Space space) {
         for (Space element : data) {
            if (element.getId().intValue() == space.getId().intValue()) {
                if (space.getName()!=null) {
                    element.setName(space.getName());
                }
                if (space.getType()!=null) {
                    element.setType(space.getType());
                }
                if (space.getCapacity() != 0) {
                    element.setCapacity(space.getCapacity());
                }

                return element;
            }
        }
        return new Space();
    }


//DELETE SPACE
//eliminar espacio por id
    public Space delete(Integer id) {
        for(int element=0; element < data.size(); element++){
            if(data.get(element).getId() == id){
                return data.remove(element);
            }
        }
        return null;
    }


//PATCH SPACE
//patch/cambiar un elemento del espacio

//    putspace
//       for(int element=0; element < spaces.size(); element++){
//        if(spaces.get(element).getId() == space.getId()){
//            return spaces.set(element, space);
//        }
//    }


}
