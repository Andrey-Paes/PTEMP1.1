// Links
document.getElementById("btnWeb").onclick = () =>
  (window.location.href = "https://andrey-paes.github.io/Atualizacao/")

document.getElementById("btnApk").onclick = () =>
  (window.location.href =
    "https://github.com/Andrey-Paes/Atualizacao/releases/download/V1.1/PTEMP-VersaoFinal.apk")

// Parallax das imagens laterais
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX - window.innerWidth / 2) / 40

  document.querySelector(
    ".left-img"
  ).style.transform = `translateY(-50%) translateX(${x}px)`

  document.querySelector(
    ".right-img"
  ).style.transform = `translateY(-50%) translateX(${x * -1}px)`
})

// Partículas de luz
const particles = document.getElementById("particles")

for (let i = 0; i < 35; i++) {
  const star = document.createElement("div")
  star.className = "particle"

  star.style.left = Math.random() * 100 + "vw"
  star.style.top = Math.random() * 100 + "vh"
  star.style.animationDuration = 4 + Math.random() * 6 + "s"

  particles.appendChild(star)
}
