from element import BasePageElement
from locators import *

class NameTextElement(BasePageElement):
    locator = 'empname'

class AgeTextElemet(BasePageElement):
    locator = 'empage'

class GenderTextElement(BasePageElement):
    locator = 'empgender'

class HeightTextElement(BasePageElement):
    locator = 'empheight'

class WeightTextElement(BasePageElement):
    locator = 'empweight'

class BodyTempTextElement(BasePageElement):
    locator = 'empbodytemp'

class PulseTextElement(BasePageElement):
    locator = 'emppulse'

class BPTextElement(BasePageElement):
    locator = 'empbp'

class RRTextElement(BasePageElement):
    locator = 'empresp'

class ExerciseTextElement(BasePageElement):
    locator = 'empexercise'

class VacationTextElement(BasePageElement):
    locator = 'empvacation'

class WorkHoursTextElement(BasePageElement):
    locator = 'emphours'

class DeleteEmployeeTextElement(BasePageElement):
    locator = 'empid-delete'

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

    def click_vacation_button(self):
        element = self.driver.find_element(*MainPageLocators.VACATION_BUTTON)
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
    
    def select_gender_button(self):
        element = self.driver.find_element(*DataPageLocators.SUBMIT_ID_BUTTON)

    testName = "Testing Test"
    name_text_element = NameTextElement()
    age_text_element = AgeTextElemet()
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
