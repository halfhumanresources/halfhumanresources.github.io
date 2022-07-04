from selenium import webdriver
##from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import page
import time
import unittest

class TestCases(unittest.TestCase):
    def setUp(self):
        #s = Service('C:\Program Files (x86)\chromedriver.exe')
        #self.driver = webdriver.Chrome(service=s)
        self.driver = webdriver.Firefox(executable_path='C:\Program Files (x86)\geckodriver.exe')
        self.driver.get("https://halfhumanresources.github.io")
    
    def test_01_health_button(self):
        main_page = page.HomePage(self.driver)
        main_page.click_health_button()
        time.sleep(1)
        if("Pulse Rate, Exercise, Blood Pressure, etc." in self.driver.page_source):
            assert True
        else:
            self.driver.save_screenshot(".\\screenshots\\" + "test_01_health_button.png")
            assert False

    def test_02_data_button(self):
        main_page = page.HomePage(self.driver)
        main_page.click_data_button()
        if("Raw Employee Data" in self.driver.page_source):
            assert True
        else:
            self.driver.save_screenshot(".\\screenshots\\" + "test_02_data_button.png")
            assert False

    def test_03_vacation_button(self):
        main_page = page.HomePage(self.driver)
        main_page.click_vacation_button()
        if("Employee Work/Life Balance" in self.driver.page_source):
            assert True
        else:
            self.driver.save_screenshot(".\\screenshots\\" + "test_03_stats_button.png")
            assert False
            
    def test_04_other_button(self):
        main_page = page.HomePage(self.driver)
        main_page.click_other_button()
        if("Other Metrics" in self.driver.page_source):
            assert True
        else:
            self.driver.save_screenshot(".\\screenshots\\" + "test_04_other_button.png")
            assert False

    def test_05_health_pulse_button(self):
        self.driver.get("https://halfhumanresources.github.io/employee-health.html")
        health_results_page = page.HealthResultsPage(self.driver)
        health_results_page.click_pulse_button()
        if("Average Employee Pulse Rate (BPM)" in self.driver.page_source):
            assert True
        else:
            self.driver.save_screenshot(".\\screenshots\\" + "test_05_health_pulse_button.png")
            return False

    def test_06_health_exercise_button(self):
        self.driver.get("https://halfhumanresources.github.io/employee-health.html")
        health_results_page = page.HealthResultsPage(self.driver)
        health_results_page.click_exercise_button()
        if("Average Weekly Employee Exercise (Hours)" in self.driver.page_source):
            assert True
        else:
            self.driver.save_screenshot(".\\screenshots\\" + "test_06_health_exercise_button.png")
            return False

    def test_07_health_rr_button(self):
        self.driver.get("https://halfhumanresources.github.io/employee-health.html")
        health_results_page = page.HealthResultsPage(self.driver)
        health_results_page.click_rr_button()
        if("Average Employee Respiration Rate (Breaths/Minute)" in self.driver.page_source):
            assert True 
        else:
            self.driver.save_screenshot(".\\screenshots\\" + "test_07_health_rr_button.png")
            return False

    def test_08_create_employee(self):
        self.driver.get("https://halfhumanresources.github.io/view-data.html")
        data_results_page = page.DataResultsPage(self.driver)
        data_results_page.click_create_button()
        data_results_page.name_text_element = data_results_page.testName
        data_results_page.age_text_element = "25"
        selectGender = Select(self.driver.find_element(By.ID, 'empgender'))
        selectGender.select_by_visible_text('Female')
        data_results_page.height_text_element = "5'4"
        data_results_page.weight_text_element = "120"
        data_results_page.body_temp_text_element = "97"
        data_results_page.pulse_text_element = "70"
        data_results_page.bp_text_element = "100/60"
        data_results_page.rr_text_element = "11"
        data_results_page.exercise_text_element = "6"
        data_results_page.vacation_text_element = "12"
        data_results_page.work_hours_text_element = "39"
        data_results_page.click_submit_employee_button()
        time.sleep(30)
        self.driver.refresh()
        time.sleep(2)
        data_results_page.click_showID_button()
        time.sleep(5)
        if(data_results_page.testName in self.driver.page_source):
            assert True
        else:
            assert False
    
    def test_09_delete_employee(self):
        self.driver.get("https://halfhumanresources.github.io/view-data.html")
        data_results_page = page.DataResultsPage(self.driver)
        time.sleep(5)
        if(data_results_page.testName not in self.driver.page_source):
            print ("\nDid not add test employee, skipping test")
            assert False
        else:
            data_results_page.click_showID_button()
            count = self.driver.find_elements(By.XPATH, "/html/body/div/div[2]/div[2]/table/tr")
            rowNum = len(count)
            testIDXPATH = '//*[@id="empData"]/tr[' + str(rowNum) +']/th[1]'
            testID = self.driver.find_element(By.XPATH, testIDXPATH)
            print('Deleteing Employee with ID:' + testID.text)
            data_results_page.click_delete_button()
            data_results_page.delete_employee_text_element = testID.text
            data_results_page.click_submit_id_button()
            time.sleep(15)
            self.driver.refresh()
            time.sleep(3)
            if(data_results_page.testName not in self.driver.page_source):
                print("Deleted " + data_results_page.testName)
                assert True
            else:
                assert False
    
    def test_10_input_validation(self):
        self.driver.get("https://halfhumanresources.github.io/view-data.html")
        data_results_page = page.DataResultsPage(self.driver)
        data_results_page.click_create_button()
        data_results_page.name_text_element = '!@#$%^&*()'
        data_results_page.age_text_element = "a"
        data_results_page.height_text_element = "a"
        data_results_page.weight_text_element = "a"
        data_results_page.body_temp_text_element = "ninetyseven"
        data_results_page.pulse_text_element = "seventy"
        data_results_page.bp_text_element = "100/60"
        data_results_page.rr_text_element = "ten"
        data_results_page.exercise_text_element = "six"
        data_results_page.vacation_text_element = "ten"
        data_results_page.work_hours_text_element = "forty"
        data_results_page.click_submit_employee_button()
        if("Error:" in self.driver.page_source):
            assert True
        else:
            assert False

    def tearDown(self):
        time.sleep(1)
        self.driver.close()

if __name__ == "__main__":
    unittest.main(warnings='ignore')
