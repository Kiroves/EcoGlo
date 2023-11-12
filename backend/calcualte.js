
function calculateAverage(IngredientArray) {;
    let total = 0
    const length = IngredientArray.length
    for (const ingredient of IngredientArray) {
        total += ingredient._score
    }
    const average = total/length
    const roundedAverage = average.toFixed(1);
    return roundedAverage;
}

module.exports = calculateAverage;
