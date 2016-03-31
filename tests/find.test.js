var assert = require('chai').assert

var geoTz = require('../index.js')

describe('find tests', function() {
  
  it('should find the timezone geojson', function() {
    var tz = geoTz.tz(47.650499, -122.350070)
    assert.isString(tz)
    assert.equal(tz, 'America/Los_Angeles')
  })

  it('should return a moment-timezone', function() {
    var tzMoment = geoTz.tzMoment(47.650499, -122.350070)
    assert.isObject(tzMoment)
    assert.property(tzMoment, '_z')
    assert.property(tzMoment._z, 'name')
    assert.equal(tzMoment._z.name, 'America/Los_Angeles')
  })

  it('should parse time correctly', function() {
    var tzMoment = geoTz.tzMoment(47.650499, -122.350070, '2016-03-30T01:23:45Z')
    assert.equal(tzMoment.format('LLLL'), 'Tuesday, March 29, 2016 6:23 PM')
  })

})