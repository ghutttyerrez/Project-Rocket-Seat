function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag da imagem
  const img = document.querySelector("#profile img");
  // Verifica se a classe "light" está presente
  // Se sim, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    // Se não, mantem a imagem
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }
}
