//almacenar en una variable los valores almacenado localmente para poder usarlos en game_page.html

/*  localStorage    - Nos permite obtener los datos del almacenamiento local.
    getItem()       - un método utilizado para obtener los valores del almacenamiento local.
    player1         - es la clave con la que se guardan localmente
*/
player1= localStorage.getItem("player1");
player2= localStorage.getItem("player2");

//variables para almacenar el puntaje del jugador 1 y el jugador 2
player1_score = 0;
player2_score = 0;

//Mostrar el nombre de los jugadores y su puntuación
document.getElementById("player1_name").innerHTML = player1 + " : ";
document.getElementById("player2_name").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

//Mostrar el nombre del jugador y quien le toca preguntar y responder
document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1;
document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2;

function send() {

    //Obtener la palabra del input y guardar en la variable palabra
	palabra_input = document.getElementById("word").value;

    //Convertir la palabra a minúscula 
	palabra = palabra_input.toLowerCase();
	console.log("word in lowerCase = " + palabra);

    //Obtener la letra en la posición 1 de la palabra
    charAt1 = palabra.charAt(1);
	console.log(charAt1);

    /* Vamos a dividir la longitud de la palabra entre 2 y la almacenamos en la variable antes de pasarla a la función charAt(). 
    Esto lo hacemos para obtener la letra en el medio de la palabra.
    Math.floor() - es una función JavaScript que redondea el número hacia abajo a su número más cercano.*/

	lenght_divide_2 = Math.floor(palabra.length/2);
	charAt2 = palabra.charAt(lenght_divide_2);
	console.log(charAt2);

    /*Vamos a restar 1 de la longitud de la palabra y la almacenaremos en una variable antes de pasarla a charAt(). 
    Esto lo hacemos para poder obtener la última letra de la palabra. */
    lenght_minus_1 = palabra.length - 1; 
    charAt3 = palabra.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = palabra.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    /*Ahora vamos a escribir el código para añadir esta palabra, la entrada de texto y el botón de comprobar al div que creamos */

    /*vamos a crear una etiqueta h4 con un id y almacenamos la palabra dentro de esta etiqueta. Todo esto va dentro de una variable */
    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";

    //Después vamos a crear una etiqueta br con el texto “Respuesta: “ y una entrada de texto con un id. Todo esto va dentro de una variable
    input_box = "<br>Respuesta: <input type='text' id='input_check_box'>";

    //Ahora, vamos a añadir 2 etiquetas br, un botón con la clase bootstrap ‘btn btn-info’ y una función onclick check(). 
    //Todo esto va dentro de una variable.
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";

    //vamos a poner todo esto dentro de una variable
    row =  question_word + input_box + check_button ;
    
    //vamos a actualizar el div con el id de salida con la variable row
    document.getElementById("output").innerHTML = row;

    //Actualizamos el valor del jugador que pregunta con un valor nulo
    document.getElementById("word").value = "";
}
