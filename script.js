var numero = []
var numeroApagar = []
numeroApagar.push(document.getElementById('caixaNumeros').innerHTML);
var validacao;
var numeroReceb;
var validaClick;
//function para entrada e exibição de numeros
$('.numeros').click(function(valor) {

    numeroReceb = $(valor.target).text();

    numero.push(numeroReceb);

    validacao = document.getElementById('caixaNumeros').innerText;

    //limitando a entrada de números
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

//function para entrada das expressões numéricas e leitura e exibição do resultado
$('.expressoes').click(function(value){

    validacao = document.getElementById('caixaNumeros').innerText;

    var expressaoReceb = $(value.target).text();

    var expressoes = $(value.target).text();

    var validExpress = numero.indexOf(expressoes);
    
    if(validacao == '0'){
        
        document.getElementById('caixaNumeros').innerHTML = `0`

    }
    else if(expressoes == 'CE'){

        document.getElementById('caixaNumeros').innerHTML = `0`

        let i = 0;
        do{ 
            numero.pop()
            
        }while(i<numero.length)

    }else if(expressoes == 'C'){
        
        numero.pop()

        if(numeroApagar.length > 0){
            
            document.getElementById('caixaNumeros').innerHTML = `${numeroApagar.join([separador = ''])}`

            numeroApagar.pop()
            
        }

        else if(numero.length == 0){

            document.getElementById('caixaNumeros').innerHTML = `0`;


        }else{
            
            document.getElementById('caixaNumeros').innerHTML = `${numero.join([separador = ''])}`;

        }
    }else if(validExpress == -1 && validacao != '0' && expressoes != "="){

        numero.push(expressaoReceb);

        document.getElementById('caixaNumeros').innerHTML += `${expressoes}`;

    }

    else if(expressoes == '='){
         validaClick = 1;
        var resultado = document.getElementById('caixaNumeros').innerHTML;
        
        document.getElementById('caixaNumeros').innerHTML = `${eval(resultado)}`
        
        let i = 0;
        do{ 
            numero.pop()
            
        }while(i<numero.length)

    }

});