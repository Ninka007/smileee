const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      color:white;
      text-align:center;
      font-size:28px;
      padding:40px;">
      <h1>Distance means nothing ❤️</h1>
      <p>
        Because love like ours is stronger than miles 🥹💘<br><br>
        Happy early Valentine’s Day, my love 🌹
      </p>
    </div>
  `;
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.top = Math.random() * 80 + "vh";
  noBtn.style.left = Math.random() * 80 + "vw";
});