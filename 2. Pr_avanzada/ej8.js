document.getElementById("url").textContent = "URL: " + window.location.href;
document.getElementById("pathname").textContent = "PATHNAME: " + window.location.pathname;
document.getElementById("protocolo").textContent = "PROTOCOLO: " + window.location.protocol;

function google(){
  window.location.href = "https://www.google.com/search?q=";
}
