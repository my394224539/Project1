import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home/tip-calculator', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home/tip-calculator');
    assert.ok(route);
  });
});
