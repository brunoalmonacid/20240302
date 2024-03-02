
// Se cuenta con el siguiente array

const estudiantes = [
    { 
        nombre: 'Juan',
       dni:'12345678',
        edad: 20,
        cursos: ['Matemáticas', 'Física'],
        direccion: {
            calle: 'Calle 123',
            ciudad: 'Ciudad A',
            pais: 'País X'
        }
    },
    { 
        nombre: 'María',
        dni:'22222222',
        edad: 22,
        cursos: ['Química', 'Biología'],
        direccion: {
            calle: 'Calle 456',
            ciudad: 'Ciudad B',
            pais: 'País Y'
        }
    },
    { 
        nombre: 'Carlos',
        dni:'87654321',
        edad: 21,
        cursos: ['Historia', 'Geografía'],
        direccion: {
            calle: 'Calle 789',
            ciudad: 'Ciudad C',
            pais: 'País Z'
        }
    }
];

// Consignas

/*
1. Contar Cursos:

Escribe una función llamada contarCursos que tome un nombre de estudiante como argumento y devuelva el número de cursos que está tomando ese estudiante. Si el estudiante no existe, devuelve -1.
*/
/*

2. Listar Estudiantes por Ciudad:

Escribe una función llamada estudiantesPorCiudad que tome el nombre de una ciudad como argumento y devuelva un array con los nombres de los estudiantes que viven en esa ciudad.
*/
/*
3. Verificar Existencia de Curso:

Escribe una función llamada existeCurso que tome un nombre de curso como argumento y devuelva true si al menos un estudiante está tomando ese curso, o false en caso contrario.
*/
/*
4. Obtener Dirección:

Escribe una función llamada obtenerDireccion que tome el nombre de un estudiante como argumento y devuelva un objeto con la dirección completa del estudiante (calle, ciudad y país).
*/


function contarCursos(dniEstudiante) {
    const estudiante = estudiantes.find(estudiante => estudiante.dni === dniEstudiante);
    return estudiante ? estudiante.cursos.length : -1;
}
console.log(contarCursos('12345678'))

function estudiantesPorCiudad(ciudad) {
    return estudiantes.filter(est => est.direccion.ciudad === ciudad).map(est => est.nombre);
}
console.log(estudiantesPorCiudad('Ciudad B'))

function existeCurso(nombreCurso) {
    return estudiantes.some(est => est.cursos.includes(nombreCurso));
}
console.log(existeCurso('Historia'))

function obtenerDireccionPorDNI(dniEstudiante) {
    const estudiante = estudiantes.find(est => est.dni === dniEstudiante);
    return estudiante ? estudiante.direccion : null;
}

console.log(obtenerDireccionPorDNI('12345678'))

function agregarCursosPorDNI(dni, cursos) {
    const estudiante = estudiantes.find(est => est.dni === dni);
    if (estudiante) {
        estudiante.cursos.push(cursos);
        console.log(`Curso agregado con éxito para el estudiante con DNI: ${dni}`);
    } else {
        console.log(`Estudiante con DNI: ${dni} no encontrado`);
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const formContarCursos = document.getElementById('formContarCursos');
    const resultContarCursos = document.getElementById('resultContarCursos');
    formContarCursos.addEventListener('submit', function(event) {
        event.preventDefault();
        const dniEstudiante = document.getElementById('dniEstudiante').value;
        const result = contarCursos(dniEstudiante);
        resultContarCursos.textContent = `Número de cursos: ${result}`;
    })
    });
   

    const formEstudiantesPorCiudad = document.getElementById('formEstudiantesPorCiudad');
    const resultEstudiantesPorCiudad = document.getElementById('resultEstudiantesPorCiudad');
    formEstudiantesPorCiudad.addEventListener('submit', function(event) {
        event.preventDefault();
        const ciudad = document.getElementById('ciudad').value;
        const result = estudiantesPorCiudad(ciudad);
        resultEstudiantesPorCiudad.textContent = `Estudiantes en la ciudad: ${result.join(', ')}`;
    });

    const formExisteCurso = document.getElementById('formExisteCurso');
    const resultExisteCurso = document.getElementById('resultExisteCurso');
    formExisteCurso.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombreCurso = document.getElementById('nombreCurso').value;
        const result = existeCurso(nombreCurso);
        resultExisteCurso.textContent = result ? 'true' : 'false';
    })
    ;

    const formObtenerDireccionPorDNI = document.getElementById('formObtenerDireccionPorDNI');
    const resultObtenerDireccionPorDNI = document.getElementById('resultObtenerDireccionPorDNI');
    formObtenerDireccionPorDNI.addEventListener('submit', function(event) {
        event.preventDefault();
        const dniEstudianteDireccion = document.getElementById('dniEstudianteDireccion').value;
        const result = obtenerDireccionPorDNI(dniEstudianteDireccion);
        resultObtenerDireccionPorDNI.textContent = result ? `Dirección: ${JSON.stringify(result)}` : 'Estudiante no encontrado';
    });

    const formAgregarCursosPorDNI = document.getElementById('formAgregarCursosPorDNI');
    const resultAgregarCursosPorDNI = document.getElementById('resultAgregarCursosPorDNI');
    formAgregarCursosPorDNI.addEventListener('submit', function(event){
        event.preventDefault();
        const dniEstudianteAgregar = document.getElementById('dniEstudianteAgregar').value;
        const result = agregarCursosPorDNI(dniEstudianteAgregar);
        resultAgregarCursosPorDNI.textContent = result ? '':'curso agregado con exito';
        })
    