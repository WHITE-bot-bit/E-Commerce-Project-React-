import {it,expect,describe} from 'vitest';
import {formatMoney} from './money';

describe('formatMoney', () => {
  it('formats 1999 cent as $19.99',() => {
    expect(formatMoney(1999)).toBe('$19.99');
  });

  it('display 2 decimal', () => {
    expect(formatMoney(1090)).toBe('$10.90');
    expect(formatMoney(1000)).toBe('$10.00');
  });
});