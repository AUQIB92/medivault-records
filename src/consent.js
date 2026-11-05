// Signs patient consent forms so hospitals can prove who agreed to what.
import crypto from 'node:crypto';
import { createRecordKeys } from './keystore.js';

export { createRecordKeys };

export function signConsent(consent, privateKey) {
  return crypto.createSign('RSA-SHA256').update(JSON.stringify(consent)).sign(privateKey, 'base64');
}

export function verifyConsent(consent, signature, publicKey) {
  return crypto.createVerify('RSA-SHA256').update(JSON.stringify(consent)).verify(publicKey, signature, 'base64');
}
