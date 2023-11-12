
function getMatchingIngredients(ingredientsMap, ingredientsList) {
    // see which ingredients in ingredients list are in ingredients map

    let missingList = [];
    let sustainableList = [];
    let unsustainableList = [];

    ingredientsList.forEach(el => {
        // remove anything in btwn ()

        let ingredient = el.replace(/\([^)]*\)/g, '');

        ingredient = ingredient.replace(/may\s*contain\s*[:\/]*\s*|\s*peut\s*contenir\s*[:\/]*\s*/gi, '');

        ingredient = ingredient.replace(/[\[\]]/g, '');

        ingredient = ingredient.replace(/\(.*/, '');

        ingredient = ingredient.trim();

        ingredient = ingredient.replace(/\s{2,}/g, ' ');

        // remove may contain: or may contain / peut contenir

        // remove from May Contain to (+/-\)

        // remove may contain:

        // May Contain: Titanium Dioxide, Iron Oxides, Mica.

        if (ingredient in ingredientsMap) {
            if (ingredientsMap[ingredient].score > 5) {
                sustainableList.push(ingredientsMap[ingredient]);
            } else {
                unsustainableList.push(ingredientsMap[ingredient]);
            }
        } else {
            missingList.push(ingredient);
        }

    });

    return {
        sustainableList,
        unsustainableList,
        missingList,
    }
}

module.exports = getMatchingIngredients;
