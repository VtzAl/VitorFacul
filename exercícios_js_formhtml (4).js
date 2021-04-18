/*
   1 - Elaborar um programa para uma revenda de veículos. O programa deve ler o modelo e o preço do veículo.
   Deve, então, apresentar como resposta o valor da entrada (50%) e restante em 12x.

*/
function Aplicar(){


   var txtVeic = document.getElementById('txtVeic')
   var txtPrec = document.getElementById('txtPrec')
   var outVeic = document.getElementById('outVeic')
   var outPrec = document.getElementById('outPrec')
   
   
   var veiculo = txtVeic.value;
   var prec = Number(txtPrec.value);
   
   
   var valor = prec / 2 ;
   var parc = Math.ceil(valor / 12) ;
   
   outVeic.textContent = veiculo
   outPrec.textContent = `Entrada de R$ ${valor} + 12x De R$ ${parc}`
   
 }
   

/*
   2 - Elaborar um programa para um restaurante que leia o preço por kg e o consumo em gramas de um cliente.
   Exiba o valor a ser pago.

*/
function calcular(){  
   
   var txtprecokilo = document.getElementById('txtprecokilo');
   var txtconsu = document.getElementById('txtconsu');

   var kilo = Number(txtprecokilo.value);
   var cons = Number(txtconsu.value); 
   
   var total = (cons * kilo) / 1000;
  

   outprecokilo.textContent =`Valor a pagar R$ ${total}`
}
/*
   3 - Elaborar um programa para uma lan house de um aeroporto. 
   O programa deve ler o valor de cada 15 min de uso de um computador e o tempo de uso por um cliente em minutos.
   Informe o valor a ser pago pelo cliente, sabendo que as frações de 15 minutos devem ser cobradas de forma integral.
function calcular(){

    */
        var  txtpreco = document.getElementById('txtpreco');
        var  txtminuto = document.getElementById('txtminuto');
        var  outpreco = document.getElementById('outpreco');
      
        var preco = Number(txtpreco.value);
        var minuto = Number(txtminuto.value);
     
        var total = minuto / 15
        var total2 = Math.ceil(total)
        var final = total2 * preco
     
        outpreco.textContent =`Valor a pagar R$: ${final}`
     









}

