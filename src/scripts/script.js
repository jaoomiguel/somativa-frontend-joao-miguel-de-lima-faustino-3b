const saudacao = document.querySelector("#boas-vindas");
const caixaCor = document.getElementById('caixa-cor');
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            : "Bom dia! Bem-vindo à Sessão Matinê!"
        
        hora > 12
        hora < 18
            : "Boa tarde! Sessão da Tarde liberada!"

        hora > 18
            : "Boa noite! Prepare-se para a Sessão Coruja!"

}

const qtd = document.querySelector('#qtd-item');
const totalTxt = document.querySelector('#total');

qtd.addEventListener('input', () => {
    const valor = Number(qtd.value) * 35.00;
    totalTxt.textContent = 'Total: R$ ${valor.toFixed(2)}'
});

const Filme {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = 35;

    }
}



const botoesPedido = document.querySelectorAll(".btn-pedido");

botoesPedido.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        event.preventDefault();
        const nomeFilme = botao.parentElement.querySelector("h3").textContent;
        alert(
            `🥘 Sucesso! Sua compra do ingresso para o filme: "${nomeFilme}" foi finalizado com sucesso!.`,
        );

        // Efeito visual no botão após clique
        botao.textContent = "✓ Pedido Enviado";
        botao.style.backgroundColor = "#27ae60"; // Verde Sucesso
        botao.disabled = true;
    });
});
