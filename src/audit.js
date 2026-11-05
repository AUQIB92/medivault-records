// Tamper-evident audit log: each entry hashes the previous one.
import crypto from 'node:crypto';

export function chainEntry(prevHash, event) {
  return crypto.createHash('sha256').update(prevHash + JSON.stringify(event)).digest('hex');
}
