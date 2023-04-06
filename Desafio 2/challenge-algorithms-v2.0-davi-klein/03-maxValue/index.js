export function maxValue(values) {
  // implementar logica aqui
  if(values.length > 0)
    return Math.max.apply(null,values);
  return 0;
}