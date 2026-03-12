export default function ejercicio4() {
  const jugadores = [
    { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
    { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];
console.log(estadisticas(jugadores));
function estadisticas(jugadores) {
    try {
        //Validar estructura
        if (!Array.isArray(jugadores) || jugadores.length === 0) {
            throw new Error("La lista de jugadores no es válida");
        }
        jugadores.forEach(j => {
        if (!j.nombre || !j.stats || typeof j.stats.puntos !== "number") {
            throw new Error("Estructura de jugador inválida");
        }
        });
        // Destructuración profunda del primer jugador
        const [{ stats: { puntos: puntosPrimerJugador } }] = jugadores;
        //Crear lista inmutable de jugadores
        const jugadoresProcesados = jugadores.map(j => ({ ...j }));
        //Calcular puntos totales (sin mutar)
        const puntosTotales = jugadores.reduce(
        (total, jugador) => total + jugador.stats.puntos,0
        );
        // Retornar informe
        return {
        puntosPrimerJugador: puntosPrimerJugador,
        puntosTotalesEquipo: puntosTotales,
        jugadoresProcesados: jugadoresProcesados
        };
    } catch (error) {
        return {
        error: true,
        mensaje: error.message
        };
    }
}



}
