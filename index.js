// Helper function to generate a random number between a minimum and maximum value
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Example usage of helper functions
  const min = 1;
  const max = 100;
  const randomNumber = getRandomNumber(min, max);
  console.log("Random number:", randomNumber);
  
  if (isEven(randomNumber)) {
    console.log("The random number is even.");
  } else {
    console.log("The random number is odd.");
  }
  