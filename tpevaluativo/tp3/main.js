const calcular_raices=(d1,d2,d3) => {

    const bloque1 = (Math.pow(d2,2)-(4*d1*d3))

    const raiz1= -d2 + Math.sqrt(bloque1)
    
    const raiz2= -d2 - Math.sqrt(bloque1)

    const denominador= 2*d1

    const resultado1= raiz1 / denominador
 
    const resultado2= raiz2 / denominador

    return 'raiz1= '+ resultado1 +' raiz2=' + resultado2

}
const  mostrar = () => {
const dato1= parseInt( document.getElementById("inp_dato1").value) //a
const dato2= parseInt( document.getElementById("inp_dato2").value) //b
const dato3= parseInt( document.getElementById("inp_dato3").value) //c

  const respuesta= calcular_raices(dato1,dato2,dato3)

   document.getElementById("Resultado").textContent = 'Resultado Raiz: '+ respuesta
}
const boton=document.getElementById("mostrar_respuesta") 

   
   //indicamos elemento a escuchar (en este click)
   //entonces cuando se haga click se invocara a la funcion mostrar 
   boton.addEventListener("click", mostrar)