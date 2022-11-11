function moverPosicionRandom(elm){
    elm.style.position='absolute';
    elm.style.top=Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left=Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}
let btnSi =document.getElementById('si');
let btnNo =document.getElementById('no');
let divModoSexo= document.getElementsByClassName('modo-sexo')[0];

btnNo.addEventListener('mouseenter', function(e){
    moverPosicionRandom(e.target);
});

btnSi.addEventListener('click',function(e){
    alert('Sabía que dirías que sí');
    divModoSexo.style.display='block';
    const cancion = new Audio('audio/Careless_Whisper.mp3');
    cancion.play();
})