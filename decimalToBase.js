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

const resultFor1 = decimalToBase(1)
const resultFor2 = decimalToBase(2)
const resultFor3 = decimalToBase(3)
const resultFor10 = decimalToBase(10)
const resultFor12 = decimalToBase(12)
const resultFor18 = decimalToBase(18)
const resultFor64 = decimalToBase(64)
const resultFor128 = decimalToBase(128)
const resultFor255 = decimalToBase(255, 16)
const resultFor256 = decimalToBase(256, 16)

console.log({
  resultFor1,
  resultFor2,
  resultFor3,
  resultFor10,
  resultFor12,
  resultFor18,
  resultFor64,
  resultFor128,
  resultFor255,
  resultFor256,
  resultFor16: decimalToBase(15, 16),
  resultFor4096: decimalToBase(4096),
  resultFor39: decimalToBase(39),
  resultFor63Base64: decimalToBase(63, 64),
  resultFor64Base64: decimalToBase(64, 64)
})
