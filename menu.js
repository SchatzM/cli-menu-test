'use strict';
const   chalk = require('chalk'),
        figlet = require('figlet'),
        inquirer = require('inquirer'),
        clear = require('clear'),
        puts = require('util').puts;

// Genera el título estilizado usando figlet y el menú principal a continuación.
function menú(){
    // Opciones del menú principal.
    let ops = ['Una', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis'];
    
    //Limpia el terminal antes de mostrar lo generado
    clear();

    // Genera el título estilizado y el menú principal.
    figlet('Awa Papawa', function(err, data) {
        
        // Si falla la generación del título, muestra un error en consola.
        if (err) {
            console.error('Something went wrong...');
            console.dir(err);
            return
        }

        // En caso de no haber fallos muestra el título
        console.info(data);

        // Genera el menú principal
        inquirer.prompt([
            {
                type: 'list',
                name: 'opción',
                message: 'Elige una opción:',
                choices: ops,
                filter: function(val) {
                    return ops.indexOf(val)
                }
            }
        ]).then(answers => {

            // Alternativa a switch().
            let opciones = {
                    0:  function(){

                        // Abre un submenú.
                        subMenú()
                    },
                    1:  function(){
                        menú()
                    },
                    2:  function(){
                        menú()
                    },
                    3:  function(){
                        menú()
                    },
                    4:  function(){
                        menú()
                    }
                };
            try {
                return opciones[answers.opción]()
            } catch(err) {
                return console.error('Opción no válida.')
            }
        });
    });
}

// Genera un menú diferente al principal.
function subMenú(){
    let ops = ['A', 'B', 'C', 'D', 'E', 'F'];
    clear();
    figlet('Awa Papawa', function(err, data) {
        if (err) {
            console.error('Something went wrong...');
            console.dir(err);
            return;
        }
        console.info(data)
        inquirer.prompt([
            {
                type: 'list',
                name: 'opción',
                message: 'Submenú - Elige una opción:',
                choices: ops,
                filter: function(val) {
                    return ops.indexOf(val)
                }
            }
        ]).then(answers => {
            let opciones = {
                    0:  function(){
                        console.info('Has seleccionado: A\nVolviendo al menú anterior...');
                        setTimeout(subMenú, 1500);
                    },
                    1:  function(){
                        subMenú()
                    },
                    2:  function(){
                        subMenú()
                    },
                    3:  function(){
                        subMenú()
                    },
                    4:  function(){
                        subMenú()
                    }
                };
            try {
                return opciones[answers.opción]()
            } catch(err) {
                return console.error('Opción no válida.')
            }
        });
    });
}

// Llamada a la función que genera título y menú principal.
menú();