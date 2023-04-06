export function fibonacci(value) {
  // implementar logica aqui
  let primeiro = 0;
  let segundo = 1;
  if(value<=1){
    return value;
  }
  for(let i=3;i <= value;i++){
    segundo = primeiro + segundo;
    primeiro = segundo - primeiro;
  }
  return primeiro + segundo;
}