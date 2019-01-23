# OCR Kata Submission for Test Double

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/alexjoverm/typescript-library-starter.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/alexjoverm/typescript-library-starter.svg)](https://travis-ci.org/alexjoverm/typescript-library-starter)
[![Coveralls](https://img.shields.io/coveralls/alexjoverm/typescript-library-starter.svg)](https://coveralls.io/github/alexjoverm/typescript-library-starter)
[![Dev Dependencies](https://david-dm.org/alexjoverm/typescript-library-starter/dev-status.svg)](https://david-dm.org/alexjoverm/typescript-library-starter?type=dev)

- Dean Radcliffe

# Hour 1

I only had an hour to go before my parking expired, so I got a ton of help by cloning a project that saved me from JS fatigue: https://github.com/alexjoverm/typescript-library-starter

This netted me a TypeScript project (for no particular reason, but it's trending and handy to try), with in-place testing, linting, etc..

## Test it up

Tests were in place, so I started by playing with multiline ES6 strings to see if they worked like I hoped for. [Commit](https://github.com/deanius/td-ocr/commit/fd42bc8)

They worked yay! But I didn't like the `substring(1)` nonsense, so I followed some [Wes Bos advice](https://wesbos.com/tagged-template-literals/) and created an ES6 tagged template literal.

This let me write the following, but not include the initial newline in the string:

```js
const tagOneThroughNine = ocr`
  _  _     _  _  _  _  _
| _| _||_||_ |_   ||_||_|
||_  _|  | _||_|  ||_| _|
`
```

[Commit](https://github.com/deanius/td-ocr/commit/1b9ee85f)

## The Start of Real work - an OCR class

I may only have a little bit working in the next half-hour, but I'll try!

We'd like to build up a character-recognition routine, test it, then build up to recognizing 9 characters. One challenge is that our array of lines cuts across each number, so it would be hard to iterate number by number.

Let's start by building some intelligence into our parser, and returning a smarter object from our `ocr` tag than a giant string.. First, we'll 'pre'factor so our tests show that to do a string comparison, we'll need to call toString. [Commit]().

## I can has digits?

We'd like our OCR class to be able to expose an array of digits from the string. And if we are able to isolate the strings of individual digits we'll be able to do this. Let's use TDD to specify how we want to work with this:

```
describe('OCR class', () => {
  it ('exposes digit glyphs', () => {
    expect(tagOneThroughNine.digitGlyphs[0]).toEqual(`

  |
  |`.substring(1))
  })
})
```

And then we'll provide a hard-coded implementation for now, until we write the next test case. [Commit](https://github.com/deanius/td-ocr/commit/59e3c9)

A few minutes to go... Let's neaten out our implementation.

And, I had to spend some time debugging my editor's desire to remove whitespace, but I'm glad I caught that.. I think I'll have the actual implementation soon - under the 2 hour limit for sure. Elapsed time 1 hour!

[Commit](https://github.com/deanius/td-ocr/commit/5f0c6d)

## Each digit

After a break of a couple hours, and with only 30 minutes to spare, I wonder how close we can come to finishing this... Where we left off, we had hard-coded the number 1 as a digit glyph. Let's see if we take positions 0-2 of each line of the real account number if we match up with our test assertion. If so, we'll commit.

It worked! [Commit](https://github.com/deanius/td-ocr/commit/caa8f4e)

So the end could be in sight, but we know we'll need string representations for each digit for matching, so let's refactor our test.

[Commit](https://github.com/deanius/td-ocr/commit/7995cf4)

Now, when good testing libraries show failures, they show the expected value. It may be our quickest route to a asserting the desired digit glyphs, if we

1. Generalize our algorithm
1. Make fake assertions that fail and show us what we got
1. Copy the actual values back into the test (if they were right)

When we take a crack at this, we see that nothing broke - so far so good..

[Commit](https://github.com/deanius/td-ocr/commit/91ca8c6)

So let's push our luck, and assert the number 2... And we got it! It helped us to refactor our loop a bit, but it resulted in clearer variable names anyway. 

[Commit](https://github.com/deanius/td-ocr/commit/d86abf4)

It looks like this approach will work, so let's round it out! We grow our assertions, and then we have to stop again.. There's not much to go, so we'll leave it here.

[Commit](https://github.com/deanius/td-ocr/commit/7347fc6)

