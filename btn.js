// let audio = document.getElementById("myAudio");
// let name = document.getElementById("name");
// let sign = document.getElementById("sign");
let btn = document.getElementById("btn");

window.onload = function () {
    let name = $('#name').detach();
    let sign = $('#sign').detach();
    // let audio = $('#myAudio').detach();

    btn.addEventListener('click',()=>{
       let music = new Audio('./music.mp3');
       music.play();

       $('body').append(name);
       $('body').append(sign);

    btn = $('#btn').detach();
       
    })
};
