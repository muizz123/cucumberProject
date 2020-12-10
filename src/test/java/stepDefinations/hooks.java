package stepDefinations;

import org.openqa.selenium.WebDriver;

import io.cucumber.java.*;
import utilites.base;

public class hooks extends base{

	
	
	@After("@SmokeTest")
	public void closeBrowser() {
		driver.close();
	}
}
