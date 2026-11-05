# MediVault Records (demo)

A small patient-records service used to demonstrate post-quantum migration with [Quantyrix](https://quantyrix.com).

It deliberately uses classical cryptography that a large quantum computer would break:

| File | Crypto | Risk |
|---|---|---|
| `src/consent.js` + `src/keystore.js` | RSA-2048 signatures | Shor's algorithm: forged consent records |
| `src/sessions.js` | ECDSA P-256 | Shor's algorithm: forged clinician sessions |
| `src/audit.js` | SHA-1 | Broken hash: rewritable audit trail |

Health records must stay confidential and authentic for decades, the classic "harvest now, decrypt later" target.

```sh
npm test
```
