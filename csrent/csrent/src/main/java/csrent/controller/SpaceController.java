package csrent.controller;

import csrent.model.Space;
import csrent.service.SpaceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/spaces")
public class SpaceController {
    @Autowired
    SpaceService service;

   //private ArrayList<Space> spaces;

    @GetMapping
    public List<Space> getAll(){
        return service.getAll();
    }

    //Retornar space según su id
    @GetMapping ("{id}")
    public Optional<Space> getSpace(@PathVariable int id){
        return service.findById(id);
    }

    //Agregue un space
    @PostMapping
    public Space postSpace(@RequestBody Space space) {
       return service.add(space);
   }

    //Método que actualice la información de un  elemento contenido en el ArrayList
    @PutMapping
    public Space putSpace(@RequestBody Space space){
        return service.update(space);
    }

   // Un método que elimine el usuario por su id
   @DeleteMapping ("{id}")
   public Space deleteSpace(@PathVariable Integer id){
        return new Space();//service.delete(id);
   }

    //Método que reciba un objeto y verifique cuáles atributos traen inforamción ,Solo modifica los atributos que correspondan
    @PatchMapping 
    public Space patchSpace (@RequestBody Space space) {
        return service.edit(space);
    }

}//class ends
