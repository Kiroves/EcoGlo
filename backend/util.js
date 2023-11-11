
function splitString(str, b) {
    const index = str.indexOf(b);

    if (index !== -1) {
        const before = str.slice(0, index);
        const after = str.slice(index + b.length);
        return before;
    } else {
        return str;
    }
}

function getIngredientsList(str) {
    var ingredients = [];
    split = str.split('.');
    split.pop();
    console.log(split);

    for (i = 0; i < split.length; i++) {
        if (i !== split.length - 1) {
            // split by - and :
            let pattern = /-(.*?):/;
            let match = pattern.exec(split[i]);

            if (match) {
                // Extract the text between "-" and ":"
                ingredients.push(match[1]);
            } else {
                ingredients.push(split[i]);
            }
            
            
        } else {
            // else split by ,
            const list = split[i].split(', ');
            ingredients = ingredients.concat(list);
        }
    }

    // console.log(ingredients);
    return ingredients;
}

module.exports = {
    splitString,
    getIngredientsList,
};

// Your input string
let inputString = "- test: example";

// Define the pattern using regular expression
let pattern = /-(.*?):/;

// Use the exec method to find the first match
let match = pattern.exec(inputString);

// Check if a match is found
if (match) {
    // Extract the text between "-" and ":"
    let extractedText = match[1].trim();  // Trim to remove leading/trailing spaces
    console.log("Extracted text:", extractedText);
} else {
    console.log("No match found.");
}
