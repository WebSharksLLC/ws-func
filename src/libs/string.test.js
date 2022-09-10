const {stringHelper} = require('./');

test('isNullOrEmpty', () => {
    expect(stringHelper.isNullOrEmpty(null)).toBeTruthy();
    expect(stringHelper.isNullOrEmpty('')).toBeTruthy();
    expect(stringHelper.isNullOrEmpty(undefined)).toBeTruthy();

    expect(stringHelper.isNullOrEmpty(' ')).toBeTruthy();
    expect(stringHelper.isNullOrEmpty(' sd sadf')).toBeFalsy();
})

test('makeSlug', () => {
    expect(stringHelper.makeSlug('Hello World')).toBe('hello-world');
    expect(stringHelper.makeSlug('Hello World!')).toBe('hello-world');
    expect(stringHelper.makeSlug('Hello World!#$%^&*()@#')).toBe('hello-world');
    expect(stringHelper.makeSlug('Hello   World!')).toBe('hello-world');
})

test('random', () => {
    expect(stringHelper.random(5).length).toBe(5);
    expect(stringHelper.random(10).length).toBe(10);
    expect(stringHelper.random(15).length).toBe(15);

})