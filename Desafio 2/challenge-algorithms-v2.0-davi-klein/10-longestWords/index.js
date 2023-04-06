export function longestWords(words) {
    // implementar logica aqui
    let maioresPalavras = [];
    let auxiliar=words[0];
    for(let i=0;i<words.length;i++){
        if(auxiliar.length < words[i].length)
            auxiliar = words[i]
    }
    for(let i=0;i<words.length;i++)
        if(auxiliar.length == words[i].length)
            maioresPalavras.push(words[i]);
    return maioresPalavras;
}