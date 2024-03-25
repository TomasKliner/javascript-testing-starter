import { describe, test, it, expect } from 'vitest';
import {max} from '../src/intro.js'

describe("max", () => {
    it('should return the larger of two numbers', () => {
        expect(max(1, 2)).toBe(2);
        expect(max(2, 1)).toBe(2);
    })

    it("should return first number if they are equal", () => {
        expect(max(1, 1)).toBe(1);
    })
})