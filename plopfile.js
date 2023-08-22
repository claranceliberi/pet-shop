module.exports = function (
    /** @type {import('plop').NodePlopAPI} */
    plop
) {
    plop.setGenerator("component", {
        description: "Create a new component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your component name?",
            },
            {
                type: "list",
                name: "folder",
                message: "Which folder should it be placed in?",
                choices: ["atoms", "molecules", "organisms"],
            },
        ],
        actions: [
            {
                type: "add",
                path: "components/{{folder}}/{{pascalCase name}}/S{{pascalCase name}}.cy.ts",
                templateFile: "plop-templates/SComponent.cy.hbs",
            },
            {
                type: "add",
                path: "components/{{folder}}/{{pascalCase name}}/S{{pascalCase name}}.spec.ts",
                templateFile: "plop-templates/SComponent.spec.hbs",
            },
            {
                type: "add",
                path: "components/{{folder}}/{{pascalCase name}}/S{{pascalCase name}}.stories.ts",
                templateFile: "plop-templates/SComponent.stories.hbs",
            },
            {
                type: "add",
                path: "components/{{folder}}/{{pascalCase name}}/S{{pascalCase name}}.types.ts",
                templateFile: "plop-templates/SComponent.types.hbs",
            },
            {
                type: "add",
                path: "components/{{folder}}/{{pascalCase name}}/S{{pascalCase name}}.vue",
                templateFile: "plop-templates/SComponent.vue.hbs",
            },
            {
                type: "add",
                path: "components/{{folder}}/{{pascalCase name}}/index.ts",
                templateFile: "plop-templates/index.hbs",
            },
        ],
    })
}
