package csrent.repository;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.PathVariable;

import csrent.model.Identifiable;
import csrent.model.Space;

public abstract class CRUDMemory<T extends Identifiable> implements ICRUD<T,Integer> {

protected ArrayList<T> data= new ArrayList<>();

    @Override
    public T add(T element) {
    data.add(element);
    return element;
    }

    @Override
    public ArrayList<T> getAll() {
       return data;
    }

    @Override
    public T update(T element) {
//hay qu ehacer un paso intermedo para decirle que el getid si puede tenerel metodo y lo reconozca
 for(int index=0; index < data.size(); index++){
            if(data.get(index).getId().intValue() == element.getId().intValue()){
                return data.set(index, element);
            }
        }
        return null;
 }

    @Override
    public abstract T edit (T element);

    

    @Override
    public T delete(Integer id) {
          for(T element:data){
            if(element.getId().intValue() == id.intValue()){
                data.remove(element);
                return element;

            }
        }
        return null;
    }
        

    @Override
    public T search(Integer id) {
        for(int element=0; element < data.size();element++){
            if(data.get(element).getId().intValue()==id.intValue()){
                return data.get(element);
            }
        }
        return null;
     }


 
}
