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
    name: 'invertCase',
    intro: 'A bit trickier now...',
    code: `
      function invertCase(x) {
        // The input x is a string. Turn lowercase letters to uppercase and vice versa.

      }`,
    tests: [
      { param: 'funkey monkey', result: 'FUNKEY MONKEY' },
      { param: 'PotatoE', result: 'pOTATOe' }
    ]
  }
]
