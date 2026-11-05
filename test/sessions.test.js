import test from 'node:test';
import assert from 'node:assert/strict';
import { openSession, checkSession } from '../src/sessions.js';

test('sessions verify and return their claims', () => {
  assert.deepEqual(checkSession(openSession({ sub: 'dr_lee', role: 'clinician' })), { sub: 'dr_lee', role: 'clinician' });
});

test('forged or malformed sessions are rejected', () => {
  const [, sig] = openSession({ sub: 'dr_lee' }).split('.');
  const forged = `${Buffer.from(JSON.stringify({ sub: 'admin' })).toString('base64url')}.${sig}`;
  assert.equal(checkSession(forged), null);
  assert.equal(checkSession('garbage'), null);
});
