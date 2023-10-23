import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
var promTemporadas = document.getElementById("promedio");
var cardBody = document.getElementById('id');
desplegarSeries(dataSeries);
promTemporadas.innerHTML = "".concat(getPromedioTemporadas(dataSeries));
function desplegarSeries(series) {
    series.forEach(function (c) {
        var _a;
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.numero, "</td>\n                                <td class=\"desplegar\"><a href=\"#\">").concat(c.nombre, "</a></td>\n                                <td>").concat(c.plataforma, "</td>\n                                <td>").concat(c.temporadas, "</td>");
        (_a = trElement.querySelector('.desplegar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return desplegarCard(c); });
        seriesTbody.appendChild(trElement);
    });
}
function desplegarCard(serie) {
    var cardElement = document.querySelector('#cartas');
    cardElement.innerHTML = "<div class=\"card\" style=\"width: 20rem;\">\n                            <img class=\"card-img-top\" src=\"./imagenes/".concat(serie.nombre, ".jpg\" alt=\"").concat(serie.nombre, "\">\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\">").concat(serie.nombre, "</h5>\n                                <p class=\"card-text\">").concat(serie.descripcion, "</p>\n                                <a href=\"").concat(serie.link_plataforma, "\">").concat(serie.link_plataforma, "</a>\n                            </div>\n                            </div>");
    cardBody.appendChild(cardElement);
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
