import OCR from '../src/ocr'

const exampleOneThroughNine = `
  _  _     _  _  _  _  _
| _| _||_||_ |_   ||_||_|
||_  _|  | _||_|  ||_| _|
`.substring(1) //

describe('Sanity Check', () => {
  it('compares two multiline strings', () => {
    expect(exampleOneThroughNine).toEqual(exampleOneThroughNine)

    // Ensure we dont have an extra newline the spec says 4 lines
    expect(exampleOneThroughNine.split('\n')).toHaveLength(4)
  })
})
