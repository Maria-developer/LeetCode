var majorityElement = function(nums) {

    // Create a new, empty hash
    const hashTable = {};
    
    // Add 1 to the count for each occurrence of a number/element (or, if it's the first occurrence, set the count to 1)
    for (const num of nums) {
        hashTable[num] = hashTable[num] + 1 || 1;
    }
    
    // The majority element is defined as the element that appears more than [n/2] times, where n == nums.length, so return the element that meets this condition
    for (const key in hashTable) {
        if (hashTable[key] > nums.length/2) {
            return key;
        }
    }

}

/*

Explanation: https://betterprogramming.pub/two-ways-of-finding-the-element-that-occurs-the-most-in-an-array-with-ruby-7fb484ea1a6d

JavaScript version: https://www.youtube.com/watch?v=nQONPoEzASM

*/