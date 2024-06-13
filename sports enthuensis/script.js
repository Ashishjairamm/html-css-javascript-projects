const main = document.querySelector("main");
const voicesSelect = document.getElementById("custom-voices");
const textarea = document.getElementById("custom-text");
const readButton = document.getElementById("custom-read");
const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("custom-close");

const data = [
  {
    image: "https://images7.alphacoders.com/411/411202.jpg",
    text: "Soccer",
  },
  {
    image: "http://wallsdesk.com/wp-content/uploads/2016/02/volleyball-background.jpg",
    text: "Beach Volleyball",
  },
  {
    image: "https://wallpaperdig.com/wp-content/uploads/2021/02/XDCFVBGNHJM.jpg",
    text: "Cricket",
  },
  {
    image: "https://images5.alphacoders.com/405/thumb-1920-405110.jpg",
    text: "Basketball",
  },
  {
    image: "https://www.worldatlas.com/r/w1200/upload/46/02/84/shutterstock-555305914.jpg",
    text: "Table Tennis",
  },
  {
    image: "https://wallpapercave.com/wp/m6fp4Dr.jpg",
    text: "Badminton",
  },
  {
    image: "https://wallpaperaccess.com/full/1104040.jpg",
    text: "American Football",
  },
  {
    image: "https://wallpaperaccess.com/full/2051796.jpg",
    text: "Ice Hockey",
  },
  {
    image: "https://cdn.wallpapersafari.com/15/90/te5Iiu.jpg",
    text: "Diving",
  },
  {
    image: "https://getwallpapers.com/wallpaper/full/b/5/7/1442862-full-size-cycling-desktop-wallpaper-1920x1247-picture.jpg",
    text: "Mountain Biking",
  },
  {
    image: "https://blogs.bmj.com/bjsm/files/2017/08/running-sunset.jpg",
    text: "Marathon",
  },
  {
    image: "https://jooinn.com/images/skiier-4.jpg",
    text: "Snowboarding",
  },
];

function createCustomBox(item) {
  const customBox = document.createElement("div");
  const { image, text } = item;
  customBox.classList.add("custom-box");
  customBox.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;
  customBox.addEventListener("click", () => handleCustomSpeech(text, customBox));
  main.appendChild(customBox);
}

data.forEach(createCustomBox);

let voices = [];

function getCustomVoices() {
  console.log('Fetching voices...');
  voices = speechSynthesis.getVoices();
  if (voices.length > 0) {
    console.log('Voices loaded:', voices);
    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.value = voice.name;
      option.innerText = `${voice.name} (${voice.lang})`;
      voicesSelect.appendChild(option);
    });
    } else {
      console.log('No voices found. Retrying...');
      setTimeout(getCustomVoices, 500); // Retry after 500ms
    }
  }
  
  function handleCustomSpeech(text, customBox) {
    console.log('Handling speech for text:', text);
    setCustomTextMessage(text);
    speakCustomText();
    customBox.classList.add("active");
    setTimeout(() => customBox.classList.remove("active"), 800);
  }
  
  const customMessage = new SpeechSynthesisUtterance();
  
  function setCustomTextMessage(text) {
    customMessage.text = text;
  }
  
  function speakCustomText() {
    console.log('Speaking text:', customMessage.text);
    if (!customMessage.voice && voices.length > 0) {
      customMessage.voice = voices[0];
    }
    speechSynthesis.speak(customMessage);
  }
  
  function setCustomVoice(e) {
    console.log('Setting custom voice:', e.target.value);
    customMessage.voice = voices.find((voice) => voice.name === e.target.value);
  }
  
  // Event Listeners
  toggleButton.addEventListener("click", () => {
    document.getElementById("custom-text-box").classList.toggle("show");
  });
  closeButton.addEventListener("click", () => {
    document.getElementById("custom-text-box").classList.remove("show");
  });
  speechSynthesis.addEventListener("voiceschanged", getCustomVoices);
  voicesSelect.addEventListener("change", setCustomVoice);
  
  readButton.addEventListener("click", () => {
    setCustomTextMessage(textarea.value);
    speakCustomText();
  });
  
  // Initial call to fetch voices
  getCustomVoices();
  