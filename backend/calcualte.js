
function calculateAverage(sustainableList, unsustainableList) {;
    let total = 0
    const length = sustainableList.length + unsustainableList.length
    for (const ingredient of sustainableList) {
        total += ingredient._score
    }
    for (const ingredient of unsustainableList) {
        total += ingredient._score
    }
    const average = total/length
    const roundedAverage = average.toFixed(1);
    return roundedAverage;
}

module.exports = calculateAverage;
