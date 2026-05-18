let dividas = [];

function addDivida() {
  let nome = document.getElementById("divida").value;
  let valor = document.getElementById("valor").value;

  if(nome === "" || valor === "") return;

  dividas.push(nome + " - R$ " + valor);
  render();
}

function render() {
  let lista = document.getElementById("listaDividas");
  lista.innerHTML = "";

  dividas.forEach(item => {
    lista.innerHTML += "<li>" + item + "</li>";
  });
}

// JEJUM
function iniciarJejum() {
  document.getElementById("jejumStatus").innerText =
    "⏳ Jejum iniciado";
}

// DISCIPLINA
function concluirDisciplina() {
  document.getElementById("disciplinaStatus").innerText =
    "✅ Concluído hoje";
}