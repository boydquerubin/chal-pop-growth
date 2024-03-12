function nbYear(p0, percent, aug, p) // This line defines a JavaScript function named nbYear that takes four parameters: p0 (the initial population), percent (the percentage increase), aug (the additional population added each year), and p (the target population).
    let years = 0; // This line initializes a variable years to keep track of the number of entire years needed for the population to reach or surpass the target population.
    percent = percent / 100; // This line converts the percent parameter from a percentage to a decimal by dividing it by 100. For example, if percent is 5, it converts it to 0.05.
    
    while (p0 < p) { // This line starts a while loop that continues iterating until the current population p0 is less than the target population p.
        p0 += p0 * percent + aug; // Inside the while loop, this line calculates the population at the end of each year. It increases the current population p0 by adding the product of p0 and the percentage increase percent, and also adds the additional population aug.
        years++; // After calculating the population for each year, this line increments the years variable to keep track of how many entire years have passed.
    } //Once the while loop condition (p0 < p) is no longer met, the loop exits, and the function returns the value stored in the years variable, which represents the number of entire years needed for the population to reach or surpass the target population p.
    
    return years; //
}

// Examples:
console.log(nbYear(1500, 5, 100, 5000)); // Output: 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // Output: 10
