/**
 * @fileoverview Don&#39;t set .only to execute only one test
 * @author Andrey Pshenkin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-scenario-only"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-scenario-only", rule, {

    valid: [
        {code: "Scenario('test', function (I) {\n            I.amOnPage('/test');        \n });"
}

    ],

    invalid: [
        {
            code: "Scenario.only('test', function (I) {\n            I.amOnPage('/test');\n        });",
            errors: [{
                message: "There should not be .only for skipping in tests",
                type: "MemberExpression"
            }]
        }
    ]
});
