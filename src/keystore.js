// Signing keys for patient consent records.
import crypto from 'node:crypto';

export function createRecordKeys() {
  return crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
}
