package csrent.service;

import csrent.model.User;
import csrent.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService {
    @Autowired
    UserRepository repository;
    // GET ALL
    public ArrayList<User> getAll(){
        return repository.getAll();
    }
    //GET BY ID
        public User findById(Integer id){
        return repository.findById(id);
    }
    //POST
    public User add(User user){
        return repository.add(user);
    }
    //PUT
    public User update (User user){
        return repository.update(user);
    }
    //DELETE
    public User delete(Integer id){
        return repository.delete(id);
    }


}
