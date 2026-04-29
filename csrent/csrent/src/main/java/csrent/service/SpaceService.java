package csrent.service;

import java.util.List;
import java.util.Optional;

import csrent.repository.SpaceJpaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import csrent.model.Space;
@Transactional
    @Service
    public class SpaceService {
        @Autowired
        private  SpaceJpaRepository repository;



        public List<Space> getAll(){
            return repository.findAll();

        }


        public Optional<Space> findById(int id) {
            return repository.findById(id);
        }


        public Space add(Space space) {
            return repository.save(space);

        }//add


        public Space delete(int id) {
            Optional<Space> spaceExist = repository.findById(id);
            if (spaceExist.isPresent()) {
                Space spaceToDelete = spaceExist.get();
                repository.delete(spaceToDelete);
                return spaceToDelete;
            }//if

            return null;

        }//delete

        public Space search(int id) {
            return repository.findById(id).orElse(null);
        }//search


        //EDIT
        public Space edit(Space space) {
            Optional <Space> spaceExist = repository.findById(space.getId());
            if(spaceExist.isPresent()){
                Space spaceBd=spaceExist.get();
                if (space.getName() != null) {
                    spaceBd.setName(space.getName());
                }

                if (space.getCapacity() != null) {
                    spaceBd.setCapacity(space.getCapacity());
                }

                if (space.getType() != null) {
                    spaceBd.setType(space.getType());
                }

                return repository.save(spaceBd);
            }
            return space;

        }//editPatch

        public Space update(Space space){
            Optional<Space> spaceExist = repository.findById(space.getId());
            if (spaceExist.isPresent()) {
                return repository.save(space);
            }//if
            return null;
        }//update


    }//class end





