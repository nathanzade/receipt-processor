const calculateReceiptPoints = (receipt) => {
  let points = 0;

  points += (receipt.retailer.match(/\w/g) || []).length;

  if (parseFloat(receipt.total) % 1 === 0) points += 50;

  if (parseFloat(receipt.total) % 0.25 === 0) points += 25;

  points += Math.floor(receipt.items.length / 2) * 5;

  receipt.items.forEach((item) => {
    const trimmedLength = item.shortDescription.trim().length;
    if (trimmedLength % 3 === 0) {
      points += Math.ceil(parseFloat(item.price) * 0.2);
    }
  });

  const purchaseDay = parseInt(receipt.purchaseDate.split('-')[2], 10);
  if (purchaseDay % 2 !== 0) points += 6;

  const hour = parseInt(receipt.purchaseTime.split(':')[0], 10);
  if (hour === 14) points += 10;

  return points;
};

export default calculateReceiptPoints;
