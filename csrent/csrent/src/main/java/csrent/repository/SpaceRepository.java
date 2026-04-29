//package csrent.repository;
//
//import org.springframework.stereotype.Repository;
//
//import csrent.model.Space;
//import org.springframework.web.bind.annotation.GetMapping;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//
//@Repository
//public class SpaceRepository extends CRUDMemory<Space> {
//    private List<Space> data = new List<>();
//
//
//
//// GET ALL
//    //retornar todos los espacios
//    public List<Space> getAll() {
//        return data;
//
//    }
////GET SPACE BY ID
//    //encontrar espacio por id
//    public Space findById(Integer id) {
//        for (Space element : data) {
//            if (element.getId().equals(id)) {
//                return element;
//            }
//        }
//        return null;
//    }
////POST SPACE
////anadir espacio
//    public Space add(Space space) {
//        data.add(space);
//        return space;
//    }
////PUT SPACE
////actualizar datos del espacio
////    public Space edit(Space space) {
////         for (Space element : data) {
////            if (element.getId().intValue() == space.getId().intValue()) {
////                if (space.getName()!=null) {
////                    element.setName(space.getName());
////                }
////                if (space.getType()!=null) {
////                    element.setType(space.getType());
////                }
////                if (space.getCapacity() != null) {
////                    element.setCapacity(space.getCapacity());
////                }
////
////                return element;
////            }
////        }
////        return new Space();
////    }
//
//    public Space edit(Space space) {
//        Optional<Space> spaceExist = repository.findById(space.getId());
//        if(spaceExist.isPresent()){
//            Space spaceBd=spaceExist.get();
//            if (space.getName() != null) {
//                spaceBd.setName(space.getName());
//            }
//
//            if (space.getCapacity() != null) {
//                spaceBd.setCapacity(space.getCapacity());
//            }
//
//            if (space.getType() != null) {
//                spaceBd.setType(space.getType());
//            }
//
//            return repository.save(spaceBd);
//        }
//        return space;
//    }
//
////DELETE SPACE
////eliminar espacio por id
//    public Space delete(Integer id) {
//        for(int element=0; element < data.size(); element++){
//            if(data.get(element).getId() == id){
//                return data.remove(element);
//            }
//        }
//        return null;
//    }
//
//
////PATCH SPACE
////patch/cambiar un elemento del espacio
////
////public Space patch(Space space) {
////       for(int element=0; element < spaces.size(); element++){
////        if(spaces.get(element).getId() == space.getId()){
////            return spaces.set(element, space);
////        }
////    }
////    return space;
////}
//
//}
