const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser (){
  localStorage.setItem ("usuario", JSON.stringify(user));
}

function findUser (){
  let resultado = localStorage.getItem("usuario");
  let usuarioFinal = JSON.parse(resultado)
  console.log(usuarioFinal);
}

saveUser();
findUser();