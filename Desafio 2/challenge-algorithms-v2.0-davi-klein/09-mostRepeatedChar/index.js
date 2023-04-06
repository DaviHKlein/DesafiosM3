export function mostUsedChar(text) {
    // implementar logica aqui
    let array = text.replace('').toLowerCase().split('')
    let indice;
    let repeticoes=0;
    let auxiliar=0;
    for(let i=0;i < array.length;i++){
        for(let j = 0;j < array.length;j++){
            if(array[i] == array[j]){
                auxiliar++
            }
            if(auxiliar > repeticoes){
                repeticoes = auxiliar
                auxiliar = 0
                indice = array[i]
            }
        }
    }
    return indice
}