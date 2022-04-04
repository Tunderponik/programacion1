function trapecio(form){
    var xbm=eval(form.bm.value);
    var xbn=eval(form.bn.value);
    var xaltura=eval (form.altura.value);
    var xresultado=eval (form.resultado.value)

    xresultado=(xbm + xbn)*xaltura/2;
    form.resultado.value=xresultado;
    }
    
    function xxx(){
    window.close();
    }