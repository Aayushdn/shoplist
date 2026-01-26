export function findProductFromBarcode(rawCode, data) {
  const result = data.find((item) => item.barcode === rawCode);

  if (!result) return null;
  return result;
}
