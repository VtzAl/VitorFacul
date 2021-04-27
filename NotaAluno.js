function calcular(){
   var txtaval1 = document.getElementById('txtaval1');
   var txtaval2 = document.getElementById('txtaval2');
   var txtaval3 = document.getElementById('txtaval3');
   var txtaluno = document.getElementById('txtaluno');
   var aluno = (txtaluno.value)
   var aval1 = Number(txtaval1.value)
   var aval2 = Number(txtaval2.value)
   var aval3 = Number(txtaval3.value)
   
   outaval1.textContent = `Aval1 = ${aval1}`
   outaval2.textContent = `Aval2 = ${aval2}`
   outaval3.textContent = `Aval3 = ${aval3}`

   //else and if


   if(aval1 <= 4 || aval2 <= 4) { aval1 = 0   }

   if(aval1 <= 4 || aval2 <= 4) {aval2 = 0}

   if(aval1 >= aval2){ if (aval2 >= aval3){ aval2 = aval2  }

   else {aval2 = aval3}
   } 
   else if (aval2 >= aval1){ if (aval1>= aval3){ aval1 = aval1}

   else{ aval1 = aval3 }

}

var media = (aval1 + aval2) /2

if (aval1 < 4 || media < 6 || aval2 < 4){outresult.textContent= `Tristemente ${aluno}, voce foi reprovado. `}

else{ outresult.textContent= `Parabéns ${aluno}, você foi aprovado com ${media} pontos`}


      
   







   















}