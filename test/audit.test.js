import test from 'node:test';
import assert from 'node:assert/strict';
import { chainEntry } from '../src/audit.js';

test('chain hashes are stable hex', () => {
  const h = chainEntry('genesis', { action: 'view', record: 'p_881' });
  assert.equal(h, chainEntry('genesis', { action: 'view', record: 'p_881' }));
  assert.match(h, /^[0-9a-f]+$/);
});

test('changing history changes the hash', () => {
  assert.notEqual(chainEntry('genesis', { a: 1 }), chainEntry('genesis', { a: 2 }));
});
