document.addEventListener("DOMContentLoaded", function() {
  const tombolSapa = document.getElementById("sapaButton");

  if (tombolSapa) {
    tombolSapa.addEventListener("click", function() {
      alert("Halo! Terima kasih ya sudah mampir 😊");
    });
  }
});
