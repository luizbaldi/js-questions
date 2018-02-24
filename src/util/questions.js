/* 
 * Model object 
 * const model = {
 *   intro: 'String -> Question intro message',
 *   code: 'String -> Initial code on Ace editor',
 *   tests: 'Array -> Objects containing test cases (Properties: param and result)'
 * };
 */
export default [
  {
    name: 'test',
    intro: 'Just showing how this works',
    code: `
      function returnTrue() {
        // Return true and press alt+enter

      }
    `,
    tests: [
      { param: 'Doesnt matter in this case', result: true }
    ]
  },
  {
    name: 'square',
    intro: `
      We'll start off with something easy.
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
  },
  {
    name: 'invertCase',
    intro: 'A bit trickier now...',
    code: `
      function invertCase(x) {
        // The input x is a string. Turn lowercase letters to uppercase and vice versa.
        
      }`,
    tests: [
      { param: "funkey monkey", result: "FUNKEY MONKEY" },
      { param: "PotatoE", result: "pOTATOe" }
    ]
  }
]