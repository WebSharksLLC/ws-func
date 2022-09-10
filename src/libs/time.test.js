const {timeHelper} = require('./');

test('timestamp', () => {
    const timestamp = timeHelper.timestamp();
    expect(timestamp).toBeGreaterThan(0);
    expect(timeHelper.timestamp(10)).toBeGreaterThan(timestamp);

})