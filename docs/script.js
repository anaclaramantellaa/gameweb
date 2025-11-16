const botao = document.getElementById("enviar");
const result = document.getElementById("resultado");

botao.addEventListener("click", function () {

    let pontos = 0;

    const resposta1 = document.querySelector('input[name="primeira"]:checked');
    if (resposta1 && resposta1.value === "correto") pontos++;

    const resposta2 = document.querySelector('input[name="segunda"]:checked');
    if (resposta2 && resposta2.value === "correto") pontos++;

    const resposta3 = document.querySelector('input[name="terceira"]:checked');
    if (resposta3 && resposta3.value === "correto") pontos++;

    const resposta4 = document.querySelector('input[name="quarta"]:checked');
    if (resposta4 && resposta4.value === "correto") pontos++;

    const resposta5 = document.querySelector('input[name="quinta"]:checked');
    if (resposta5 && resposta5.value === "correto") pontos++;

    result.innerHTML = `
        <div class="alert text-center display-5 mt-3">
            Sua pontuação: <strong>${pontos}</strong> ponto(s).
        </div>
    `;
});