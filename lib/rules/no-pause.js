/**
 * @fileoverview There should not be pause in tests
 * @author Andrey Pshenkin
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "There should not be pause in tests",
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
            ExpressionStatement: function(node) {
                if (node.expression.callee && node.expression.callee.name === 'pause') {
                    context.report({
                        node: node,
                        message: 'Pauses should me removed from test code'
                    })
                }
            }
        };
    }
};
