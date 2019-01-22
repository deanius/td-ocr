import OCR from '../src/ocr'
import ocr from '../src/tag'

const exampleOneThroughNine = `
  _  _     _  _  _  _  _
| _| _||_||_ |_   ||_||_|
||_  _|  | _||_|  ||_| _|
`.substring(1) //

// Allow us a shorthand
const tagOneThroughNine : OCR = ocr`
  _  _     _  _  _  _  _
| _| _||_||_ |_   ||_||_|
||_  _|  | _||_|  ||_| _|
`

describe('Sanity Check', () => {
  it('compares two multiline strings', () => {
    expect(exampleOneThroughNine).toEqual(exampleOneThroughNine)

    // Ensure we dont have an extra newline the spec says 4 lines
    expect(exampleOneThroughNine.split('\n')).toHaveLength(4)

    // Test our shorthand works so we dont have to do substring(1) everywhere
    expect(exampleOneThroughNine).toEqual(tagOneThroughNine.toString())
  })
})

describe('OCR class', () => {
  it ('exposes digit glyphs', () => {
    expect(tagOneThroughNine.digitGlyphs[0]).toEqual(`

  |
  |`)
  })
})
