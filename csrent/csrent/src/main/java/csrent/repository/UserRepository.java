//package csrent.repository;
//
//
//import csrent.model.Space;
//import csrent.model.User;
//import org.springframework.stereotype.Repository;
//
//import java.util.ArrayList;
//
//
//@Repository
//public class UserRepository extends CRUDMemory<User> {
//
//    private ArrayList<User> data=new ArrayList<>();
//
//    public UserRepository() {
//    }
//
////GET ALL
//public ArrayList<User> getAll() {
//    return data;
//}
//
////POST
//public User add(User user) {
//    data.add(user);
//    return user;
//}
//
//    //GET BY ID
//    public User findById(Integer id) {
//        for (User element : data) {
//            if (element.getId().equals(id)) {
//                return element;
//            }
//        }
//        return null;
//    }
//
//
////PUT
//public User edit(User user) {
//    for (User element : data) {
//        if (element.getId().intValue() == user.getId().intValue()) {
//            if (user.getName()!=null) {
//                element.setName(user.getName());
//            }
//            if (user.getType()!=null) {
//                element.setType(user.getType());
//            }
//            return element;
//        }
//    }
//    return null;
//}
//    //DELETE
//    public User delete(Integer id) {
//        for(int element=0; element < data.size(); element++){
//            if(data.get(element).getId() == id){
//                return data.remove(element);
//            }
//        }
//        return null;
//    }
//
//}
