// test texte 
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
        
        let messageElement = document.getElementById("message");

        messageElement.innerHTML = 'Laissez-vous emporter par <span class="green">Spotify</span>';
        
        
        }, 2000); 
    });

    // BOUTON LIKE ANIMÉ AU CLICK 
    let buttonLike = document.querySelector(".heartIcon")
    buttonLike.addEventListener("click" , function(){
        buttonLike.classList.toggle("enlarged")
    });
    // /  /CHANGEMENT COULEUR BOUTTON ALEATOIRE  

   
  let aleatoireButton = document.querySelector("#MusiqueRandom");
  aleatoireButton.addEventListener("click", function() {

      aleatoireButton.classList.toggle("ramdombutton")
      aleatoireButton.classList.toggle("normal")
  });




    //TEST START MUSIC BUTTON GREEN CODE YACINE
     // TEST POUR AFFICHER LA DIV LECTEUR AU CLICK 


    document.addEventListener('DOMContentLoaded', function () {
      let startButtons = document.querySelectorAll("#startmusic");
      let lecteur = document.getElementById("lecteur");
      let currentAudio = null;
    
      console.log(startButtons)  

      startButtons.forEach(function (button) {
       
        button.addEventListener("click", function () {
          let audio = this.querySelector("audio");

          
          let nameSong = document.querySelector(".nameSong") // Affiche au click le nom sur le lecteur
          nameSong.innerHTML = button.classList


          let artisteSong = document.querySelector(".artisteSong") // Affiche au click l'artiste sur le lecteur
          artisteSong.innerHTML = button.dataset.artiste

        //   let coverSong = document.querySelector(".coverLecteur")
        //   coverSong.innerHTML = button.dataset.cover 
        if (currentAudio) {
            // Si une chanson est déjà en cours de lecture, arrêtez-la
            currentAudio.pause();
            currentAudio.currentTime = 0; // Remet la lecture au début
        }

        lecteur.classList.add("visible");
        audio.play();
        currentAudio = audio;
    });
    });
  });   

      ///VOLUME LECTEUR

    let volumeControle = document.querySelector("#volume");
    let musiques = document.querySelectorAll(".coverMusic");

    volumeControle.addEventListener('change', function () {
        musiques.forEach(function (musique) {
            musique.volume = volumeControle.value / 10;
    });
});

    
  

    // CODE PLAY MUSIQUE ONLCICK

    
    let Play = document.querySelector('#playMusiquePlay')

    Play.addEventListener("click", function(){
        document.querySelector('.coverMusic').play();

        let classe = Play.parentNode.classList;
        classe.toggle("hiddenPLAY");
        let classePause = Pause.parentNode.classList;
        classePause.toggle("hiddenPLAY")
    })

    // CODE PAUSE MUSIQUE ONLCICK

    let Pause = document.querySelector('#playMusiquePause')

        Pause.addEventListener("click", function(){        
            document.querySelector('.coverMusic').pause();  

            let classePause = Pause.parentNode.classList;
            classePause.toggle("hiddenPLAY");
            let classe = Play.parentNode.classList;
            classe.toggle("hiddenPLAY");       
    })

   
    // CODE MUSIQUE RANDOM 

    let randomPlay = document.querySelector('#MusiqueRandom')

        randomPlay.addEventListener("click", function(){

            Math.random(document.querySelector('.coverMusic').play())
            randomPlay.classList.add("activeRandom")

            //utiliser toogle 
               
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
                      

            let BTNnext = document.querySelector('#nextMusique');
            BTNnext.addEventListener("click", function(){

                let audio = document.querySelector('.coverMusic')
                
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

                let audio = document.querySelector('.coverMusic')
            
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
