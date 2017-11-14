/**
 * @fileoverview There should not be pause in tests
 * @author Andrey Pshenkin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-pause"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-pause", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "pause()",
            errors: [{
                message: "Pauses should me removed from test code",
                type: "ExpressionStatement"
            }]
        }
    ]
});
