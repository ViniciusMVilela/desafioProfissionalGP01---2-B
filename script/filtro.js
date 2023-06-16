let campoInput = document.querySelector("#filtrar-tabela");
campoInput.addEventListener("input", function () {
  //evento input -> //* escuta evento de digitação
  this.value; //estamos capturando o que é digitado no campo input
  let trDados = document.querySelectorAll(".dados");
  if (this.value.length > 0) {
    for (let i = 0; i < trDados.length; i++) {
      let dados = trDados[i];
      let tdNome = dados.querySelector(".info-filtro");
      let nome = tdNome.textContent;
      let expressaoRegular = new RegExp(this.value, "i"); // declara uma expressão regular e passa o que ela vai buscar e de que forma com case sentive ou case insensitive

      if (!expressaoRegular.test(nome)) {
        //testa se a expressão regular não pertence a nome, ai adiciona a classe invisivel
        dados.classList.add("invisivel");
      } else {
        dados.classList.remove("invisivel");
      }
    }
  } else {
    for (let i = 0; i < trDados.length; i++) {
      let dados = trDados[i];
      dados.classList.remove("invisivel");
    }
  }
});
