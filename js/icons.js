var B1 = L.icon({
    iconUrl: 'icons/B1.png',
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

var B2 = L.icon({
    iconUrl: 'icons/B2.png',
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

var B3 = L.icon({
    iconUrl: 'icons/B3.png',
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

var B4 = L.icon({
    iconUrl: 'icons/B4.png',
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

var B5 = L.icon({
    iconUrl: 'icons/B5.png',
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

var B6 = L.icon({
    iconUrl: 'icons/B6.png',
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

var B7 = L.icon({
    iconUrl: 'icons/B7.png',
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

var B8 = L.icon({
    iconUrl: 'icons/B8.png',
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

function onMapClick(e) {
    if (counter <= 8) {
        if (counter == 1) {
            var marker = L.marker(e.latlng, {icon: B1})
            .bindPopup("<b>Waypoint </b> B" + counter.toString() + " <b>at</b> " + e.latlng)
            .addTo(waypoints);
        } else if (counter == 2) {
            var marker = L.marker(e.latlng, {icon: B2})
            .bindPopup("<b>Waypoint </b> B" + counter.toString() + " <b>at</b> " + e.latlng)
            .addTo(waypoints);
        } else if (counter == 3) {
            var marker = L.marker(e.latlng, {icon: B3})
            .bindPopup("<b>Waypoint </b> B" + counter.toString() + " <b>at</b> " + e.latlng)
            .addTo(waypoints);
        } else if (counter == 2) {
            var marker = L.marker(e.latlng, {icon: B3})
            .bindPopup("<b>Waypoint </b> B" + counter.toString() + " <b>at</b> " + e.latlng)
            .addTo(waypoints);
        } else if (counter == 4) {
            var marker = L.marker(e.latlng, {icon: B4})
            .bindPopup("<b>Waypoint </b> B" + counter.toString() + " <b>at</b> " + e.latlng)
            .addTo(waypoints);
        } else if (counter == 5) {
            var marker = L.marker(e.latlng, {icon: B5})
            .bindPopup("<b>Waypoint </b> B" + counter.toString() + " <b>at</b> " + e.latlng)
            .addTo(waypoints);
        } else if (counter == 6) {
            var marker = L.marker(e.latlng, {icon: B6})
            .bindPopup("<b>Waypoint </b> B" + counter.toString() + " <b>at</b> " + e.latlng)
            .addTo(waypoints);
        } else if (counter == 7) {
            var marker = L.marker(e.latlng, {icon: B7})
            .bindPopup("<b>Waypoint </b> B" + counter.toString() + " <b>at</b> " + e.latlng)
            .addTo(waypoints);
        } else if (counter == 8) {
            var marker = L.marker(e.latlng, {icon: B8})
            .bindPopup("<b>Waypoint </b> B" + counter.toString() + " <b>at</b> " + e.latlng)
            .addTo(waypoints);
        }






        if (lastcoords.length == 2) {
            lastcoords.shift()
        };
        if (lastcoords.length != 0) {
            lastcoords.push(e.latlng);
            var firstpolyline = new L.Polyline(lastcoords, {
                color: 'red',
                weight: 3,
                opacity: 0.5,
                smoothFactor: 1
            });
            firstpolyline.addTo(waypoints);
        } else {
            lastcoords.push(e.latlng);
        };
        dataArray.push("[B" + counter.toString() + "]"); //ID
        dataArray.push("latitude = " + e.latlng.lat.toString()); //lat
        dataArray.push("latitudeminutes = 0"); //latmin
        dataArray.push("latitudeseconds = 0"); //latsec
        dataArray.push("longitude = " + e.latlng.lng.toString()); //long
        dataArray.push("longitudeminutes = 0"); //longmin
        dataArray.push("longitudeseconds = 0"); //longsec
        dataArray.push("missiontime = 0"); //mistime
        dataArray.push("velocity = 0"); //velocity
        dataArray.push("etalocked = false"); //etalock
        dataArray.push("velocitylocked = false"); //vellock
        dataArray.push("istargetpoint = false"); //target?
        dataArray.push(""); //newline

        counter = counter + 1;
    } else {
        alert("Max limit reached!");
    };
};
