from element import BasePageElement
from locators import *


class NameTextElement(BasePageElement):
    locator = '//*[@id="empname"]'

class AgeTextElemet(BasePageElement):
    locator = '//*[@id="empage"]'

class GenderTextElement(BasePageElement):
    locator = '//*[@id="empgender"]'

class HeightTextElement(BasePageElement):
    locator = '//*[@id="empheight"]'

class WeightTextElement(BasePageElement):
    locator = '//*[@id="empweight"]'

class BodyTempTextElement(BasePageElement):
    locator = '//*[@id="empbodytemp"]'

class PulseTextElement(BasePageElement):
    locator = '//*[@id="emppulse"]'

class BPTextElement(BasePageElement):
    locator = '//*[@id="empbp"]'

class RRTextElement(BasePageElement):
    locator = '//*[@id="empresp"]'

class ExerciseTextElement(BasePageElement):
    locator = '//*[@id="empexercise"]'

class VacationTextElement(BasePageElement):
    locator = '//*[@id="empvacation"]'

class WorkHoursTextElement(BasePageElement):
    locator = '//*[@id="emphours"]'

class DeleteEmployeeTextElement(BasePageElement):
    locator = '//*[@id="empid-delete"]'

class BasePage():
    def __init__(self, driver):
        self.driver = driver

class HomePage(BasePage):
    def click_health_button(self):
        element = self.driver.find_element(*MainPageLocators.HEALTH_BUTTON)
        element.click()
    
    def click_data_button(self):
        element = self.driver.find_element(*MainPageLocators.DATA_BUTTON)
        element.click()

    def click_stats_button(self):
        element = self.driver.find_element(*MainPageLocators.STATS_BUTTON)
        element.click()

    def click_other_button(self):
        element = self.driver.find_element(*MainPageLocators.OTHER_BUTTON)
        element.click()

    def click_vendia_button(self):
        element = self.driver.find_element(*MainPageLocators.VENDIA_BUTTON)
        element.click()

class HealthResultsPage(BasePage):
    def is_results_found(self):
        return "No results found" not in self.driver.page_source
    
    def click_pulse_button(self):
        element = self.driver.find_element(*HealthPageLocators.PULSE_RATE_BUTTON)
        element.click()
    
    def click_exercise_button(self):
        element = self.driver.find_element(*HealthPageLocators.EXERCISE_BUTTON)
        element.click()

    def click_rr_button(self):
        element = self.driver.find_element(*HealthPageLocators.RR_BUTTON)
        element.click()

class DataResultsPage(BasePage):
    def click_create_button(self):
        element = self.driver.find_element(*DataPageLocators.CREATE_EMPLOYEE_BUTTON)
        element.click()
    
    def click_delete_button(self):
        element = self.driver.find_element(*DataPageLocators.DELETE_EMPLOYEE_BUTTON)
        element.click()
    
    def click_showID_button(self):
        element = self.driver.find_element(*DataPageLocators.SHOW_ID_BUTTON)
        element.click()
    
    def click_submit_employee_button(self):
        element = self.driver.find_element(*DataPageLocators.SUBMIT_EMPLOYEE_BUTTON)
        element.click()
    
    def click_submit_id_button(self):
        element = self.driver.find_element(*DataPageLocators.SUBMIT_ID_BUTTON)
        element.click()

    testName = "Testing Test"
    
    name_text_element = NameTextElement()
    age_text_element = AgeTextElemet()
    gender_text_element = GenderTextElement()
    height_text_element = HeightTextElement()
    weight_text_element = WeightTextElement()
    body_temp_text_element = BodyTempTextElement()
    pulse_text_element = PulseTextElement()
    bp_text_element = BPTextElement()
    rr_text_element = RRTextElement()
    exercise_text_element = ExerciseTextElement()
    vacation_text_element = VacationTextElement()
    work_hours_text_element = WorkHoursTextElement()
    
    delete_employee_text_element = DeleteEmployeeTextElement()



    