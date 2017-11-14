/**
 * @fileoverview no data
 * @author Andrey Pshenkin
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "no data",
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
                if (node.object.callee && node.object.callee.name === 'Data' && node.property.name === 'only') {
                    context.report({
                        node: node,
                        message: 'There should not be .only for skipping in data driven tests'
                    })
                }
            }
        };
    }
};
