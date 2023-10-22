import { Serie } from "./Serie.js";
import { dataSeries } from "./dataSeries.js";

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promTemporadas: HTMLElement = document.getElementById("promedio")!;

desplegarSeries(dataSeries);
promTemporadas.innerHTML = `${getPromedioTemporadas(dataSeries)}`;


function desplegarSeries(series: Serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.numero}</td>
                                <td>${c.nombre}</td>
                                <td>${c.plataforma}</td>
                                <td>${c.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    })
}

function getPromedioTemporadas(series: Serie[]): number {
    let totalTemporadas = 0;
    let totalSeries = 0;

    series.forEach(c => {
        totalTemporadas += c.temporadas;
        totalSeries++;
    });

    const promedio = totalTemporadas / totalSeries;

    return promedio;
}