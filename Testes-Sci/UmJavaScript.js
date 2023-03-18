function UmJavaScript() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
    numeros.push(parseInt(prompt(`Digite o ${i+1}º número:`)));
    }
    
    const pares = [];
    const impares = [];
    for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
    }

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    }
    const media = soma / numeros.length

    console.log("Números pares: ", pares.join(", "));
    console.log("Números impares: ", impares.join(", "));
    console.log("Média Geral: ", media);
}
