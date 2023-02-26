import { expect, it, describe } from 'vitest'
import { sum } from '../src/utils/sum'

describe('utils', () => {
  it('sum: should work as expected', () => {
    expect(sum(1, 2, 3)).toBe(6)
  })
})
