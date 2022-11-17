const stopButton = document.querySelector('#stopButton');
const stopLight = document.querySelector('#stopLight');
const slowButton = document.querySelector('#slowButton');
const slowLight = document.querySelector('#slowLight');
const goButton = document.querySelector('#goButton');
const goLight = document.querySelector('#goLight');

const stopCounter = true;
const slowCounter = true;
const goCounter = true;

stopButton.addEventListener('click', function(){
  stopLight.classList.toggle('stop');
});

slowButton.addEventListener('click', function(){
  slowLight.classList.toggle('slow');
});

goButton.addEventListener('click', function(){
  goLight.classList.toggle('go');
});

stopButton.addEventListener("mouseenter", function(){
  console.log(`Entered ${stopButton.textContent} button.`)
})

slowButton.addEventListener("mouseenter", function(){
  console.log(`Entered ${slowButton.textContent} button.`)
})

goButton.addEventListener("mouseenter", function(){
  console.log(`Entered ${goButton.textContent} button.`)
})

stopButton.addEventListener("mouseleave", function(){
  console.log(`Left ${stopButton.textContent} button.`)
})

slowButton.addEventListener("mouseleave", function(){
  console.log(`Left ${slowButton.textContent} button.`)
})

goButton.addEventListener("mouseleave", function(){
  console.log(`Leave ${goButton.textContent} button.`)
})

// make eventListener into a function

const button = [stopButton, slowButton, goButton];

function clickLog(button){
  if(button.toggle === true){
    console.log(`${button.textContent} bulb on`);
  } else {
    console.log(`${bulb.textContent} bulb off`);
  }
}

console.log(button)