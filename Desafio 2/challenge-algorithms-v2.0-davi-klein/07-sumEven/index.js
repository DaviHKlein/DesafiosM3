export function sumEven(value) {
  // implementar logica aqui
  let resultado=0;
  for(let i=0;i < value.length;i++){
    if(value[i] % 2 == 0)
      resultado += value[i];
  }
  return resultado
}