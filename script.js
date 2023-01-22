const packets = [...document.querySelectorAll(".options h2")];
const isDesktop = window.innerWidth > 768 && window.innerHeight > 1024;

// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat
// Lol don't cheat

const hasPlayedBefore = document.cookie === "dontCheatLOL=true";
const answer = Math.floor(Math.random() * 2 + 1);
if (document.cookie) {
  document.body.innerHTML = "<h1>Try harder next year 🤭🤭</h1>";
} else {
  packets.forEach(packet =>
    packet.addEventListener("click", () => {
      document.cookie = "dontCheatLOL=true";
      if (+packet.dataset.angpau === answer) {
        window.location.href =
          "https://link.tngdigital.com.my/3BEHBtqrEVGWxUtA6";
        document.body.innerHTML = "<h1>Congratzzz 🤭🤭</h1>";
      } else {
        renderCat();
      }
    })
  );
}

function renderCat() {
  const bobby = document.querySelector(".show");
  bobby.style.display = "none";
  document.querySelector(".hidden").style.display = "block";
}
