import OCR from './ocr'
// https://medium.freecodecamp.org/es6-tagged-template-literals-48a70ef3ed4d
export default (literals: TemplateStringsArray): OCR => {
  const taggedText = literals.join('').substring(1)
  return new OCR(taggedText)
}
