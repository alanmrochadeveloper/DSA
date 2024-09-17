function decimalToBase(decimal = 0, base = 2) {
  console.log({ decimal, base })
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
    console.log({ innerValue, base })
    binaryValue += digits[innerValue]
  }

  return binaryValue;

}


console.log({
  resultFor1: decimalToBase(1),
  resultFor2: decimalToBase(2),
  resultFor3: decimalToBase(3),
  resultFor10: decimalToBase(10),
  resultFor12: decimalToBase(12),
  resultFor18: decimalToBase(18),
  resultFor64: decimalToBase(64),
  resultFor128: decimalToBase(128),
  resultFor255: decimalToBase(255, 16),
  resultFor256: decimalToBase(256, 16),
  resultFor16: decimalToBase(15, 16),
  resultFor4096: decimalToBase(4096),
  resultFor39: decimalToBase(39),
  resultFor63Base64: decimalToBase(63, 64),
  resultFor64Base64: decimalToBase(64, 64)
})
