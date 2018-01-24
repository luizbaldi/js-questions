export default {
  square: {
    intro: `
      We'll start off with something easy.,
      Hit alt+enter to submit/continue (remember that)
    `,
    code: `
      function square(x) {
          // Return x squared
          
      }`,
    tests: [
      { param: 2, result: 4 },
      { param: 4, result: 16 },
      { param: 1.5, result: 2.25 },
      { param: -12, result: 144 },
      { param: -1.5, result: 2.25 }
    ]
  }
}