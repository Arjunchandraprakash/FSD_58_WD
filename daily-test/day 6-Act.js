// Class - Movie

// Define the Movie class
class Movie {
    // Constructor with default rating set to "PG"
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    // Method to filter movies with rating "PG"
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Create an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");



// Uber Price
class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distanceInMiles, durationInMinutes) {
        const distanceCost = distanceInMiles * this.costPerMile;
        const durationCost = durationInMinutes * this.costPerMinute;
        const totalPrice = this.baseFare + distanceCost + durationCost;
        return totalPrice;
    }
}

// Example usage:
const calculator = new UberPriceCalculator(5, 0.5, 1.25);
const distance = 10; // miles
const duration = 20; // minutes
const price = calculator.calculatePrice(distance, duration);
console.log("Total Price:", price);


// Person Details

class Person {
    constructor(firstName, lastName, age, gender, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails() {
        return {
            fullName: this.getFullName(),
            age: this.age,
            gender: this.gender,
            email: this.email
        };
    }
}

// Example usage:
const person1 = new Person("John", "Doe", 30, "Male", "john.doe@example.com");
console.log(person1.getDetails());
