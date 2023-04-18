import { getAddress } from 'permawebjs/wallet';
import fs from 'fs';
import { createTransaction } from 'permawebjs/transaction';

const key = JSON.parse(fs.readFileSync('wallet.json').toString());

const contractSource = fs.readFileSync('src/contracts/handle.js', 'utf-8');
const addr = await getAddress({ key, environment: 'mainnet' });

const inputTags = [
  { name: 'Content-Type', value: 'application/javascript' },
  {
    name: 'Init-State', value: JSON.stringify({
      creator: addr,
      owner: addr,
    })
  },
];

const tx = await createTransaction({ data: contractSource, key: key, environment: 'mainnet', type: 'data', options: { tags: inputTags, signAndPost: true } });

console.log("Transaction result for contract source with permawebJS", tx);

if (tx.postedTransaction.status === 400) {
  throw new Error('Not enough $AR in wallet to upload pst!');
} else if (tx.postedTransaction.status === 200) {
  console.log("Txn uploaded successfully", tx);
} else {
  throw new Error(tx.postedTransaction.statusText + ' while trying to upload!');
}
