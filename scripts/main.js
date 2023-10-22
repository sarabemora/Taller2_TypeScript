import { dataSeries } from "./dataSeries.js";
import { Serie } from './Serie.js';

var dataSeries_js_1 = require("./dataSeries.js");
var seriesTbody = document.getElementById('series');
var promTemporadas = document.getElementById("promedio");
desplegarSeries(dataSeries);
promTemporadas.innerHTML = "".concat(getPromedioTemporadas(dataSeries));
function desplegarSeries(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.numero, "</td>\n                                <td><a class=\"active\" href=\"#\">").concat(c.nombre, "</a></td>\n                                <td>").concat(c.plataforma, "</td>\n                                <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener('click', function () {
            desplegarTarjeta(c);
            trElement.onclick = function () { return desplegarTarjeta(c); };
        });
    });
}
function getPromedioTemporadas(series) {
    var totalTemporadas = 0;
    var totalSeries = 0;
    series.forEach(function (c) {
        totalTemporadas += c.temporadas;
        totalSeries++;
    });
    var promedio = totalTemporadas / totalSeries;
    return promedio;
}
function desplegarTarjeta(series) {
    var tarjeta = document.getElementById("tarjeta");
    if (tarjeta) {
        tarjeta.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"".concat(series.link_serie, "\" alt=\"").concat(series.nombre, " picture\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(series.nombre, "</h5>\n          <p class=\"card-text\">").concat(series.descripcion, "</p>\n          <a href=\"").concat(series.link_plataforma, "\" class=\"card-link\">").concat(series.link_plataforma, "</a>\n        </div>\n      </div>");
    }
}
