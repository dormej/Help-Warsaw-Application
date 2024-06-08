package dm.masterdegree.helpwarsawapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(scanBasePackages = "dm.masterdegree.helpwarsawapp")
@EnableAutoConfiguration
public class HelpwarsawappApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelpwarsawappApplication.class, args);
	}

}
