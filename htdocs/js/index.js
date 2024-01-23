// test texte 
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      
      let messageElement = document.getElementById("message");

      messageElement.innerHTML = 'Laissez-vous emporter par <span class="green">Spotify</span>';
      
      
    }, 2000); 
  });
    // CODE PLAY MUSIQUE ONLCICK

let Play = document.querySelector('#playMusique')

document.addEventListener("click", function(){
    
    document.querySelector('#codeMusique').play();

        
    })
