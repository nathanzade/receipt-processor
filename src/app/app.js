import express from 'express';
import bodyParser from 'body-parser';
import receiptController from './controllers/receiptController.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/receipts/process', receiptController.processReceipt);
app.get('/receipts/:id/points', receiptController.getPoints);

app.listen(PORT, () => {
  console.log(`Receipt Processor service is running on http://localhost:${PORT}`);
});
