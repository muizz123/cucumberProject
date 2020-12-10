package utilites;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class base {

	public static WebDriver driver;
	public static Properties pro;
	
	public static WebDriver launchingDriver() throws IOException {
		
		 pro = new Properties();
		FileInputStream file = new FileInputStream("E:\\cucumber\\surchingProduct\\src\\test\\java\\utilites\\data.properties");
		pro.load(file);
		  System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
		    driver = new ChromeDriver();
		    driver.get(pro.getProperty("url"));
		    return driver;
	}
}
