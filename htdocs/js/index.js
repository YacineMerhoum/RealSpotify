// test texte 
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
        
        let messageElement = document.getElementById("message");

        messageElement.innerHTML = 'Laissez-vous emporter par <span class="green">Spotify</span>';
        
        
        }, 2000); 
    });



    //TEST START MUSIC BUTTON GREEN CODE YACINE
     // TEST POUR AFFICHER LA DIV LECTEUR AU CLICK 


    document.addEventListener('DOMContentLoaded', function () {
      let startButtons = document.querySelectorAll("#startmusic");
      let lecteur = document.getElementById("lecteur");
    
      console.log(startButtons)  

      startButtons.forEach(function (button) {
       
        button.addEventListener("click", function () {
          let audio = this.querySelector("audio");
          lecteur.classList.add("visible");
          audio.play();

          // AFFICHER CACHER LE BOUTON PLAY


          let Play = document.querySelector('#playMusiquePlay')

          let classe = Play.parentNode.classList;
          classe.add("hiddenPLAY");

          let classePause = Pause.parentNode.classList;
          classePause.toggle("hiddenPLAY")

          // FIN AFFICHER CACHER LE BOUTON PLAY

           console.log(audio)
          console.log(affichageLecteur)
          

        
          lecteur.classList.add("visible");
          audio.play();

        });
        });
      });
        

      ///VOLUME LECTEUR

    let volumeControle = document.querySelector("#volume");
    let musique = document.querySelector("#coverMusic");
    
    volumeControle.addEventListener('change', function () {
        musique.volume = volumeControle.value / 10;
        
        
    });
     

    // CODE PLAY MUSIQUE ONLCICK

    
    let Play = document.querySelector('#playMusiquePlay')

    Play.addEventListener("click", function(){
        document.querySelector('#coverMusic').play();

        let classe = Play.parentNode.classList;
        classe.toggle("hiddenPLAY");
        let classePause = Pause.parentNode.classList;
        classePause.toggle("hiddenPLAY")
    })

    // CODE PAUSE MUSIQUE ONLCICK

    let Pause = document.querySelector('#playMusiquePause')

        Pause.addEventListener("click", function(){        
            document.querySelector('#coverMusic').pause();  

            let classePause = Pause.parentNode.classList;
            classePause.toggle("hiddenPLAY");
            let classe = Play.parentNode.classList;
            classe.toggle("hiddenPLAY");       
    })

   
    // CODE MUSIQUE RANDOM 

    let randomPlay = document.querySelector('#MusiqueRandom')

        randomPlay.addEventListener("click", function(){

            Math.random(document.querySelector('#coverMusic').play())
            randomPlay.classList.toggle("activeRandom");
               
        })


            // INCREMENTATION DE A POUR SE DEPLACER DANS LES MUSIQUES

                let A = 0;

            // //FIN 


    // METHODE AJAX POUR MUSIQUE SUIVANTE

    function process() {

        fetch("./process/play_musique.php")
        .then((res)=>{
            return res.json();
        })
        .then((datas)=>{
                      
            // A = 0;

            let BTNnext = document.querySelector('#nextMusique');
            BTNnext.addEventListener("click", function(){

                let audio = document.querySelector('#coverMusic')
                
                A++  

                 function NEXT(n) {
                     datas[n]['url']
                 } 
                 NEXT(A);
                
                audio.src = `./music/songs/${datas[A]['url']}`;
                audio.play()     
            })          
        })
    }
    process();

    // PREVIUS MUSIQUE AJAX


    function process2() {

        fetch("./process/play_musique.php")
        .then((res)=>{
            return res.json();
        })
        .then((datas)=>{
             
                let BTNprevius = document.querySelector('#previusMusique');
                BTNprevius.addEventListener("click", function(){

                let audio = document.querySelector('#coverMusic')
            
                 A--
                
                 function NEXT(n) {
                     datas[n]['url']
                 }
                
                 NEXT(A)
               
                    audio.src = `./music/songs/${datas[A]['url']}`;
                    audio.play()
            })          
        })
    }
    process2();

    
    
    function process3() {   


        let BTNlike = document.querySelector("#LIKE");

        BTNlike.addEventListener("click", function(e){

            console.log(e.target)
            
            let formData = new FormData()

            formData.append('id_song', BTNlike.dataset.id_song)
            
            console.log(formData)

            fetch("/process/add_Like.php", {
                method : "post",
                body : formData
            })
            .then((res)=>{
                    return res.json();
                })
        })
    }

process3();