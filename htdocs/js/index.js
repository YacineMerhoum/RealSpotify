// test texte 
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
        
        let messageElement = document.getElementById("message");

        messageElement.innerHTML = 'Laissez-vous emporter par <span class="green">Spotify</span>';
        
        
        }, 2000); 
    });



    //TEST START MUSIC BUTTON GREEN CODE YACINE


    document.addEventListener('DOMContentLoaded', function () {
      let startButtons = document.querySelectorAll("#startmusic");
    
      startButtons.forEach(function (button) {
       
        button.addEventListener("click", function () {
          let audio = this.querySelector("audio");
          
          audio.play();
          let affichageLecteur = document.querySelector("#lecteur");
          affichageLecteur.innerHTML = ``
          
          
        });
      });
    });
    
  

    // CODE PLAY MUSIQUE ONLCICK

    
    let Play = document.querySelector('#playMusiquePlay')

    Play.addEventListener("click", function(){
        document.querySelector('#codeMusiquePlay').play();

        let classe = Play.parentNode.classList;
        classe.toggle("hiddenPLAY");
        let classePause = Pause.parentNode.classList;
        classePause.toggle("hiddenPLAY")
    })

    // CODE PAUSE MUSIQUE ONLCICK

    let Pause = document.querySelector('#playMusiquePause')

        Pause.addEventListener("click", function(){        
            document.querySelector('#codeMusiquePlay').pause();  

            let classePause = Pause.parentNode.classList;
            classePause.toggle("hiddenPLAY");
            let classe = Play.parentNode.classList;
            classe.toggle("hiddenPLAY");       
    })

   
    // CODE MUSIQUE RANDOM 

    let randomPlay = document.querySelector('#MusiqueRandom')

        randomPlay.addEventListener("click", function(){

            console.log(randomPlay.style)
            document.querySelector('#codeMusiqueRand').play();
            
        })

