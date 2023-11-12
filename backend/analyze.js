
function getMatchingIngredients(ingredientsMap, ingredientsList) {
    // see which ingredients in ingredients list are in ingredients map

    // loop through ingredientsList if
    ingredientsList.push('May Contain: Titanium Dioxide');
    ingredientsList.push('Ferric Ferrocyanide]');

    let containsList = [];
    let missingList = [];

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
            containsList.push(ingredientsMap[ingredient]);
        } else {
            missingList.push(ingredient);
        }

    });

    return {
        containsList,
        missingList,
    }
}

module.exports = getMatchingIngredients;
