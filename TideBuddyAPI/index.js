var package = require("./package.json");
var tideBuddyAPI = require("./lib/tideBuddyAPI.js");

exports.handler = function (event, context) {
    tideBuddyAPI.handleRequest(event, context.done);
}