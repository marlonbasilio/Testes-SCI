function CincoJavaScript() {
    const alunos = [];

    let maiorMedia = 0;
    let nomeMaiorMedia = "";
    let menorMedia = 99999999;
    let nomeMenorMedia = "";

    for (let i = 0; i < 3; i++) {
        const aluno = prompt(`Digite o nome do aluno ${i + 1}º:`);
        const notas = [];
        let soma = 0;
        for (let j = 0; j < 4; j++) {
            const nota = parseInt(prompt(`Digite a nota ${j + 1}º:`));
            soma = soma + nota;
            notas.push(nota);
        }
        const media = soma / 4;

        if (media > maiorMedia) {
            maiorMedia = media;
            nomeMaiorMedia = aluno;
        }
        if (media < menorMedia) {
            menorMedia = media;
            nomeMenorMedia = aluno;
        }
        alunos.push([aluno].concat(notas).concat([media]));
    }

    console.table(alunos);
    console.log(alunos);
    console.log("Aluno com a maior média: ", nomeMaiorMedia);
    console.log("Aluno com a menor média: ", nomeMenorMedia);

}
