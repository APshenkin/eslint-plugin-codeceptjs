/**
 * @fileoverview Don't set .only to execute only one test
 * @author Andrey Pshenkin
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Don't set .only to execute only one test",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
            MemberExpression: function(node) {
                if (node.object.name === 'Scenario' && node.property.name === 'only') {
                    context.report({
                        node: node,
                        message: 'There should not be .only for skipping in tests'
                    })
                }
            }
        };
    }
};
