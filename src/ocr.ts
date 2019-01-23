export const glyph1 = `
   
  |
  |`.substring(1)

export const glyphsToNumbers = {
  [glyph1]: 1
}

export const digitTexts = {
  '1': glyph1,
  '2': `
 _ 
 _|
|_ `.substring(1),
  '3': `
 _ 
 _|
 _|`.substring(1),
  '4': `
   
|_|
  |`.substring(1),
  // '5': `
  // `.substring(1),
  // '6': `
  // `.substring(1),
  // '7': `
  // `.substring(1),
  // '8': `
  // `.substring(1),
  // '9': `
  // `.substring(1),
};

export default class OCR {
  private originalString: string
  private originalLines: string[]
  public digitGlyphs: string[]
  public digits: number[]

  constructor(text: string) {
    this.originalString = text
    this.originalLines = text.split("\n")
    this.digitGlyphs = []

    const glyphCount = this.originalLines[0].length / 3

    for(let i=0; i< glyphCount; i++) {
      this.digitGlyphs[i] = [0,1,2].map(lineNum => {
        return this.originalLines[lineNum].substring(i*3, i*3+3)
      }).join("\n")
    }
    
    this.digits = this.digitGlyphs.map(glyph => 1)
}

  toString() {
    return this.originalString
  }
}
