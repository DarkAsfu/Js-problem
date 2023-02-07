function gemsToDiamond(gemsFdOne, gemsFdTwo, gemsFdThree){
    // Check if any of the input parameters is missing
    if (gemsFdOne === undefined || gemsFdTwo === undefined || gemsFdThree === undefined) {
        return "Error: One or more input parameters are missing.";
    }
    // Check if the input parameters are numbers
    if (typeof gemsFdOne !== 'number' || typeof gemsFdTwo !== 'number' || typeof gemsFdThree !== 'number') {
        return "Error: Input parameter is not a number.";
    }
    // The gems power each friend has
    const powerOfGemsFdOne = 21;
    const powerOfGemsFdTwo = 32;
    const powerOfGemsFdThree = 43;
    
    // Calculate the number of diamonds each friend has
    const fdOneDiamond = powerOfGemsFdOne * gemsFdOne;  
    const fdTwoDiamond = powerOfGemsFdTwo * gemsFdTwo;  
    const fdThreeDiamond = powerOfGemsFdThree * gemsFdThree;  
    
    // Calculate the total number of diamonds
    const totalDiamond = fdOneDiamond + fdTwoDiamond + fdThreeDiamond;
    
    // If the total number of diamonds is greater than or equal to 2000, deduct 2000 from the total
    if ( totalDiamond >= 1000*2){
        const finalDiamond = totalDiamond -2000;
        return finalDiamond;
    }
    // If the total number of diamonds is less than 2000, return the total
    else{
        return totalDiamond;
    }
}

console.log(gemsToDiamond(100, 5, 1));
