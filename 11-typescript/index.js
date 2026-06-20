// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

const senha = 'acesso15';

const caracteres = senha.split('')

let senhaLetters = []
let senhaNumbers = []

let entradaNumeros = false;
let entradaLetras = false;

function separarString(senha) {
  const caracteres = senha.split('')
  
  for (let i = 0; i < caracteres.length; i++){
  
    if (isNaN(caracteres[i])){
      senhaLetters.push(caracteres[i])
    } else{
      senhaNumbers.push(caracteres[i])
    }
  }
}


function verificarNumeros(senhaNumeros) {

  if (senhaNumeros[0] == 0 ){
      return entradaNumeros = false
      console.log("numero ruim");


  }else{

    for (let i = 0; i < senhaNumeros.length; i++){

      
      if (senhaNumeros[i] >0) {
        console.log("numero bom");

        return entradaNumeros = true
      }
      
    }

  }

}

function verificarLetras(senhaLetras) {
  for (let i = 0; i < senhaLetras.length; i++) {

    if(senhaLetras[i] === senhaLetras[i].toUpperCase()){
      console.log("letra ruim");
      return entradaNumeros = false
    }else{
      console.log("letra bom");
      return entradaNumeros = true
    }
    
  }
}

function verificarSenha(letras, numeros) {
  if (letras == true && numeros == true) {
    console.log("valida");
  }else{
    console.log("invalida");
    
  }
  
}


separarString(senha)

console.log("letras: ",verificarLetras(senhaLetters));
console.log("numeros: ",verificarNumeros(senhaNumbers));


verificarSenha(verificarLetras(senhaLetters), verificarNumeros(senhaNumbers))
