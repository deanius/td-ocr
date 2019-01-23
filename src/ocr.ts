export const digitTexts = {
  '1': `
   
  |
  |`.substring(1)
};

export default class OCR {
  private originalString: string
  private originalLines: string[]
  public digitGlyphs: string[]

  constructor(text: string) {
    this.originalString = text
    this.originalLines = text.split("\n")

    this.digitGlyphs = [
      [
        // LEFTOFF more real parse, actually
        this.originalLines[0].substring(0,3),
        this.originalLines[1].substring(0,3),
        this.originalLines[2].substring(0,3)
      ].join("\n")
    ]
  }

  toString() {
    return this.originalString
  }
}
