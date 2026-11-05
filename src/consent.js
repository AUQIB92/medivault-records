// Signs patient consent forms so hospitals can prove who agreed to what.
import crypto from 'node:crypto';
import { createRecordKeys } from './keystore.js';

export { createRecordKeys };

export function signConsent(consent, privateKey) {
  const data = Buffer.from(JSON.stringify(consent));
  return crypto.sign(null, data, privateKey).toString('base64');
}

export function verifyConsent(consent, signature, publicKey) {
  const data = Buffer.from(JSON.stringify(consent));
  const sigBuf = Buffer.from(signature, 'base64');
  return crypto.verify(null, data, publicKey, sigBuf);
}
