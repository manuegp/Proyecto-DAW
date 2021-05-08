window.onload= function() {
  console.log('dasdf');

//document.getElementById('id-sun').onclick(cambiarClaro);
document.getElementById('modoOscuro').addEventListener("click", cambiarOscuro);

  function cambiarOscuro(){
    console.log("sa");
    let elementos = $(".cambiable");
    let estado = $("#uniqueID");
    
    console.log(estado.is());
    estado= true;
    if(  $("#uniqueID").is(':checked') ) {
      console.log('hola');
     
    $(".toogle-track").css("background-color", "black");
    $("#menu").toggleClass("navbar-dark", "navbar-light");
    $("#menu").toggleClass("bg-dark", "bg-light");
    $("body").toggleClass("dark-mode", " ");
    console.log(elementos);
    for (var i = 0; i < elementos.length; i++) {
      elementos.css("background-color", "black");
   }
  }else{
    for (var i = 0; i < elementos.length; i++) {
      elementos.css("background-color", "white");
   }
  }

} 
  
}