function reproduzSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
//constante que armazena o id de todas as teclas do arquivo html

let contador = 0;
//variável que armazena o número de teclas

//enquanto o valor armazenado na variavel contador for menor que ao tamanho lista de teclas
while (contador < listaDeTeclas.length){

    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = function () {
        reproduzSom(idAudio);
    }

    //limitador do contador para ele não ultrapassar a quantidade de teclas
    contador = contador + 1;
}