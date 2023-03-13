var gMaps;    // Mapa Google Maps
var gMarkIr;    // Marcador Institut
var gMarkDnk;
var gMarkCz;
var gMarkSb;

// Crear mapa Google Maps
function crearMapa() {
    gMaps = new google.maps.Map(
        document.getElementById('mapa'),    // Element on dibuixar el mapa
        {
            center: {lat: 52.519325, lng: 13.392709},    // Latitut i longitut del centre del mapa
            zoom: 4                                      // Ampliació
        });
    // gMaps.addListener("click", (e)=>{

    //     console.log(e.latLng.lat());
    // });
    marcarCiutats();
}

// Crear marcador de Google Maps
function crearMarcador(latitut, longitut, text) {
    return new google.maps.Marker(
        {
            position: {lat: latitut, lng: longitut},    // Latitut i longitut
            title: text                                    // Text del "tooltip"
        });
}

// Posar el marcador de l'institut en el mapa
function marcarCiutats() {
    // Esborrar marcador (si ja estava posat)
    if (gMarkIr != null) gMarkIr.setMap(null);
    if (gMarkDnk != null) gMarkDnk.setMap(null);
    if (gMarkCz != null) gMarkCz.setMap(null);
    if (gMarkSb != null) gMarkSb.setMap(null);
    // Crear marcadors
    gMarkIr = crearMarcador(53.350140, -6.266155, "Dublin, Irlanda");
    gMarkDnk = crearMarcador(55.676098, 12.568337, "Copenhaguen, Dinamarca");
    gMarkCz = crearMarcador( 50.073658, 14.418540, "Praga, República Txeca");
    gMarkSb = crearMarcador(44.787197, 20.457273, "Belgrad, Sèrbia");
    // Situar-los en el mapa
    gMarkIr.setMap(gMaps);
    gMarkDnk.setMap(gMaps);
    gMarkCz.setMap(gMaps);
    gMarkSb.setMap(gMaps);
}

window.crearMapa = crearMapa;   // Necessari si s'utilitzen mòduls
