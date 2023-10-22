import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
var promTemporadas = document.getElementById("promedio");
desplegarSeries(dataSeries);
promTemporadas.innerHTML = "".concat(getPromedioTemporadas(dataSeries));
function desplegarSeries(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.numero, "</td>\n                                <td>").concat(c.nombre, "</td>\n                                <td>").concat(c.plataforma, "</td>\n                                <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
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
