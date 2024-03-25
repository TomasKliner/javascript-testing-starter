// Lesson: Writing your first tests
export function max(a, b) {
  return (a >= b) ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

//TDD Excercise
export function calcAvg(arr) {
  if (arr.length === 0)
    return NaN;

  let average = 0;

  for (let i = 0; i < arr.length; i++) {
    average += arr[i];
  }
  
  return average / arr.length

}
