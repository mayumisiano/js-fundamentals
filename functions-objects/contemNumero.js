//Criar uma função que recebe dois parâmetros (a,b);
// Parâmetro 1: array com números [2, 3, 1, 6, 7];
// Parâmetro 2: número qualquer;
//A função verifica se o número pertence ao array;

function contemNumero(array, numero) {
    for(var i = 0; i < array.length; i++){
        if(array[i]==numero){
            console.log(array + ' ' + 'contém o número' + ' ' + numero);
        }else{
            console.log(array + ' ' +  'não contém o número' + ' ' + numero);
        }
    }
}

contemNumero([1,2,5,4,8,9,6], 2)

