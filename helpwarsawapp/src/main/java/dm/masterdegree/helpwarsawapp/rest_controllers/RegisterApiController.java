package dm.masterdegree.helpwarsawapp.rest_controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dm.masterdegree.helpwarsawapp.services.CoordinatorService;

@RestController
@RequestMapping("/api/v1")
public class RegisterApiController {
    @Autowired
    CoordinatorService coordinatorService;

    @PostMapping("/coordinator/register")
    public ResponseEntity registerNewCoordinator(@RequestParam("first_name")String first_name,
                                                 @RequestParam("last_name")String last_name,
                                                 @RequestParam("email")String email,
                                                 @RequestParam("password")String password){

        if(first_name.isEmpty() || last_name.isEmpty() || email.isEmpty() || password.isEmpty()) {
            return new ResponseEntity<>("Please complete all fields", HttpStatus.BAD_REQUEST);
        }

        int result = coordinatorService.registerNewCoordinator(first_name, last_name, email, password);
        if(result != 1){
            return new ResponseEntity<>("Failed", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Coordinator registered successfully", HttpStatus.OK);

    }
}
