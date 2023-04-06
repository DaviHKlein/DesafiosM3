export function isAnagram(word1, word2) {
  // implementar logica aqui
  if (word1.toLowerCase().split('').sort().join('')==word2.toLowerCase().split('').sort().join(''))
    return true
  return false
}