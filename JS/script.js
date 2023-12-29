var saibaMaisBtn = document.getElementById("saiba-mais");
var divParagrafo = document.getElementById("saiba-mais-informacao");

saibaMaisBtn.addEventListener('click', function(){
    divParagrafo.style.display = 'block';
    saibaMaisBtn.style.display = 'none';
});