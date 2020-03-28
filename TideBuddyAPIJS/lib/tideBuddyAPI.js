const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://home.nzcity.co.nz/weather/tide_summary.aspx';

exports.handleRequest = async function (requestData, callback) {

    let body;
    let statusCode;

    if (requestData.queryStringParameters && requestData.queryStringParameters.city) {

        const city = requestData.queryStringParameters.city;

        // Insert webscraping
        let html;

        try{
            const response = await axios(url);
            if(response.data){
                html = response.data;
            }

        } catch(error) {
            console.log(error);
        }

        if (html) { // Web scraping was successful

            statusCode = 200; // Success status code
            body = html;

        } else { // Web scraping was not successful, not the client's fault
            statusCode = 500; // Internal Server Error code
            body = "Was not able to procure HTML :(";
        }

    } else { // The request has not provided the correct parameters, client's fault
        statusCode = 400; // Bad request error code
        body = "Incorrect query string parameters were provided";
    }

    response = {
        statusCode,
        body: JSON.stringify(body)
    };
    callback(null, response);
}