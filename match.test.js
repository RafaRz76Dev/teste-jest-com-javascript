// match.test.js
import { sum } from './match';

test('somando 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

import { multiply } from './match';

test('multiplicando 2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

import { division } from './match';

test('dividindo 6 / 2 to equal 3', () => {
  expect(division(6, 2)).toBe(3);
});

import { subtract} from './match';

test('subtraindo 8 - 2 to equal 6', () => {
  expect(subtract(8, 2)).toBe(6);
});

