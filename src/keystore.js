// Signing keys for patient consent records.
import crypto from 'node:crypto';

export function createRecordKeys() {
  return crypto.generateKeyPairSync('ml-dsa-65');
}
