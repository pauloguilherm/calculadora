var numero = []
var validacao;
var numeroReceb 
//function para entrada e exibição de numeros
$('.numeros').click(function(valor) {

    numeroReceb = $(valor.target).text();

    numero.push(numeroReceb);

    validacao = document.getElementById('caixaNumeros').innerText;

    if(numero.length < 15){

        if(validacao == '0'){

            document.getElementById('caixaNumeros').innerHTML = `${numero.join([separador = ''])}`;

        }
        else{

            document.getElementById('caixaNumeros').innerHTML = `${numero.join([separador = ''])}`;

        }
        
    }else{

        alert('Excedeu limite de números');
    }
});

$('.expressoes').click(function(value){

    var expressaoReceb = $(value.target).text();

    var expressoes = $(value.target).text();

    var validExpress = numero.indexOf(expressoes);

    if(validExpress == -1){

        numero.push(expressaoReceb);

    }

    else if(validacao == '0'){


    }
    else if(expressoes == 'CE'){

        document.getElementById('caixaNumeros').innerHTML = `0`

        let i = 0;
        do{ 
            numero.pop()
        }while(i<numero.length)

    }else if(expressoes == 'C'){

        numero.pop()
        numero.pop()

        if(numero.length == '0'){

            document.getElementById('caixaNumeros').innerHTML = `0`;

        }else{

            document.getElementById('caixaNumeros').innerHTML = `${numero.join([separador = ''])}`;

        }
    }else if(validExpress == -1 && validacao != '0'){

        document.getElementById('caixaNumeros').innerHTML += `${expressoes}`;

    }
    else if(expressoes == '='){

        var resultado = document.getElementById('caixaNumeros').innerHTML;
        console.log(parseInt(Math.round(resultado)));
        
    }

});