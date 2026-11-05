import test from 'node:test';
import assert from 'node:assert/strict';
import { createRecordKeys, signConsent, verifyConsent } from '../src/consent.js';

test('a signed consent verifies', () => {
  const { privateKey, publicKey } = createRecordKeys();
  const consent = { patient: 'p_881', scope: 'share-labs', granted: true };
  assert.equal(verifyConsent(consent, signConsent(consent, privateKey), publicKey), true);
});

test('an altered consent is rejected', () => {
  const { privateKey, publicKey } = createRecordKeys();
  const sig = signConsent({ patient: 'p_881', granted: false }, privateKey);
  assert.equal(verifyConsent({ patient: 'p_881', granted: true }, sig, publicKey), false);
});
