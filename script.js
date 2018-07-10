var button = document.getElementById('button-t');
var textArea = document.getElementById('text-t');
var counterNumber = document.getElementById('character-number');
var tweetLimit = 140;

textArea.addEventListener('input', disableBtn);
textArea.addEventListener('input', counter);
textArea.addEventListener('input', expand);
button.addEventListener('click', sendTweet);

button.disabled = true;
button.classList = 'disabled-button';

function disableBtn() {
  if (textArea.value.length === 0 || textArea.value.length > 140 || textArea.value.trim() === '') {
    button.setAttribute('disabled', 'true');
  } else {
    button.disabled = false;
  }

}

function counter() {
  var autoCounter = tweetLimit - textArea.value.length;
  counterNumber.textContent = autoCounter;

  counterNumber.style = "color: black;";

  if (textArea.value.length > 120) {
    counterNumber.style = "color: yellow;";
  } 

  if (textArea.value.length > 130) {
    counterNumber.style = "color: red;";
  } 

}

function sendTweet() {
  var tweetText = document.getElementById('text-t');  
  var newTweet = document.createElement('p');
  var tweetTime = document.createElement('p');

  newTweet.textContent = tweetText.value;
  moment.locale('pt-br');
  tweetTime.innerHTML = moment().format('LT');
  
  var tweetContainer = document.createElement('div');

  tweetContainer.classList = 'tweet';
  tweetContainer.appendChild(newTweet);
  tweetContainer.appendChild(tweetTime);

  document.getElementById('time').appendChild(tweetContainer);

  tweetText.value = '';
  counter();
}

function expand() {
 if (textArea.scrollHeight > textArea.offsetHeight) {
   textArea.rows += 1;
 }
}