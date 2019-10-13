/* function plusSlides(n) {
  Chang_Img(NumSlide += n);
}
                            //Dans le cas où on aurait fait un défilement manuel
function Image(n) {
  Chang_Img(NumSlide = n);
}                                */


// Changeons d'image automatiquement toutes les 3 secondes.
function Chang_Img() {
  var i;
  var img = document.getElementsByClassName("image_promo");
  var Btn = document.getElementsByClassName("Bouton");
  /*if (n > img.length) {NumSlide = 1}    
  if (n < 1) {NumSlide = img.length}*/
  for (i = 0; i < img.length; i++) {
      img[i].style.display = "none";  
  }

  NumSlide++;
  if(NumSlide>img.length)
    {NumSlide=1;}


  for (i = 0; i < Btn.length; i++) {
      Btn[i].className = Btn[i].className.replace(" active", "");
  }
  img[NumSlide-1].style.display = "block";  
  Btn[NumSlide-1].className += " active";
  setTimeout(Chang_Img,3000)
}


// DEEZER
(function(d, s, id) { 
  var js, djs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return; 
  js = d.createElement(s); js.id = id; 
  js.src = "https://e-cdns-files.dzcdn.net/js/widget/loader.js"; 
   djs.parentNode.insertBefore(js, djs);
}(document, "script", "deezer-widget-loader"));



/*// Fixer le header
function Fix_Header(){

 if (window.pageYOffset >= mouvement) {
    header.classList.add("mouvement");
  } else {
    header.classList.remove("mouvement");
  }
}*/
