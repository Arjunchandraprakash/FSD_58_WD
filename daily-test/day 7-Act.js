// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Problem 1: Get all the countries from Asia continent /region using Filter function
        const asianCountries = data.filter(country => country.region === 'Asia');
        console.log("Asian Countries:", asianCountries);

        // Problem 2: Get all the countries with a population of less than 2 lakhs using Filter function
        const countriesWithLowPopulation = data.filter(country => country.population < 200000);
        console.log("Countries with Population < 2 Lakhs:", countriesWithLowPopulation);

        // Problem 3: Print the following details name, capital, flag, using forEach function
        data.forEach(country => {
            console.log("Name:", country.name.common);
            console.log("Capital:", country.capital);
            console.log("Flag:", country.flags.svg);
        });

        // Problem 4: Print the total population of countries using reduce function
        const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
        console.log("Total Population:", totalPopulation);

        // Problem 5: Print the country that uses US dollars as currency
        const countryWithUSD = data.find(country => {
            const currencies = Object.values(country.currencies);
            return currencies.includes('USD');
        });
        console.log("Country using US Dollars:", countryWithUSD);
    })
    .catch(error => console.error("Error fetching data:", error));
