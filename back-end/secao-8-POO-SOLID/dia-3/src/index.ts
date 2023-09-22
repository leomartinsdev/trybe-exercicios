import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const clube = new Clube();
const quadraFut = new QuadraFutebol();

clube.adicionarQuadra(quadraFut);

const dataReserva = new Date('2022-12-28');

const reservarQuadraFut = clube.buscarQuadra<QuadraFutebol>(0).reservar(dataReserva);

console.log(reservarQuadraFut);