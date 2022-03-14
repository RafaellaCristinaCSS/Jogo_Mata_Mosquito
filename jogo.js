var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

/* Criando uma funcao para definir a posicao do mosquito */
function posicaoRandomica(){
   /* Caso ja exista um mosquito criado ira remove-lo, se nao dar procedimento a funcao */
   if(document.getElementById('mosquito')){
       document.getElementById('mosquito').remove()
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90 /* Ou seja, essa variavel pegara um valor aleatorio entre 0 e o total da largura do browser do usuario (O -90 foi adicionado para manter uma distancia do final da tela) */
                                        /* O metodo floor sera ultilizado para arredondar para baixo os valores obtidos e transformando em inteiros */
    var posicaoY = Math.floor(Math.random() * altura) - 90 /* Ou seja, essa variavel pegara um valor aleatorio entre 0 e o total da Altura do browser do usuario (O -90 foi adicionado para manter uma distancia do final da tela)*/
                                        /* O metodo floor sera ultilizado para arredondar para baixo os valores obtidos e transformando em inteiros */
    /* Apenas para garantir que o valor nunca sera menor do que zero */
    posicaoX = posicaoX < 0? 0: posicaoX
    posicaoY = posicaoY < 0? 0: posicaoY
                                        
    console.log(posicaoY, posicaoX)

    /* Criando uma imagem no HTML */
    var mosquito = document.createElement('img') //Criando o elemento e atribuindo o mesmo a uma variavel
        //Atribuindo propiedades a imagem criada
        mosquito.src = 'imagens/mosquito.png'
        mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()//A classe sera igual ao valor retornado pela funcao tamanhoAleatorio e a imagem atribuida a classe sera invertida quando a classe for acionada pela funcao ladoAleatorio()
        mosquito.style.left = posicaoX + 'px'
        mosquito.style.top = posicaoY + 'px'
        mosquito.style.position = 'absolute'
        mosquito.id ='mosquito'

        document.body.appendChild(mosquito)
      
}

/* Criando uma funcao para definir o tamanho do mosquito */
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    
    }
}