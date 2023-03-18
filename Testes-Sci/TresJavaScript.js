function TresJavaScript() {
    let aluno = prompt(`Digite o nome do aluno:`);
    const alunos = [];

    while (aluno !== "SAIR") {
        const notas = [];
        let soma = 0;
        for (let i = 0; i < 4; i++) {
            const nota = parseInt(prompt(`Digite a nota ${i + 1}º:`));
            soma = soma + nota;
            notas.push(nota);
        }
        const media = soma / 4;
        let situacao = "";
        if (media >= 6) {
            situacao = "Aprovado"
        } else {
            situacao = "Reprovado"
        }
      
        alunos.push("Aluno: " + aluno + ", Média: " + media + ", Situação: " + situacao);
        aluno = prompt(`Digite o nome do aluno ou SAIR:`);
    }

    alunos.map((aluno) => {
        console.log(aluno);
    })
}
