package dm.masterdegree.helpwarsawapp.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import dm.masterdegree.helpwarsawapp.models.Coordinator;
import jakarta.transaction.Transactional;

@Repository
public interface CoordinatorRepository extends CrudRepository<Coordinator, Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO coordinators(first_name, last_name, email, password) VALUES(:first_name, :last_name, :email, :password)", nativeQuery = true)
    int registerNewCoordinator(@Param("first_name") String first_name,
                            @Param("last_name") String last_name,
                            @Param("email") String email,
                            @Param("password") String password);
}
