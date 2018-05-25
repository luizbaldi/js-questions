const name = 'invertCase'
const intro = 'A bit trickier now...'
const code = `
function invertCase(x) {
  // The input x is a string. Turn lowercase letters to uppercase and vice versa.

}`
const tests = [
  { param: 'funkey monkey', result: 'FUNKEY MONKEY' },
  { param: 'PotatoE', result: 'pOTATOe' }
]

export default { name, intro, code, tests }
