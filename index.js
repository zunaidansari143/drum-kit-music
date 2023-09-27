  
//   let mySound = new Audio('my_audio_file.wav')
//   mySound.play()

// function myFunctionW(
    

// )
let tom1 = new Audio('./audio/WhatsApp Audio 2023-05-31 at 14.30.124.mp3')
let tom2 = new Audio('./audio/WhatsApp Audio 2023-05-31 at 14.30.15.mp3')
let tom3 = new Audio('./audio/WhatsApp Audio 2023-05-31 at 14.30.12.mp3')
let tom4 = new Audio('./audio/WhatsApp Audio 2023-05-31 at 14.30.15.mp3')
let tom5 = new Audio('./audio/WhatsApp Audio 2023-05-31 at 14.30.16.mp3')
let tom6= new Audio('./audio/WhatsApp Audio 2023-05-31 at 14.30.18.mp3')

function myFunctionW(){
tom1.play()
  }
  
  function myFunction(event) {
    let key = event.key;

   switch(key){
    case "w" :
      tom1.play();
      console.log("pressed");
      break
    case "a" :
      tom2.play();
      console.log("pressed");
      break
    case "s" :
      tom3.play();
      console.log("pressed");
      break
    case "d" :
      tom4.play();
      console.log("pressed");
      break
    case "j" :
      tom5.play();
      console.log("pressed");
      break
    case "k" :
      tom6.play();
      console.log("pressed");
      break
    case "l" :
      tom1.play();
      console.log("pressed");
      break
  default:
  break
   }
  }
function myFunctiond(){
tom1.play()
  }
function myFunctionS(){
tom3.play()
  }


  function myFunctionA(){
    tom2.play()
  }

  function myFunctionJ(){
tom3.play()
  }

  function myFunctionS(){
tom4.play()
  }
  function myFunctionK(){
tom5.play()
  }
  function myFunctionL(){
tom6.play()
  }