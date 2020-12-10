package testRunners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/featureFiles",
		glue="stepDefinations" ,tags="@SmokeTest",
		strict=true,
		monochrome=true,
		plugin= {"pretty","html:target/cucumber","json:target/cucmber.json","junit:target/ckos.xml"})
public class runningTestCases {

}
