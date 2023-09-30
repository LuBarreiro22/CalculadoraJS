let agregar = (valor) => (document.getElementById("pantalla").value += valor);

let calcular = () => {
  let valor = document.getElementById("pantalla").value;
  let resultado = eval(valor);
  document.getElementById("pantalla").value = resultado;
};

let borrar = () => (document.getElementById("pantalla").value = "");
