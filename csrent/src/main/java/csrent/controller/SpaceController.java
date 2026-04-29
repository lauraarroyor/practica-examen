package csrent.controller;

import csrent.model.Space;
import csrent.service.SpaceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/spaces")
public class SpaceController {
    @Autowired
    SpaceService service;
//se elimino array

//    @GetMapping
//    public ResponseEntity<List<Space>> getAll() {
//        List<Space> spaces = service.getAll();
//        if(spaces==null || spaces.isEmpty()) {
//            return ResponseEntity.noContent().build();
//        }
//      return ResponseEntity.ok(spaces);
//}


    @GetMapping
    public ResponseEntity<?> getAll() {
        List<Space> spaces = service.getAll();
        if(spaces==null || spaces.isEmpty()) {
            return ResponseEntity.ok("No hay espacios");
        }
        return ResponseEntity.ok(spaces);
    }

    //Retornar space según su id
    @GetMapping ("{id}")
    public Space getSpace(@PathVariable int id){
        return service.findById(id);
    }

    //Retornar space según su id
    @GetMapping ("{id}")
    public ResponseEntity<?> getSpace(@PathVariable Integer id){
        if(service.existsById(id)){
            return ResponseEntity.ok(service.getById(id));
        }
//        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El espacio con id "+id+" no se encuentra registrado");
        return ResponseEntity.ok("El espacio con id "+id+" no se encuentra registrado");
    }

    //Agregue un space
    @PostMapping
    public Space postSpace(@RequestBody Space space){
       return service.add(space);
   }

    //Método que actualice la información de un  elemento contenido en el ArrayList
    @PutMapping
    public Space putSpace(@RequestBody Space space){
        return service.update(space);
    }

   // Un método que elimine el usuario por su id
   @DeleteMapping ("{id}")
   public Space deleteSpace(@PathVariable int id){
       return service.delete(id);
   }

    //Método que reciba un objeto y verifique cuáles atributos traen inforamción ,Solo modifica los atributos que correspondan
    @PatchMapping 
    public Space patchSpace (@RequestBody Space space) {
        return null;
    }

}//Fin de la clase
