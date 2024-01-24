// test texte 
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      
      let messageElement = document.getElementById("message");

      messageElement.innerHTML = 'Laissez-vous emporter par <span class="green">Spotify</span>';
      
      
    }, 2000); 
  });


    // CODE PLAY MUSIQUE ONLCICK

let Play = document.querySelector('#playMusiquePlay')

document.addEventListener("click", function(){
    
    document.querySelector('#codeMusiquePlay').play();  

    })

    // CODE PAUSE MUSIQUE ONLCICK

    let Pause = document.querySelector('#playMusiquePause')

document.addEventListener("click", function(){
    
    document.querySelector('#codeMusiquePause').pause();  
       
    });



    // lecture musique sur le flexa avec button green 

    let lecture = document.querySelector("greenbutton")
    lecture.addEventListener("click" , function() {
      console.log(lecture);
      
    })

  