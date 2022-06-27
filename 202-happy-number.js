// SOLUTION

    var isHappy = function(n) {
        
        let set = new Set();
        
        while(!set.has(n)) {
            
            set.add(n);
            
            const stringDigits = n.toString().split('');
            const numberDigits = stringDigits.map(Number);
            
            const squaresArray = [];
            
            for (const number of numberDigits) {
                const squares = number ** 2;
                squaresArray.push(squares);
            }
            
            let sumOfSquaresArray = squaresArray.reduce(getSum, 0); 
            
            function getSum(accumulator, square) {
                return accumulator + square;
            }
            
            if (sumOfSquaresArray == 1) {
                return true;
            }
            
            n = sumOfSquaresArray; 
        }
        
        return false;
    };

// EXPLANATION

    var isHappy = function(n) {
        
        // A set can only store unique values, so we can check against a set to see if the sum of squares is a repeating value (return false) or not (return true)
        // Start at 1:30 of this video for a more detailed explanation: https://www.youtube.com/watch?v=b0PC0-NRCxw
        let set = new Set();
        
        // While n is NOT already in the set (i.e. not a repeat):
        while(!set.has(n)) {
            
            // Add n to the set
            set.add(n);
            
            // Split n into digits
            const stringDigits = n.toString().split('');
            const numberDigits = stringDigits.map(Number);
            
            // Create an array that the squared digits will be stored in, so we can sum them later
            const squaresArray = [];
            
            // Square each digit and add the squared value to the squaresArray
            for (const number of numberDigits) {
                const squares = number ** 2;
                squaresArray.push(squares);
            }
            
            // Sum the squaresArray using reduce()
                // About reduce(): https://www.w3schools.com/jsref/jsref_reduce.asp
                // Example of reduce(): https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
                // Explanation of accumulator: https://www.delftstack.com/howto/javascript/javascript-sum-of-array/
            let sumOfSquaresArray = squaresArray.reduce(getSum, 0); 
            
            function getSum(accumulator, square) {
                return accumulator + square;
            }
            
            // If sumOfSquaresArray is equal to 1, we have a happy number (n does not repeat in the set), so return true
            if (sumOfSquaresArray == 1) {
                return true;
            }
            
            // Otherwise, the sumOfSquaresArray becomes n, so it can now run through the initial while loop
            n = sumOfSquaresArray; 
        }
        
        // Otherwise (if the sumOfSquaresArray doesn't equal 1 AND the set already contains the new n), exit the while loop and return false
        // We do not have a happy number
        // Again, to understand why, start at 1:30 of this video for a detailed explanation: https://www.youtube.com/watch?v=b0PC0-NRCxw
        return false;
    };