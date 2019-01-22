export default class OCR {
  private originalString: string

  constructor(text: string) {
    this.originalString = text
  }

  toString() {
    return this.originalString
  }
}
