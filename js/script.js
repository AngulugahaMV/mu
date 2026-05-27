// Responsive mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("show");
  }
}

// Dynamic Theme Switching system
function setTheme(themeName) {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('.theme-btn');
  
  // Clean active states across buttons
  buttons.forEach(btn => btn.classList.remove('active'));
  
  if (themeName === 'school') {
    root.removeAttribute('data-theme');
    if (buttons[0]) buttons[0].classList.add('active');
  } else if (themeName === 'light') {
    root.setAttribute('data-theme', 'light');
    if (buttons[1]) buttons[1].classList.add('active');
  } else if (themeName === 'dark') {
    root.setAttribute('data-theme', 'dark');
    if (buttons[2]) buttons[2].classList.add('active');
  }
}

// Skills section entry animations via IntersectionObserver
const fills = document.querySelectorAll(".fill");
const skillsSection = document.querySelector("#skills");

if (skillsSection && fills.length > 0) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fills.forEach(f => {
          const targetedWidth = f.getAttribute("data");
          if (targetedWidth) {
            f.style.width = targetedWidth;
          }
        });
      }
    });
  });
  observer.observe(skillsSection);
}

// Back-to-top layout handling
window.onscroll = () => {
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
  }
};

function scrollTopBtn() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ================= UNIVERSAL PASSWORD SYSTEM =================

const universalPassword = "amvmu2026";

// OPEN POPUP ON CLICK
document.querySelector(".btn").addEventListener("click", function(e){
  e.preventDefault();
  document.getElementById("passwordPopup").style.display = "flex";
});

// CLOSE POPUP
function closePopup(){
  document.getElementById("passwordPopup").style.display = "none";
}

// CHECK PASSWORD
function checkPassword(){

  const input = document.getElementById("passwordInput").value;
  const box = document.getElementById("glassBox");

  if(input === universalPassword){

    const filePath = document.querySelector(".btn").getAttribute("data-id");
    const a = document.createElement("a");
    a.href = filePath;
    a.download = "Digital-ID.pdf";
    a.click();

    closePopup();

  } else {

    // ❌ SHAKE EFFECT
    box.classList.remove("shake");
    void box.offsetWidth; // restart animation
    box.classList.add("shake");

  }
}

// ✅ Enter key triggers password check
document.getElementById("passwordInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") checkPassword();
});

//LOADER

const words = ["Rise", "Lead", "Create", "Build", "Inspire"];
let i = 0;

window.addEventListener("DOMContentLoaded", () => {

  const el = document.getElementById("word");
  const loader = document.getElementById("loader");

  if (!el) return;

  function animateWord() {
    // start fade
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";

    setTimeout(() => {
      i = (i + 1) % words.length;
      el.textContent = words[i];

      // fade back in
      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";
    }, 200);
  }

  // smooth loop
  setInterval(animateWord, 1200);

  // loader hide
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.transition = "0.8s ease";

      setTimeout(() => {
        loader.style.display = "none";
      }, 800);
    }
  }, 3000);

});