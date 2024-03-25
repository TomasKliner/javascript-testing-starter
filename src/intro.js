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

  return arr.reduce((cum, x) => cum += x, 0) / arr.length;

}


//TDD Factorial

export function factorial(num) {
  if (num < 0) return undefined
  if (num === 0 || num === 1)
    return 1;
  else
    return num * factorial(num - 1);

}