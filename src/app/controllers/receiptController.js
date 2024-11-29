import receiptService from '../services/receiptService.js';

const processReceipt = (req, res) => {
  const receipt = req.body;
  if (!receipt || !receipt.retailer || !receipt.total || !receipt.items) {
    return res.status(400).send({ error: 'Invalid receipt format' });
  }

  const receiptId = receiptService.saveReceipt(receipt);
  res.status(200).send({ id: receiptId });
};

const getPoints = (req, res) => {
  const receiptId = req.params.id;
  const points = receiptService.calculatePoints(receiptId);

  if (points === null) {
    return res.status(404).send({ error: 'Receipt not found' });
  }

  res.status(200).send({ points });
};

export default { processReceipt, getPoints };
