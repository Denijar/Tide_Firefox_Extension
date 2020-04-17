import json

from selenium import webdriver
import os

url = "http://www.metservice.com/marine/regions/east-auckland/tides/locations/"

def lambda_handler(event, context):

    if( 'queryStringParameters' in event and 'city' in event['queryStringParameters']):

        city = event["queryStringParameters"]["city"]
        queryURL = url + city

        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('no-sandbox')
        chrome_options.add_argument('--disable-extensions')
        chrome_options.add_argument('--disable-gpu')
        chrome_options.add_argument('--window-size=1280x1696')
        chrome_options.add_argument('--user-data-dir=/tmp/user-data')
        chrome_options.add_argument('--hide-scrollbars')
        chrome_options.add_argument('--enable-logging')
        chrome_options.add_argument('--log-level=0')
        chrome_options.add_argument('--v=99')
        chrome_options.add_argument('--data-path=/tmp/data-path')
        chrome_options.add_argument('--ignore-certificate-errors')
        chrome_options.add_argument('--homedir=/tmp')
        chrome_options.add_argument('--disk-cache-dir=/tmp/cache-dir')
        chrome_options.add_argument('user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36')
        chrome_options.binary_location = os.getcwd() + "/bin/headless-chromium"

        driver = webdriver.Chrome(chrome_options=chrome_options)
        #driver.get(queryURL)
        # elemCopiedPath = driver.find_element_by_xpath('/html/body/main/div[2]/div[3]/div[2]/section/div[2]/div[2]/div[2]/div/div[2]')
        # HTML1 = elemCopiedPath.get_attribute('innerHTML')

        #elemRelativePath = driver.find_element_by_xpath('//div[@data-module-name="tides-timetable"]')
        #HTML2 = elemRelativePath.get_attribute('innerHTML')

        body = "test"
        statusCode = 200

        driver.quit()


    else:
        statusCode = 400 # Bad request error code
        body = "Incorrect query string parameters were provided"


    return {
        "statusCode": statusCode,
        "body": json.dumps(body)
    }