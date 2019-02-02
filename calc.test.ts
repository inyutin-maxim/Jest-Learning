//noinspection TypeScriptPreferShortImport
import { Calc } from './calc';

describe('calc', () => {
	beforeEach(() => {
		this.calc = new Calc();
	});
	describe('sum method', () => {
		test('calc.sum(1, 2) = 3', () => {
			expect(this.calc.sum(1, 2)).toBe(3);
		});
		test('calc.sum(5, 7) = 12', () => {
			expect(this.calc.sum(5, 7)).toBe(12);
		});
		test('calc.sum(-5, 7) = 2', () => {
			expect(this.calc.sum(-5, 7)).toBe(2);
		});
		test('calc.sum(5, -7) = -2', () => {
			expect(this.calc.sum(5, -7)).toBe(-2);
		});
		test('calc.sum(-5, -7) = -12', () => {
			expect(this.calc.sum(-5, -7)).toBe(-12);
		});
	});
	
	describe('minus method', () => {
		test('calc.minus(1, 3) = -2', () => {
			expect(this.calc.minus(1, 3)).toBe(-2);
		});
		test('calc.minus(5, 7) = -2', () => {
			expect(this.calc.minus(5, 7)).toBe(-2);
		});
		test('calc.minus(-5, 7) = -12', () => {
			expect(this.calc.minus(-5, 7)).toBe(-12);
		});
		test('calc.minus(5, -7) = 12', () => {
			expect(this.calc.minus(5, -7)).toBe(12);
		});
		test('calc.minus(-5, -7) = 2', () => {
			expect(this.calc.minus(-5, -7)).toBe(2);
		});
	});
	
	describe('multiply method', () => {
		test('calc.multiply(1, 3) = 3', () => {
			expect(this.calc.multiply(1, 3)).toBe(3);
		});
		test('calc.multiply(5, 7) = 35', () => {
			expect(this.calc.multiply(5, 7)).toBe(35);
		});
		test('calc.multiply(-5, 7) = -35', () => {
			expect(this.calc.multiply(-5, 7)).toBe(-35);
		});
		test('calc.multiply(5, -7) = -35', () => {
			expect(this.calc.multiply(5, -7)).toBe(-35);
		});
		test('calc.multiply(-5, -7) = 35', () => {
			expect(this.calc.multiply(-5, -7)).toBe(35);
		});
	});
	
	describe('division method', () => {
		test('calc.division(6, 3) = 2', () => {
			expect(this.calc.division(6, 3)).toBe(2);
		});
		test('calc.division(-9, 3) = -3', () => {
			expect(this.calc.division(-9, 3)).toBe(-3);
		});
		test('calc.division(9, -3) = -3', () => {
			expect(this.calc.division(9, -3)).toBe(-3);
		});
		test('calc.division(25, 5) = 5', () => {
			expect(this.calc.division(25, 5)).toBe(5);
		});
		test('calc.division(-25, -5) = 5', () => {
			expect(this.calc.division(-25, -5)).toBe(5);
		});
	});
});