const unEqual = (number) => {
    return number % 2 === 0 ? number + 1 : number + 2;
  };
  
  const isPrime = (value) => {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return value > 1;
  };
  
  const lowerPrimes = (number) => {
    if (number < 3) return 0;
    let lowerPrime;
    let counter = 1;
    while (!lowerPrime) {
      if (isPrime(number - counter)) {
        lowerPrime = number - counter;
      }
      counter++;
    }
    return lowerPrime;
  };
  
  const fibonacci = (number) => {
    const correctedNumber = number < 6 ? 6 : number;
    let array = [];
  
    for(let i = 0; i <= correctedNumber; i ++){
      if(i === 0){
        array.push(0);
      } else if(i === 1 || i === 2){
        array.push(1)
      } else {
        array.push(array[i - 2] + array[i - 1])
      }
    }
  
    const newNumber = array.find(item => {
      return number < item;
    })
  
    return newNumber;
  }
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "incrementToUnequal":
        return { count: unEqual(state.count) };
      case "decrementToPrime":
        return { count: lowerPrimes(state.count) };
      case "incrementToFibonacci":
        return { count: fibonacci(state.count)};
      default:
        throw new Error("No valid selection was used");
    }
  };