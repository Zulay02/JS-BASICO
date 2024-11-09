//VALORES FALSOS:

Boolean(0);//nos regresa falso
Boolean(null)//nos regresa falso
Boolean(NaN);//nos regresa falso
Boolean(undefined);//nos regresa falso
Boolean(false);//nos regresa falso
Boolean("");//string vacio nos regresa falso.

//VALORES VERDADEROS:
Boolean(" ");//string con minimo un caracter o espacio.  espacio o 
Boolean(1);//1 en adelante nos regresa verdadero.
Boolean([]);
Boolean({});
Boolean(function(){});
Boolean(true);