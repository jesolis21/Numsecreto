// Función para generar un número secreto aleatorio entre 1 y 100
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  // Función principal para adivinar el número secreto
  function adivinarNumeroSecreto() {
    const numeroSecreto = generarNumeroSecreto();
    const numerosIngresados = [];
  
    let adivinado = false;
    let intentos = 0;
  
    while (!adivinado) {
      let numeroUsuario;
  
      do {
        const input = prompt('Intenta adivinar el número secreto (del 1 al 100):');
        numeroUsuario = parseInt(input);
  
        if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
          alert('Por favor, introduce un número válido entre 1 y 100.');
        }
      } while (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100);
  
      numerosIngresados.push(numeroUsuario);
      intentos++;
  
      if (numeroUsuario === numeroSecreto) {
        adivinado = true;
        alert('¡Felicidades, adivinaste el número secreto!');
      } else {
        alert('Ups, el número secreto es incorrecto, vuelve a intentarlo.');
      }
    }
  
    console.log(`Número secreto: ${numeroSecreto}`);
    console.log(`Lista de números introducidos: ${numerosIngresados.join(', ')}`);
    console.log(`Número de intentos: ${intentos}`);
  }
  
  // Llamar a la función principal
  adivinarNumeroSecreto();
  