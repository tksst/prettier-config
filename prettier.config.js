/** @type {import('prettier').Options} */
module.exports = {
    tabWidth: 4,
    printWidth: 120,
    overrides: [
        {
            files: "*.{json,json5,yaml,yml}",
            options: {
                tabWidth: 2,
            },
        },
        {
            files: "*.md",
            options: {
                tabWidth: 2,
                trailingComma: "none",
            },
        },
    ],
};
