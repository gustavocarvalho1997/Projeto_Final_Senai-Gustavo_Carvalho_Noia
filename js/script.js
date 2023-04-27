// CADASTRAR
function cadastrar() {
    let email = document.getElementById("cemail").value;
    let senha = document.getElementById("cpassword").value;

    let nome = document.getElementById("cnome").value;
    let sexo = document.getElementById("csexo").value;
    let telefone = document.getElementById("ctelefone").value;
    let nascimento = document.getElementById("cnascimento").value;

    let cep = document.getElementById("ccep").value;
    let rua = document.getElementById("crua").value;
    let numero = document.getElementById("cnumero").value;
    let bairro = document.getElementById("cbairro").value;
    let cidade = document.getElementById("ccidade").value;
    let estado = document.getElementById("cestado").value;

    if(email == "" || senha == "" || nome == "" || sexo == "" || telefone == "" || nascimento == "" || cep == "" || rua == "" || numero == "" || bairro == "" || cidade == "" || estado == ""){
        alert(`Faltam informações para realizar o seu cadastro! 😖`)

    } else {
        alert(`Seu cadastro foi efetuado com sucesso! 😉`)
        document.getElementById("cemail").value = ""
        document.getElementById("cpassword").value = ""

        document.getElementById("cnome").value = ""
        document.getElementById("csexo").value = ""
        document.getElementById("ctelefone").value = ""
        document.getElementById("cnascimento").value = ""

        document.getElementById("ccep").value = ""
        document.getElementById("crua").value = ""
        document.getElementById("cnumero").value = ""
        document.getElementById("ccomplemento").value = ""
        document.getElementById("cbairro").value = ""
        document.getElementById("ccidade").value = ""
        document.getElementById("cestado").value = ""

    }
    
}
// FIM CADASTRO

// CONTATO
function contato(){
    let nome = document.getElementById("contato-nome").value;
    let email = document.getElementById("contato-email").value;
    let assunto = document.getElementById("contato-assunto").value;
    let mensagem = document.getElementById("contato-mensagem").value;

    if(nome == "" || email == "" || assunto == "" || mensagem == ""){
        alert(`Faltam informações para enviar a sua mensagem! 😖`)  

    } else {
        alert(`Sua mensagem foi enviada com sucesso, logo entraremos em contato! 😉`)
        document.getElementById("contato-nome").value = ""
        document.getElementById("contato-email").value = ""
        document.getElementById("contato-assunto").value = ""
        document.getElementById("contato-mensagem").value = ""

    }  
}
// FIM CONTATO

// AGENDAMENTO
function agendamento(){
    let nome = document.getElementById("anome").value;
    let idade = document.getElementById("aidade").value;
    let cpf = document.getElementById("acpf").value;
    let telefone = document.getElementById("atelefone").value;
    let servico = document.getElementById("aservico").value;
    let data = document.getElementById("adata").value;
    let horario = document.getElementById("ahorario").value;

    if(nome == "" || idade == "" || cpf == "" || telefone == "" || servico == "" || data == "" || horario == ""){
        alert(`Faltam informações para concluir o agendamento! 😖`)

    } else{
        alert(`Seu agendamento foi efetuado com sucesso, aguardamos sua presença! 😉`)
        document.getElementById("anome").value = ""
        document.getElementById("aidade").value = ""
        document.getElementById("acpf").value = ""
        document.getElementById("atelefone").value = ""
        document.getElementById("aservico").value = ""
        document.getElementById("adata").value = ""
        document.getElementById("ahorario").value = ""

    }
}
// FIM AGENDAMENTO


// COMENTÁRIOS
function enviarComentario() {
    let nome = document.getElementById("nome").value;
    let comentario = document.getElementById("mensagem").value;
    let result = document.getElementById("receber-comentario")

    if(nome == "" || comentario == "") {
        alert(`Todos os campos precisam ser preenchidos! 😖`)
    } else {
        result.innerHTML += `
        <div class="pessoa-container">
            <h3>${nome}</h3>
            <hr>
            <p>${comentario}</p>
        </div>`

        alert(`Agradecemos seu comentário! 🥰`)

        document.getElementById("nome").value = ""
        document.getElementById("mensagem").value = ""
    }



}
// FIM COMENTÁRIOS