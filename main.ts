import { Serie } from "./Serie.js";
import { dataSeries } from "./dataSeries.js";

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promTemporadas: HTMLElement = document.getElementById("promedio")!;
let cardBody: HTMLElement = document.getElementById('id')!;

desplegarSeries(dataSeries);
promTemporadas.innerHTML = `${getPromedioTemporadas(dataSeries)}`;


function desplegarSeries(series: Serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.numero}</td>
                                <td class="desplegar"><a href="#">${c.nombre}</a></td>
                                <td>${c.plataforma}</td>
                                <td>${c.temporadas}</td>`;

        trElement.querySelector('.desplegar')?.addEventListener('click', () => desplegarCard(c))
        seriesTbody.appendChild(trElement);
    })
}

function desplegarCard(serie: Serie): void {
    const cardElement: HTMLElement | null = document.querySelector('#cartas')!;
    cardElement.innerHTML = `<div class="card" style="width: 20rem;">
                            <img class="card-img-top" src="./imagenes/${serie.nombre}.jpg" alt="${serie.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${serie.nombre}</h5>
                                <p class="card-text">${serie.descripcion}</p>
                                <a href="${serie.link_plataforma}">${serie.link_plataforma}</a>
                            </div>
                            </div>`;
    cardBody.appendChild(cardElement);
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