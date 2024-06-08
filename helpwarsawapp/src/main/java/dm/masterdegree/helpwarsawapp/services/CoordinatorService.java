package dm.masterdegree.helpwarsawapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dm.masterdegree.helpwarsawapp.models.Coordinator;
import dm.masterdegree.helpwarsawapp.repository.CoordinatorRepository;

@Service
public class CoordinatorService {
    @Autowired
    private CoordinatorRepository coordinatorRepository;

    public int registerNewCoordinator(String fname, String lname, String email, String password){
        return coordinatorRepository.registerNewCoordinator(fname, lname, email, password);
    }
    public void save(Coordinator coordinator) {
        coordinatorRepository.save(coordinator);
    }
}

