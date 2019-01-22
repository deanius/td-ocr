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

Tests were in place, so I started by playing with multiline ES6 strings to see if they worked like I hoped for. [Commit]()

They worked yay! But I didn't like the `substring(1)` nonsense, so I followed some [Wes Bos advice](https://wesbos.com/tagged-template-literals/) and created an ES6 tagged template literal.

This let me write the following, but not include the initial newline in the string:

```js
const tagOneThroughNine = ocr`
  _  _     _  _  _  _  _
| _| _||_||_ |_   ||_||_|
||_  _|  | _||_|  ||_| _|
`
```

[Commit]()

## The Start of Real work

I may only have a little bit working in the next half-hour, but I'll try!

We'd like to build up a character-recognition routine, test it, then build up to recognizing 9 characters. One challenge is that our array of lines cuts across each number, so it would be hard to iterate number by number.

Let's start by building some intelligence into our parser, and returning a smarter object from our `ocr` tag than a giant string.. First, we'll 'pre'factor so our tests show that to do a string comparison, we'll need to call toString. [Commit]().
