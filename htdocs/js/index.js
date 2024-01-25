// test texte 
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
        
        let messageElement = document.getElementById("message");

        messageElement.innerHTML = 'Laissez-vous emporter par <span class="green">Spotify</span>';
        
        
        }, 2000); 
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
            document.querySelector('#codeMusiqueRand').play();   
        })


    // METHODE AJAX POUR MUSIQUE SUIVANTE

    function process() {

        fetch("./process/play_musique.php")
        .then((res)=>{
            return res.json();
        })
        .then((datas)=>{
            
            let p = document.querySelector('#nextMusique');
            p.addEventListener("click", function(){
                let audio = document.querySelector('#nextMusiqueAUDIO')
                
                console.log(datas);
                console.log(p);
                
                for (let i = 0; i < datas.length; i++) {
                    audio.src = `./music/songs/${datas[i]['url']}`
                    console.log("ppl")
                }
                console.log(audio)
                console.log(datas[2]['url'])
            })
        })
    }
    process();

    