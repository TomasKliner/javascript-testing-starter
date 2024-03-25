import { describe, test, it, expect } from 'vitest';
import {max, fizzBuzz, calcAvg} from '../src/intro.js'
describe("max", () => {
    it('should return the larger of two numbers', () => {
        expect(max(1, 2)).toBe(2);
        expect(max(2, 1)).toBe(2);
    })

    it("should return first number if they are equal", () => {
        expect(max(1, 1)).toBe(1);
    })
})


describe("fizzBuzz", () => {
    it("should return 'Fizz' if number is divisible by 3", () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })
    it("should return 'Buzz' if number is divisible by 5", () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })
    it("should return 'FizzBuzz' if number is divisible by 3 and 5", () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    it("should return number as string if number is not divisible by 3 or 5", () => {
        expect(fizzBuzz(2)).toBe('2');
    })
})


//TDD Excercise
describe("calculateAverage", () => {
    it("should return NaN if empty array is passed", () => {
        expect(calcAvg([])).toBe(NaN);
    })
    it("should calc the average of array with single element", ()=>{
        expect(calcAvg([1])).toBe(1);
    })
    it("should return the average of an array of numbers", () => {
        expect(calcAvg([1, 2, 3, 4, 5])).toBe(3);
    })

})