class Ingredient {
    // Constructor to initialize the object with a name and age
    constructor(name, score, reason) {
        this._name = name;
        this._score = score;
        this._reason = reason;
    }

    // Getter and setter for the name property
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    // Getter and setter for the score property
    get score() {
        return this._score;
    }

    set score(newScore) {
        if (newScore >= 0 && newScore <= 10) {
            this._score = newScore;
        } else {
            console.error("Score must be between 0 and 10");
        }
    }

    // Getter and setter for the reason property
    get reason() {
        return this._reason;
    }

    set reason(newReason) {
        this._reason = newReason;
    }
}

module.exports =  Ingredient;