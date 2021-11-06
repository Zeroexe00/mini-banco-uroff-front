export const toCurrency = (value) => {
  // if (typeof value !== "number") {
  //     return value;
  // }
  // const formatter = new Intl.NumberFormat('es-CL', {
  //     style: 'currency',
  //     currency: 'CLP',
  //     minimumFractionDigits: 0
  // });
  // return formatter.format(value);
  let val = (value/1).toFixed(2).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}