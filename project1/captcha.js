const captcha = () => {
    const captchaSubmit = document.getElementById("captcha-submit");
    const captchaInput = document.getElementById("captcha-input");
    const captchaImg = document.getElementById("captcha-img");
    
    const captchaArr = [
        ['Party Cannon', '../images/party_cannon.png'],
        ['Poison Miracle', '../images/poison_miracle.png'],
        ['Purification By Fire', '../images/purification_by_fire.png'],
        ['The Kennedy Veil', '../images/the_kennedy_veil.png']
    ];

    let randomImage = Math.floor(Math.random() * 4);
    captchaImg.src = captchaArr[randomImage][1]

    captchaSubmit.addEventListener("click", (event) => {
      const yesInput = captchaInput.value != "";
      const inputValue = captchaInput.value;
  
      if (yesInput) {
        if (inputValue == captchaArr[randomImage][0]){
          window.location.href = './index.html';
        } else {
          randomImage = (randomImage + 1) % 4;
          captchaImg.src = captchaArr[randomImage][1]
        }
      } 
    });
  };

document.addEventListener("DOMContentLoaded", (event) => {
    try {
      captcha();
    } catch (e) {
      console.error(e);
    }
  });