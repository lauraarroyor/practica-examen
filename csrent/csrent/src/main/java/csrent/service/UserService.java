package csrent.service;

import csrent.model.User;
import csrent.repository.UserJpaRepository;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class UserService {
        @Autowired
        private UserJpaRepository repository;

        // GET ALL
        public List<User> getAll() {
            return repository.findAll();
        }

        // EGET BY ID

    public Optional<User> findById(int id) {
        return repository.findById(id);
    }




        // AADD
        public User add(User user) {
            return repository.save(user);
        }

        // EDIT
        public User edit(User user) {
            Optional<User> userExist = repository.findById(user.getId());
            if (userExist.isPresent()) {
                User userBd = userExist.get();

                if (user.getName() != null) {
                    userBd.setName(user.getName());
                }

                if (user.getType() != null) {
                    userBd.setType(user.getType());
                }

                return repository.save(userBd);
            }
            return user;
        }

        // UPDATE
        public User update(User user) {
            if (repository.existsById(user.getId())) {
                return repository.save(user);
            }
            return null;
        }

        // EDELETE
        public User delete(Integer id) {
            Optional<User> userExist = repository.findById(id);
            if (userExist.isPresent()) {
                repository.delete(userExist.get());
                return userExist.get();
            }
            return null;
        }

}//class end
