package csrent.controller;


import csrent.model.User;
import csrent.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService service;

    @GetMapping
    public ArrayList<User> getAll(){
        return service.getAll();
    }

    //Retornar space según su id
    @GetMapping ("{id}")
    public User getSUser(@PathVariable int id){
        return service.findById(id);
    }

    //Agrega
    @PostMapping
    public User postUser(@RequestBody User user){
        return service.add(user);
    }

    //Método que actualice
    @PutMapping
    public User putUser(@RequestBody User user){
        return service.update(user);
    }

    // Un método que elimine el usuario por su id
    @DeleteMapping ("{id}")
    public User deleteUser(@PathVariable int id){
        return service.delete(id);
    }

    //
    @PatchMapping
    public User patchUser (@RequestBody User user) {
        return null;
    }
}
