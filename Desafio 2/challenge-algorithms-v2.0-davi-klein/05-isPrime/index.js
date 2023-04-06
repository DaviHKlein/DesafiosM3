export function isPrime(value) {
  // implementar logica aqui
  for(let i=2;i <= Math.sqrt(value);i++){
    if(value % i == 0 || value < 2)
      return false;
    }
  return true
}