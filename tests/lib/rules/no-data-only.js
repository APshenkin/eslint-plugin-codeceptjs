/**
 * @fileoverview no data
 * @author Andrey Pshenkin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-data-only"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-data-only", rule, {

    valid: [
        {
            code: "Data(foo).Scenario('test', function (I) {\n            I.amOnPage('/test');\n        });"
        }

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "Data(foo).only.Scenario('test', function (I) {\n            I.amOnPage('/test');\n        });",
            errors: [{
                message: "There should not be .only for skipping in data driven tests",
                type: "MemberExpression"
            }]
        }
    ]
});
