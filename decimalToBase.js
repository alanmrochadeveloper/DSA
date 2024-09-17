function decimalToBase(decimal = 0, base = 2) {
  if (base < 2 || base > 64) throw Error(`Base cannot be lesser than 2 or greater than 64`)
  if (decimal == 0) return "0";

  const isBinary = base === 2;

  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/"

  let remainderStack = []

  while (decimal > 0) {
    let remainder = decimal % base;
    decimal = Math.floor(decimal / base);
    remainderStack.push(remainder);
  }

  let binaryValue = ""

  const remainderStackInitialLength = remainderStack.length

  let counter = remainderStackInitialLength;
  while (counter % 4 !== 0 && isBinary) {
    remainderStack.push("0")
    counter++
  }

  const newRemainderStackInitialLength = remainderStack.length;
  while (remainderStack.length) {
    if (isBinary && remainderStack.length % 4 == 0 && remainderStack.length !== newRemainderStackInitialLength) binaryValue += " ";
    const innerValue = remainderStack.pop()
    binaryValue += digits[innerValue]
  }

  return binaryValue;

}


console.log({
  resultBase2For1: decimalToBase(1),
  resultBase2For2: decimalToBase(2),
  resultBase2For3: decimalToBase(3),
  resultBase2For10: decimalToBase(10),
  resultBase2For12: decimalToBase(12),
  resultBase2For18: decimalToBase(18),
  resultBase2For39: decimalToBase(39),
  resultBase2For64: decimalToBase(64),
  resultBase2For128: decimalToBase(128),
  resultBase2For4096: decimalToBase(4096),
  resultBase16For255: decimalToBase(255, 16),
  resultBase16For256: decimalToBase(256, 16),
  resultBase16For16: decimalToBase(15, 16),
  resultBase64For63: decimalToBase(63, 64),
  resultBase64For64: decimalToBase(64, 64)
})
