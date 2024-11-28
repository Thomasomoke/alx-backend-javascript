function calculateNumber(type, a, b) {
  // Round the numbers
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;

    case 'SUBTRACT':
      return roundedA - roundedB;

    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error'; // Prevent division by zero
      }
      return parseFloat((roundedA / roundedB).toFixed(1)); // Round the result to 1 decimal place

    default:
      throw new Error('Invalid type');
  }
}

module.exports = calculateNumber;
