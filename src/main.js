import Swal from "sweetalert2";
import TypeIt from "typeit";
import { appConfig } from "./config.js";
import "./style.css";

// SweetAlert Mixins matching reference styling
const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: "#ea5455",
  imageHeight: 80,
  customClass: {
    popup: "rebuild-swal-popup"
  }
});

const swalst = Swal.mixin({
  timer: 2300,
  allowOutsideClick: false,
  showConfirmButton: false,
  timerProgressBar: true,
  imageHeight: 90,
  customClass: {
    popup: "rebuild-swal-popup"
  }
});

// App State
let visitorName = "";
let isInitialInteractionDone = false;
let particleInterval = null;
const audioObj = new Audio(appConfig.musicUrl);
audioObj.loop = true;

// Build DOM Structure
const app = document.querySelector("#app");
app.innerHTML = `
  <div id="bodyblur">
    <img id="wallpaper" src="${appConfig.assets.wallpaper}" alt="" />
  </div>
  <div id="beneranblur"></div>

  <button id="audioControl" class="audio-control" type="button" style="display:none" aria-label="Toggle Audio">🎵</button>

  <main id="Content">
    <button id="kadoIn" type="button" aria-label="${appConfig.copy.giftHint}">
      <img src="${appConfig.assets.gift}" alt="Kado" />
    </button>
    <p id="ket">${appConfig.copy.giftHint}</p>

    <div class="kumpulanstiker">
      <img id="fotostiker" src="${appConfig.assets.stickerDefault}" alt="Sticker" />
    </div>

    <p id="halo" class="halo"></p>

    <blockquote id="bq" data-text="♥">
      <p id="kalimat"></p>
      <p id="kalimatb"></p>
    </blockquote>

    <div id="Tombol">
      <a id="By" href="#">${appConfig.copy.replyButton}</a>
    </div>
  </main>
`;

// DOM Element References
const bodyblur = document.getElementById("bodyblur");
const wallpaper = document.getElementById("wallpaper");
const kadoIn = document.getElementById("kadoIn");
const ket = document.getElementById("ket");
const fotostiker = document.getElementById("fotostiker");
const halo = document.getElementById("halo");
const bq = document.getElementById("bq");
const kalimat = document.getElementById("kalimat");
const kalimatb = document.getElementById("kalimatb");
const Tombol = document.getElementById("Tombol");
const replyBtn = document.getElementById("By");
const audioBtn = document.getElementById("audioControl");
const contentEl = document.getElementById("Content");

// Audio handling
function setupAudio() {
  audioBtn.style.display = "flex";
  audioObj.play().then(() => {
    audioBtn.innerHTML = "🎵";
  }).catch(() => {
    // Autoplay blocked by browser policy
    audioBtn.innerHTML = "🔇";
  });

  audioBtn.addEventListener("click", () => {
    if (audioObj.paused) {
      audioObj.play();
      audioBtn.innerHTML = "🎵";
    } else {
      audioObj.pause();
      audioBtn.innerHTML = "🔇";
    }
  });
}

// Scene 1 -> Scene 2: Gift Click
kadoIn.addEventListener("click", () => {
  if (isInitialInteractionDone) return;
  isInitialInteractionDone = true;

  setupAudio();

  kadoIn.classList.add("animate-out");
  wallpaper.style.transform = "scale(1.5)";
  ket.style.display = "none";

  setTimeout(() => {
    kadoIn.style.display = "none";
    contentEl.style.marginTop = "2vh";
    bodyblur.style.opacity = "0.7";
  }, 300);

  setTimeout(promptVisitorName, 500);
});

// Scene 2: Name Input & Validation
async function promptVisitorName() {
  const { value: name } = await swals.fire({
    title: appConfig.copy.nameTitle,
    input: "text",
    inputPlaceholder: "Nama kamu...",
    allowOutsideClick: false
  });

  const trimmed = name ? name.trim() : "";
  if (trimmed && trimmed.length <= appConfig.maxNameLength) {
    visitorName = trimmed;
    await swalst.fire({
      title: appConfig.copy.greeting(visitorName),
      imageUrl: appConfig.assets.flower
    });
    promptChoice();
  } else {
    await swals.fire({
      title: "Ups!",
      text: appConfig.copy.nameError,
      icon: "warning"
    });
    promptVisitorName();
  }
}

