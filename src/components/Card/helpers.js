// cardvalidation
// take pair numbers and 0 [0,2,4,6,8,10]
// multiply the pair numbers * 2
// replace the old numbers
// if its divisible by 10, then is valid card
// number must be a string
export const validateCreditCard = (number) => {
  const validation = [];
  let payload = 0;
  if (!number) return false;
  for (let i = 0; i < number.length; i++) {
    if (i === 0 || i % 2 === 0) {
      let calcNumber = parseInt(number[i]) * 2;
      calcNumber = calcNumber.toString();
      if (calcNumber.length > 1) {
        for (let j = 0; j < calcNumber.length; j++) {
          validation.push(parseInt(calcNumber[j]));
        }
      } else {
        validation.push(parseInt(parseInt(calcNumber)));
      }
    } else {
      validation.push(parseInt(number[i]));
    }
  }

  validation.forEach((number) => payload += parseInt(number));
  if (payload % 10 == 0) return true;
  return false;
};
