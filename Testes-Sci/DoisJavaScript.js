function DoisJavaScrip() {
    let numeroMaior = 0;
    let numeroMenor = 9999999999;
    for (let i = 0; i < 5; i++) {
        const numero = parseInt(prompt(`Digite o ${i+1}º número:`));
        if (numero > numeroMaior) {
            numeroMaior = numero;
        }
        if (numero < numeroMenor) {
            numeroMenor = numero;
        }
    }

    console.log("Número maior: ", numeroMaior);
    console.log("Número menor: ", numeroMenor);
}
