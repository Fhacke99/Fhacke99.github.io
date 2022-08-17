const options = {
    method: "GET"
  };
  
  // Petición HTTP
  fetch("https://japceibal.github.io/emercado-api/cats_products/101", options)
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML = "<h1>Hola</h1>"
    });