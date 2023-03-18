function QuatroJavaScript() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(parseInt(prompt(`Digite o ${i+1}º número:`)));
    }

    console.log("Numero da posição 3: ", numeros[2]);
}
