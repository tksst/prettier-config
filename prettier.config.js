/** @type {import('prettier').Options} */
module.exports = {
    tabWidth: 4,
    printWidth: 120,
    overrides: [
        {
            files: "*.{json,json5}",
            options: {
                tabWidth: 2,
            },
        },
        {
            files: "*.{md,yaml,yml}",
            options: {
                tabWidth: 2,
                trailingComma: "none",
            },
        },
    ],
};
