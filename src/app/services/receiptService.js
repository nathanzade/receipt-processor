import { v4 as uuidv4 } from 'uuid';
import calculateReceiptPoints from '../utils/calculateReceiptPoints.js';

const receipts = new Map(); 

const saveReceipt = (receipt) => {
  const receiptId = uuidv4();
  receipts.set(receiptId, receipt);
  return receiptId;
};

const calculatePoints = (receiptId) => {
  const receipt = receipts.get(receiptId);
  if (!receipt) return null;

  return calculateReceiptPoints(receipt);
};

export default { saveReceipt, calculatePoints };
