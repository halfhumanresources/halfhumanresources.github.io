from selenium.webdriver.common.by import By

class MainPageLocators():
    
    HEALTH_BUTTON = (By.XPATH, '/html/body/div/div[3]/div[2]/div[2]/a[1]')
    DATA_BUTTON = (By.XPATH, '/html/body/div/div[3]/div[2]/div[2]/a[2]')
    STATS_BUTTON = (By.XPATH, '/html/body/div/div[3]/div[2]/div[2]/a[3]')
    OTHER_BUTTON = (By.XPATH, '/html/body/div/div[3]/div[2]/div[2]/a[4]')
    VENDIA_BUTTON = (By.XPATH, '/html/body/div/div[3]/div[2]/div[2]/a[5]')

class HealthPageLocators():
    PULSE_RATE_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[2]/div/div[2]/label[1]')
    EXERCISE_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[2]/div/div[2]/label[2]')
    RR_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[2]/div/div[2]/label[3]')

class DataPageLocators():
    CREATE_EMPLOYEE_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[4]/button[1]')
    DELETE_EMPLOYEE_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[4]/button[2]')
    SHOW_ID_BUTTON = (By.XPATH, '//*[@id="toggleIDText"]')
    SUBMIT_EMPLOYEE_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[5]/div[3]/button[1]')
=======
from selenium.webdriver.common.by import By

class MainPageLocators():
    
    HEALTH_BUTTON = (By.XPATH, '/html/body/div/div[3]/div[2]/div[2]/a[1]')
    DATA_BUTTON = (By.XPATH, '/html/body/div/div[3]/div[2]/div[2]/a[2]')
    STATS_BUTTON = (By.XPATH, '/html/body/div/div[3]/div[2]/div[2]/a[3]')
    OTHER_BUTTON = (By.XPATH, '/html/body/div/div[3]/div[2]/div[2]/a[4]')
    VENDIA_BUTTON = (By.XPATH, '/html/body/div/div[3]/div[2]/div[2]/a[5]')

class HealthPageLocators():
    PULSE_RATE_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[2]/div/div[2]/label[1]')
    EXERCISE_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[2]/div/div[2]/label[2]')
    RR_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[2]/div/div[2]/label[3]')

class DataPageLocators():
    CREATE_EMPLOYEE_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[4]/button[1]')
    DELETE_EMPLOYEE_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[4]/button[2]')
    SHOW_ID_BUTTON = (By.XPATH, '//*[@id="toggleIDText"]')
    SUBMIT_EMPLOYEE_BUTTON = (By.XPATH, '/html/body/div/div[2]/div[2]/div[5]/div[3]/button[1]')