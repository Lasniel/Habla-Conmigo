// --- Modo oscuro ---
document.getElementById("oscuro").addEventListener("change", function() {
    if (this.checked) {
      document.body.style.backgroundColor = "#212121";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#f1f8e9";
      document.body.style.color = "#000000";
    }
  });
  
  // --- Tamaño de letra ---
  document.getElementById("tamano-letra").addEventListener("change", function() {
    document.body.style.fontSize = this.value;
  });
  
  // --- Idioma ---
  document.getElementById("idioma").addEventListener("change", function() {
    const idiomaSeleccionado = this.options[this.selectedIndex].text;
    alert("Idioma cambiado a: " + idiomaSeleccionado);
    // Aquí podrías cargar traducciones dinámicas según el idioma
  });
  
  // --- Velocidad de audio ---
  const velocidad = document.getElementById("velocidad-audio");
  const valorVelocidad = document.getElementById("valor-velocidad");
  
  velocidad.addEventListener("input", function() {
    valorVelocidad.textContent = this.value + "x";
    // Ejemplo: aplicar velocidad a un audio de prueba
    const audio = document.querySelector("audio");
    if (audio) {
      audio.playbackRate = parseFloat(this.value);
    }
  });
  