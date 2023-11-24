const listaUsuarios = document.getElementById('listaUsuarios');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(usuario => {
      const edadAleatoria = Math.floor(Math.random() * (65 - 18 + 1)) + 18;

      const usuarioConEdadEImagen = {
        ...usuario,
        age: edadAleatoria,
        img: `./assets/img/${usuario.id}.jpeg`,
        address: `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`
      };

      const usuarioElemento = document.createElement('div');
      usuarioElemento.classList.add('persona'); 
      usuarioElemento.innerHTML = `
        <img src="${usuarioConEdadEImagen.img}" alt="${usuarioConEdadEImagen.name}" class="foto">
        <div class="datos">
          <p><strong>${usuarioConEdadEImagen.name}</strong></p>
          <p><strong>Edad:</strong> ${usuarioConEdadEImagen.age}</p>
          <p><strong>Username:</strong> ${usuarioConEdadEImagen.username}</p>
          <p><strong>Teléfono:</strong> ${usuarioConEdadEImagen.phone}</p>
          <p><strong>Email:</strong> ${usuarioConEdadEImagen.email}</p>
          <p><strong>Compañia:</strong> ${usuarioConEdadEImagen.company.name}</p>
          <p><strong>Dirección:</strong> ${usuarioConEdadEImagen.address}</p>
        </div>
      `;

      listaUsuarios.appendChild(usuarioElemento);
    });
  })
  .catch(error => console.error('Error al obtener datos de usuarios:', error));
