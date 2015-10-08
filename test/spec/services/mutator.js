'use strict';

describe('Service: mutator', function () {

  // load the service's module
  beforeEach(module('gameAppApp'));

  // instantiate service
  var mutator;
  beforeEach(inject(function (_mutator_) {
    mutator = _mutator_;
  }));

  it('should do something', function () {
    expect(!!mutator).toBe(true);
  });

});
