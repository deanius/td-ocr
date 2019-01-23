export const glyph1 = `
   
  |
  |`.substring(1)
export const glyph2 = `
 _ 
 _|
|_ `.substring(1)
export const glyph3 = `
 _ 
 _|
 _|`.substring(1)
 export const glyph4 =  `
   
|_|
  |`.substring(1)
export const glyph5 = `
 _ 
|_ 
 _|`.substring(1)
 
 export const glyph6 = `
 _ 
|_ 
|_|`.substring(1)
 export const glyph7 = `
 _ 
  |
  |`.substring(1)
 export const glyph8 = `
 _ 
|_|
|_|`.substring(1)
 export const glyph9 = `
 _ 
|_|
 _|`.substring(1)

export const glyphsToNumbers = {
  [glyph1]: 1,
  [glyph2]: 2,
  [glyph3]: 3,
  [glyph4]: 4,
  [glyph5]: 5,
  [glyph6]: 6,
  [glyph7]: 7,
  [glyph8]: 8,
  [glyph9]: 9
}

export const digitTexts = {
  '1': glyph1,
  '2': glyph2,
  '3': glyph3,
  '4': glyph4,
  '5': glyph5,
  '6': glyph6,
  '7': glyph7,
  '8': glyph8,
  '9': glyph9
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
    
    this.digits = this.digitGlyphs.map(glyph => glyphsToNumbers[glyph])
}

  toString() {
    return this.originalString
  }
}
