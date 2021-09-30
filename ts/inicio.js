function validacion() { 
	valor = document.getElementById("telefono").value;
	if( !(/^\d{9}$/.test(valor)) ) {
			  // Si no se cumple la condicion...
			  alert('[ERROR] El telefono debe tener 9 digitos');
		return false;
	  }

	valor = document.getElementById("caja-de-texto").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
		alert('[ERROR] El campo de texto está vacío');
  		return false;
	}



  
	if(!document.getElementById('python').checked && !document.getElementById('typescript').checked && !document.getElementById('c++').checked &&
	!document.getElementById('c#').checked && !document.getElementById('php').checked && !document.getElementById('ruby').checked && !document.getElementById('java').checked && !document.getElementById('r').checked && !document.getElementById('groovy').checked  && !document.getElementById('go').checked  && !document.getElementById('swift').checked  && !document.getElementById('kotlin').checked){
	
		alert('Por favor seleccione al menos un lenguaje de interés');
	return false;
	}

	if(!document.getElementById('estructura-de-datos').checked && !document.getElementById('inteligencia-artificial').checked && !document.getElementById('humano-computador').checked && !document.getElementById('sistemas-operativos').checked && !document.getElementById('otro').checked){
		alert('Por favor seleccione al menos un curso');
	return false;
	}

	
	var valor = rut.value.replace('.','');
    
    valor = valor.replace('-','');
    
  
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
  
    rut.value = cuerpo + '-'+ dv
    
 
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); 
		alert('[ERROR] Digite un rut valido')
	return false;}

    
    suma = 0;
    multiplo = 2;
    
    for(i=1;i<=cuerpo.length;i++) {
    
        index = multiplo * valor.charAt(cuerpo.length - i);    

        suma = suma + index;
        
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    dvEsperado = 11 - (suma % 11);
    

    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
 
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); 
	alert('[ERROR] Digite un rut valido')
		return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');
		
	



  
	// Si el script ha llegado a este punto, todas las condiciones
	// se han cumplido, por lo que se devuelve el valor true

	return true;
	

}


