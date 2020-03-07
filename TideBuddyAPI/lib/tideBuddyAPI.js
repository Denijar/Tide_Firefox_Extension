exports.handleRequest = function (requestData, callback) {

    var body;
    var statusCode;

    if(requestData.queryStringParameters && requestData.queryStringParameters.tidalLocation && requestData.queryStringParameters.timeDate){

        // Insert MetService Webscraping here

        if(true){ // Web scraping was successful

            statusCode = 200; // Success status code
            body = { // Dummy data
                time: "1330",
                date: "2020-03-08",
                high1: {},
                low1: {
                    time: "0019",
                    height: "0.8"
                },
                high2: {
                    time: "0656",
                    height: "3.3"
                },
                low2: {
                    time: "1248",
                    height: "0.9"
                },
                high3: {
                    time: "1923",
                    height: "3.3"
                }
            }

        } else { // Web scraping was not successful, not the client's fault
            statusCode = 500; // Internal Server Error code
            body = "Was not able to procure Tide Data :(";

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