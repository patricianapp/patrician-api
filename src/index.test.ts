/**
 * @group unit
 */

describe('Test', () => {
  it('Test', () => {
    const regex = new RegExp('[a-z0-9][.-a-z0-9]{1,61}[a-z0-9]');
    const testedValue = 's3://course-authoringstorage-transcribe-files';
    expect(regex.test(testedValue)).toBeTruthy();
  });
});