// Scene 4: Choice Flow
async function promptChoice() {
  const choiceLeftText = appConfig.copy.leftChoice;
  const choiceRightText = appConfig.copy.rightChoice;

  const { isConfirmed: choseLeft } = await swals.fire({
    title: appConfig.copy.choiceTitle(visitorName),
    text: appConfig.copy.choiceText,
    imageUrl: appConfig.assets.brownPanda,
    showCancelButton: true,
    confirmButtonText: choiceLeftText,
    cancelButtonText: choiceRightText
  });

  if (choseLeft) {
    await swals.fire({
      title: "Yeayy!",
      text: `${appConfig.copy.resultLead} ${choiceLeftText} ${appConfig.copy.resultText}`,
      imageUrl: appConfig.assets.yellowPanda
    });

    const { isConfirmed: confirmedLeftChoice } = await swals.fire({
      title: appConfig.copy.confirmChoiceTitle(visitorName, choiceLeftText),
      text: appConfig.copy.confirmChoiceText,
      imageUrl: appConfig.assets.thinking,
      showCancelButton: true,
      confirmButtonText: appConfig.copy.confirmYes,
      cancelButtonText: appConfig.copy.confirmChange
    });

    if (confirmedLeftChoice) {
      await swals.fire({
        title: appConfig.copy.okTitle,
        text: appConfig.copy.continueText,
        imageUrl: appConfig.assets.cute
      });
      startMainScene();
    } else {
      await swals.fire({
        title: appConfig.copy.okChosenTitle(choiceRightText),
        text: appConfig.copy.changedChoiceText,
        imageUrl: appConfig.assets.yay
      });
      startMainScene();
    }
  } else {
    await swals.fire({
      title: "Yeayy!",
      text: `${appConfig.copy.resultLead} ${choiceRightText} ${appConfig.copy.resultText}`,
      imageUrl: appConfig.assets.yellowPanda
    });

    const { isConfirmed: confirmedRightChoice } = await swals.fire({
      title: appConfig.copy.confirmChoiceTitle(visitorName, choiceRightText),
      text: appConfig.copy.confirmChoiceText,
      imageUrl: appConfig.assets.thinking,
      showCancelButton: true,
      confirmButtonText: appConfig.copy.confirmChange,
      cancelButtonText: appConfig.copy.confirmYes
    });

    if (confirmedRightChoice) {
      await swals.fire({
        title: appConfig.copy.okChosenTitle(choiceLeftText),
        text: appConfig.copy.changedChoiceText,
        imageUrl: appConfig.assets.yay
      });
      startMainScene();
    } else {
      await swals.fire({
        title: appConfig.copy.okTitle,
        text: appConfig.copy.continueText,
        imageUrl: appConfig.assets.cute
      });
      startMainScene();
    }
  }
}

// Scene 5: Main Scene & Typing Sequences
function startMainScene() {
  bodyblur.style.opacity = "0.7";
  wallpaper.style.transform = "scale(1)";

  fotostiker.src = appConfig.assets.stickerDefault;
  fotostiker.classList.add("show");

  startParticles();
  typeGreeting();
}

function typeGreeting() {
  const greetingStr = appConfig.copy.greeting(visitorName);
  new TypeIt("#halo", {
    strings: [greetingStr],
    startDelay: 50,
    speed: 30,
    waitUntilVisible: true,
    afterComplete: () => {
      halo.innerHTML = greetingStr;
      setTimeout(showGlassCard, 200);
    }
  }).go();
}

function showGlassCard() {
  bq.classList.add("show-card");
  typeFirstLine();
}

function typeFirstLine() {
  new TypeIt("#kalimat", {
    strings: [appConfig.copy.mainMessage],
    startDelay: 400,
    speed: 50,
    cursor: false,
    deleteSpeed: 20,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: () => {
      setTimeout(typeSecondLine, 500);
    }
  }).go();
}

function typeSecondLine() {
  new TypeIt("#kalimatb", {
    strings: [appConfig.copy.secondaryMessage],
    startDelay: 1,
    speed: 50,
    cursor: false,
    deleteSpeed: 20,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: () => {
      showReplyButton();
    }
  }).go();
}

// Scene 6: Reply & WhatsApp Redirect
function showReplyButton() {
  wallpaper.style.transform = "scale(1)";
  Tombol.classList.add("show-button");
}

replyBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const whatsappMsg = appConfig.copy.whatsappMessage(visitorName);
  
  await swals.fire({
    title: appConfig.copy.whatsappIntro,
    text: appConfig.copy.whatsappNotice,
    icon: "success"
  });

  const cleanPhone = String(appConfig.whatsappNumber).replace(/\D/g, "");
  const targetUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(whatsappMsg)}`;
  window.location.href = targetUrl;
});

// Particles Generator with Capping & Tab Blur Handling
function createParticle() {
  if (document.hidden) return;

  const existingParticles = document.querySelectorAll(".snowflake-particle");
  if (existingParticles.length >= 100) {
    existingParticles[0].remove();
  }

  const particle = document.createElement("div");
  particle.className = "snowflake-particle";

  // Alternate between heart and snowflake symbols for romantic aesthetic
  const symbols = ["❄", "✨", "🤍", "❄"];
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  const startLeft = Math.random() * 95;
  const duration = Math.random() * 3 + 2.5;
  const size = Math.random() * 12 + 14;

  particle.style.left = `${startLeft}vw`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.fontSize = `${size}px`;

  particle.addEventListener("animationend", () => {
    particle.remove();
  });

  document.body.appendChild(particle);
}

function startParticles() {
  if (particleInterval) clearInterval(particleInterval);
  particleInterval = setInterval(createParticle, 350);
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden && particleInterval) {
    clearInterval(particleInterval);
    particleInterval = null;
  } else if (!document.hidden && isInitialInteractionDone && visitorName) {
    if (!particleInterval) {
      particleInterval = setInterval(createParticle, 350);
    }
  }
});
