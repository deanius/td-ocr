import { default as OCR, digitTexts, glyphsToNumbers, glyph1 } from '../src/ocr'
import ocr from '../src/tag'

//prettier-ignore
const exampleOneThroughNine = `
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
`.substring(1) //

// Allow us a shorthand
//prettier-ignore
const tagOneThroughNine: OCR = ocr`
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
`

//prettier-ignore
const tagOneThroughFour: OCR = ocr`
    _  _    
  | _| _||_|
  ||_  _|  |
`

describe('Sanity Check', () => {
  it('compares two multiline strings', () => {
    expect(exampleOneThroughNine).toEqual(exampleOneThroughNine)

    // Ensure we dont have an extra newline the spec says 4 lines
    expect(exampleOneThroughNine.split('\n')).toHaveLength(4)

    // Test our shorthand works so we dont have to do substring(1) everywhere
    expect(exampleOneThroughNine).toEqual(tagOneThroughNine.toString())
  })
  it('has 3 characters per digit', () => {
    const line1 = exampleOneThroughNine.split('\n')[0]
    const line2 = exampleOneThroughNine.split('\n')[1]
    const line3 = exampleOneThroughNine.split('\n')[2]
    expect(line1).toHaveLength(27)
    expect(line2).toHaveLength(27)
    expect(line3).toHaveLength(27)
    
    const ocr1 = tagOneThroughNine.toString().split("\n")[0]
    const ocr2 = tagOneThroughNine.toString().split("\n")[1]
    const ocr3 = tagOneThroughNine.toString().split("\n")[2]
    expect(ocr1).toHaveLength(27)
    expect(ocr2).toHaveLength(27)
    expect(ocr3).toHaveLength(27)
    
    expect(ocr1.substring(6,9)).toEqual(' _ ')
  })
  
  it('does multiline string lookups', () => {
    expect(glyphsToNumbers[glyph1]).toEqual(1)
  })
})

describe('OCR class', () => {
  it('exposes digit glyphs', () => {
    expect(tagOneThroughNine.digitGlyphs[0]).toEqual(digitTexts[1])
    expect(tagOneThroughNine.digitGlyphs).toHaveLength(9)
    expect(tagOneThroughNine.digitGlyphs[1]).toEqual(digitTexts[2])
    expect(tagOneThroughNine.digitGlyphs[2]).toEqual(digitTexts[3])
    expect(tagOneThroughNine.digitGlyphs[3]).toEqual(digitTexts[4])
    expect(tagOneThroughNine.digitGlyphs[4]).toEqual(digitTexts[5])
    expect(tagOneThroughNine.digitGlyphs[5]).toEqual(digitTexts[6])
    expect(tagOneThroughNine.digitGlyphs[6]).toEqual(digitTexts[7])
    expect(tagOneThroughNine.digitGlyphs[7]).toEqual(digitTexts[8])
    expect(tagOneThroughNine.digitGlyphs[8]).toEqual(digitTexts[9])
  })
  it('exposes digits', () => {
    expect(tagOneThroughNine.digits[0]).toEqual(1)
    expect(tagOneThroughNine.digits[1]).toEqual(2)
    expect(tagOneThroughNine.digits[2]).toEqual(3)
    expect(tagOneThroughNine.digits[3]).toEqual(4)
    expect(tagOneThroughNine.digits[4]).toEqual(5)
    expect(tagOneThroughNine.digits[5]).toEqual(6)
  })
  it('works on shorter strings', () => {
    expect(tagOneThroughFour.digits[0]).toEqual(1)
    expect(tagOneThroughFour.digits[1]).toEqual(2)
    expect(tagOneThroughFour.digits[2]).toEqual(3)
    expect(tagOneThroughFour.digits[3]).toEqual(4)
  })
})
