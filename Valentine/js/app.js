document.addEventListener("DOMContentLoaded", () => {
  const openbtn = document.getElementById("open");
  const card = document.getElementById("card");
  const flower1 = document.getElementById("flower1");
  const flower2 = document.getElementById("flower2");
  const flower3 = document.getElementById("flower3");
  const flower4 = document.getElementById("flower4");
  const flower5 = document.getElementById("flower5");
  const title1 = document.getElementById("title1");
  const title2 = document.getElementById("title2");
  const openButtonDiv = document.getElementById("buttonDiv");
  const cardContent = document.getElementById("cardContent");
  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");
  const heartImg = document.getElementById("heartImg");
  const question = document.getElementById("question");
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  const flowerContainer = document.getElementById("flowerContainer");
  const spinWrapper = document.getElementById("spinWrapper");
  const parentDiv = document.getElementById("parentDiv");
  const carousels = document.querySelectorAll(".carousel");

  const song = document.getElementById("song");
  const song2 = document.getElementById("song2");
  song2.currentTime = 59;
  const heal = document.getElementById("heal");
  const rip = document.getElementById("rip");

  let count = 0;




  openbtn.addEventListener("click", () => {
    card.classList.add("cardAnimation");
    cardContent.classList.add("cardAnimation");
    flower1.classList.add("LFAnimation");
    flower2.classList.add("RFAnimation");
    flower3.classList.add("LFAnimation");
    flower4.classList.add("RFAnimation");
    flower5.classList.add("openFlowerAnimation");
    title1.classList.add("openAnimation");
    title2.classList.add("openAnimation");
    openButtonDiv.classList.add("openAnimationBut");
    spinWrapper.classList.add("cardAnimation");

    song.currentTime = 71.75;
    song.play();
  });



  spinWrapper.addEventListener("animationend", (e) => {
    if (e.animationName === "openLetter") {
      console.log("we made it");
      cardContent.classList.remove("cardContentInit");
      cardContent.classList.add("cardContentAnimation");
    }
  });

  yesButton.addEventListener("mouseenter", () => {
    if(question.innerText !== "Will you be my valentine?" && question.innerText !== "Alright, you got me, you get an anytime massage coupon hehe. Will you be my valentine?"){
      count++;
      yesButton.classList.add("moveButton");
      console.log(yesButton.classList);
      const randomX = Math.random() * (winWidth - yesButton.offsetWidth*3);
      const randomY = Math.random() * (winHeight - yesButton.offsetHeight*3);
      yesButton.style.left = randomX + "px";
      yesButton.style.top = randomY + "px";


      if(count >= 15) {
        question.innerText = "Alright, you got me, you get an anytime massage coupon hehe. Will you be my valentine?";
        count = 0;
      }
      else if(count >= 10) question.innerText = "This isn't WE WERE HERE bro";
      else if(count >= 5) question.innerText = "So you wanna break up with me?";
    }
  });

  yesButton.addEventListener("click", () => {
    if(question.innerText === "Will you be my valentine?" || question.innerText === "Alright, you got me, you get an anytime massage coupon hehe. Will you be my valentine?") {
      card.classList.remove("cardAnimation");
      void card.offsetWidth;
      card.classList.add("cardAnimationRev");

      spinWrapper.classList.remove("cardAnimation");
      void card.offsetWidth;
      spinWrapper.classList.add("cardAnimationRev");

      flower1.classList.remove("LFAnimation");
      void flower1.offsetWidth;
      flower1.classList.add("LFAnimationRev");

      flower2.classList.remove("RFAnimation");
      void flower2.offsetWidth;
      flower2.classList.add("RFAnimationRev");

      flower3.classList.remove("LFAnimation");
      void flower3.offsetWidth;
      flower3.classList.add("LFAnimationRev");

      flower4.classList.remove("RFAnimation");
      void flower4.offsetWidth;
      flower4.classList.add("RFAnimationRev");

      flower5.classList.remove("openFlowerAnimation");
      void flower5.offsetWidth;
      flower5.classList.add("openFlowerAnimationRev");

      title1.classList.remove("openAnimation");
      void title1.offsetWidth;
      title1.classList.add("openAnimationRev");

      title2.classList.remove("openAnimation");
      void title2.offsetWidth;
      title2.classList.add("openAnimationRev");



      openButtonDiv.style.display = "none";

      cardContent.style.display = "none";
      song2.pause();
      song.play();
    }
  });

  title1.addEventListener("animationend", (e) => {
    console.log(e);
    if (e.animationName === "close"){
      flower1.removeAttribute("id");
      flower2.removeAttribute("id");
      flower3.removeAttribute("id");
      flower4.removeAttribute("id");

      flower1.classList.add("flower1");
      flower2.classList.add("flower2");
      flower3.classList.add("flower3");
      flower4.classList.add("flower4");

      flowerContainer.classList.add("spinCardAnimation2");
      spinWrapper.classList.add("spinCardAnimation");
    }
  });

  spinWrapper.addEventListener("animationend", (e) => {
    if(e.animationName === "spinCard"){
      parentDiv.style.display = "none";

    }
  })



  noButton.addEventListener("click", () => {
    if(question.innerText !== "Will you be my valentine?" && question.innerText !== "Alright, you got me, you get an anytime massage coupon hehe. Will you be my valentine?"){
      heal.play();
      question.innerText = "Will you be my valentine?";
      heartImg.src = "./img/heart.png";
      yesButton.classList.remove("moveButton");
      song2.pause();
      song.play();

    }
    else {
      rip.play();
      song.pause();
      song2.play();
      heartImg.src = "./img/brokenHeart.png";
      question.innerText = "So you hate me?";
    }
  });

  spinWrapper.addEventListener("animationend", (e) => {
    if(e.animationName === "spinCard"){
      carousels.forEach(function (elem) {
        elem.style.display = "flex";
        elem.classList.add("slidesAppearAnimation");
      })

    }
  });




});
