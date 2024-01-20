/**
 * This file doesn't contain any component.
 * It has been created to store all the utility functions
 * that may be required multiple times for different components.
 */

//This function converts rgb color code to corresponding hex code
export function rgbToHex(r, g, b) {
    // Ensure that the values are within the valid range (0 to 255)
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
  
    // Convert each component to a hexadecimal string and concatenate them
    const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
  
    return `#${hex}`;
}

//This function returns a masked number based on the number of digits to show and the direction of the masking
export function maskNumber (number, numberOfDigits, direction){
    let maskedNumber = "";
    let numberOfMaskedDigits = number.length - numberOfDigits;
    //check the direction
    if(direction === 'f'){
        //masking from front, display last digits
        for(let i=0; i<numberOfMaskedDigits; i++){
            maskedNumber += '*';
        }

        maskedNumber+=number.slice(-numberOfDigits);
    }
    else if(direction === 'b' ) {
        //masking from back, display front digits
        for(let i=0; i<numberOfMaskedDigits; i++){
            maskedNumber += '*';
        }

        maskedNumber = number.slice(0, numberOfDigits) + maskedNumber;
    }
    else{
        return `Invalid direction: ${direction}
                f - front
                b - back`;
    }

    return maskedNumber;
}

//This function returns a random element from an array
export function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}