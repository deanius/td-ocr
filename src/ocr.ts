export default class OCR {
  private originalString: string
  public digitGlyphs: Array<string>

  constructor(text: string) {
    this.originalString = text

    // TODO parse actually
    this.digitGlyphs = [
      `

  |
  |`
    ]
  }

  toString() {
    return this.originalString
  }
}
