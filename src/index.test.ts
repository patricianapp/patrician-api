/**
 * @group unit
 */

describe('Test', () => {
  it('Test', () => {
    const regex = new RegExp('[a-z0-9]*');
    const testedValue = 'a';
    expect(regex.test(testedValue)).toBeTruthy();
  });
});
