// visa starts with 4
// mastercard with 5
// american express 3
export const getBrand = (number) => {
  if (number) {
    if (number[0] === '4') {
      return 'Visa';
    } else if (number[0] === '5') {
      return 'Master';
    } return 'Amex';
  } return 'Visa';
};
