const token = localStorage.getItem('token')

// Se token não tiver valor...
if (!token) {
  window.location.href = 'login.html'
}

document.getElementById('app').innerHTML = `
    <div id="container">
      <h1>Seja bem vind@!</h1>
      <img src="./public/ted.gif" alt="Gif">
      <a href="logout.html" id="logout">Clique aqui para sair</a>
    </div>
  `