package stepDefinations;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
//mport org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;
import utilites.base;

public class productSurching {

	WebDriver driver;


	@Given("User is on landing page")
	public void user_is_on_landing_page() throws IOException  {
		driver = base.launchingDriver();
	}

	@When("User type {string} on surch box")
	public void user_type_on_surch_box(String string) throws InterruptedException {
		driver.findElement(By.xpath("//input[@type='search']")).sendKeys(string);
		Thread.sleep(3000);
	}
	


	@Then("{string} should be display on the list")
	public void should_be_display_on_the_list(String given) {
		String actualProduct = driver.findElement(By.xpath("//h4[@class='product-name']")).getText();

		if (actualProduct.contains(given)) {
			System.out.println("pass");
		} else {
			System.out.println("fail");
		}
	}
}
