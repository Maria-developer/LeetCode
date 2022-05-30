function isValid(string) {
  const hashMap = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  const stack = [];

  for (let bracket of string) {
    if (hashMap[bracket]) {
      stack.push(hashMap[bracket]);
    } 
    
    else if (stack.length > 0 && stack[stack.length - 1] === bracket) {
    stack.pop();
    } 
    
    else {
      return false;
    }
  }
  
  if (stack.length === 0) {
    return true;
  }
}

console.log(isValid("{[]}"));

// Explanation of this solution: https://www.youtube.com/watch?v=OxbxP5_-Tcs

// Hash table basics: https://www.youtube.com/watch?v=shs0KM3wKv8

// Stacks and queues: https://www.youtube.com/watch?v=wjI1WNcIntg&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=5

// How brackets are stored in the stack: https://www.youtube.com/watch?v=IhJGJG-9Dx8&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX