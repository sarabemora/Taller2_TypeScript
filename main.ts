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
                                <td><a class="active" href="#">${c.nombre}</a></td>
                                <td>${c.plataforma}</td>
                                <td>${c.temporadas}</td>`;
        seriesTbody.appendChild(trElement);

        trElement.addEventListener('click', () => {
            desplegarTarjeta(c);
        trElement.onclick = () => desplegarTarjeta(c);
        
        });
    });
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

function desplegarTarjeta(series: Serie): void {
    const tarjeta: HTMLElement | null = document.getElementById("tarjeta");

    if (tarjeta) {
        tarjeta.innerHTML = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${series.link_serie}" alt="${series.nombre} picture">
        <div class="card-body">
          <h5 class="card-title">${series.nombre}</h5>
          <p class="card-text">${series.descripcion}</p>
          <a href="${series.link_plataforma}" class="card-link">${series.link_plataforma}</a>
        </div>
      </div>`
    }
    
}