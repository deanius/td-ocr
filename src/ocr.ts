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
    this.digitGlyphs = []

    for(let i=0; i< this.originalLines[0].length; i = i+3) {
      this.digitGlyphs[i] = [0,1,2].map(lineNum => {
        return this.originalLines[lineNum].substring(i*3, i*3+3)
      }).join("\n")
    }
}

  toString() {
    return this.originalString
  }
}
