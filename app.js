function dice(){
      let audio = document.getElementById('audio');
      audio.play();
        let diceNumber = Math.floor(Math.random()*6);
        diceNumber++;
       document.getElementById("value").innerHTML =diceNumber;
    
}