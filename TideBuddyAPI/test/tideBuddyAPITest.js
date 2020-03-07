var assert = require("chai").assert;
var tideBuddyAPI = require("../lib/tideBuddyAPI.js");

describe("tideBuddyAPI", function () {
    it("exports handleRequest", function () {
        assert.typeOf(tideBuddyAPI.handleRequest, "function");
    });
});