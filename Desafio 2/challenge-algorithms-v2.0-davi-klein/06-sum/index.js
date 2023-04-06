export function sum(values) {
  // implementar logica aqui
  let resultado = 0;
  for(let i=0;i<values.length;i++){
    resultado += values[i];
  }
  return resultado;
}