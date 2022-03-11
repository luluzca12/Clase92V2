
//define la función
function addUser(){

    //Obtén los valores de los input el nombre de jugador1 y jugador2 para almacenarlas dentro de las variables
    player1=document.getElementById("player1_name_input").value;
    player2=document.getElementById("player2_name_input").value;

    //Almacena el valor de las variables player1 y player2 con su respectiva clave en el almacenamiento local con la función setItem().
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);

    //redirigir a game_page.html.
    window.location="game_page.html"
}