const prompts = require('prompts');
const bcrypt = require('bcrypt');

const run = async () => {
    // Hash de la contraseña original.
    const hash = await bcrypt.hash('123456', 10); 

    const contrasena = await prompts({
        type: 'text',
        name: 'value',
        message: '¿Cuál es la contraseña?',
    });

    const resultado = await bcrypt.compare(contrasena.value, hash)

    if (resultado === true) {
        console.log('¡Correcto!');
    } else {
        console.log('Contraseña incorrecta');
    }
}

run();