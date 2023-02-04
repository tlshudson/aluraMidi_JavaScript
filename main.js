function reproduzSomPom (){
    document.querySelector('#som_tecla_pom').play();
}
//função que seleciona o arquivo de som que reproduz a tecla pom
//logo em seguida reproduz o arquivo de som

const listaDeTeclas = document.querySelectorAll('.tecla');
//constante que armazena 

let contador = 0;

while (contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = reproduzSomPom;
    
    contador = contador + 1;
    console.log(contador);
}