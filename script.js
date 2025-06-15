const catMemes = [
  "https://media.tenor.com/ej_uvg93_v8AAAAM/yippee-iluvmybf.gif",
];

function revealNumber() {
  const userNum = document.getElementById('userNumber').value;
  const resultDiv = document.getElementById('result');
  const catDiv = document.getElementById('catMeme');

  if (userNum === "") {
    resultDiv.innerText = "Don't be shy, type a number!";
    catDiv.innerHTML = "";
  } else {
    resultDiv.innerText = `Aha! The number you were thinking about is ${userNum}! 😎🔮`;

    // Pick a random cat meme
    const randomCat = catMemes[Math.floor(Math.random() * catMemes.length)];
    catDiv.innerHTML = `<img src="${randomCat}" alt="Psychic Cat Meme">`;
  
 confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
}
} 
