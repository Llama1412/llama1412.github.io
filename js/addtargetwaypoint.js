function addTargetWaypoint(lat, long, counter) {
    console.log(counter);
    if (counter <= 8) {
        if (counter == 1) {
            var marker = L.marker([lat, long], {
                    icon: B1
                })
                .bindPopup("Waypoint <b>M" + counter.toString() + "</b> at <b>" + lat.toString() + long.toString() + "</b>")
                .addTo(waypoints);
        } else if (counter == 2) {
            var marker = L.marker([lat, long], {
                    icon: B2
                })
                .bindPopup("Waypoint <b>M" + counter.toString() + "</b> at <b>" + lat.toString() + long.toString() + "</b>")
                .addTo(waypoints);
        } else if (counter == 3) {
            var marker = L.marker([lat, long], {
                    icon: B3
                })
                .bindPopup("Waypoint <b>M" + counter.toString() + "</b> at <b>" + lat.toString() + long.toString() + "</b>")
                .addTo(waypoints);
        } else if (counter == 2) {
            var marker = L.marker([lat, long], {
                    icon: B3
                })
                .bindPopup("Waypoint <b>M" + counter.toString() + "</b> at <b>" + lat.toString() + long.toString() + "</b>")
                .addTo(waypoints);
        } else if (counter == 4) {
            var marker = L.marker([lat, long], {
                    icon: B4
                })
                .bindPopup("Waypoint <b>M" + counter.toString() + "</b> at <b>" + lat.toString() + long.toString() + "</b>")
                .addTo(waypoints);
        } else if (counter == 5) {
            var marker = L.marker([lat, long], {
                    icon: B5
                })
                .bindPopup("Waypoint <b>M" + counter.toString() + "</b> at <b>" + lat.toString() + long.toString() + "</b>")
                .addTo(waypoints);
        } else if (counter == 6) {
            var marker = L.marker([lat, long], {
                    icon: B6
                })
                .bindPopup("Waypoint <b>M" + counter.toString() + "</b> at <b>" + lat.toString() + long.toString() + "</b>")
                .addTo(waypoints);
        } else if (counter == 7) {
            var marker = L.marker([lat, long], {
                    icon: B7
                })
                .bindPopup("Waypoint <b>M" + counter.toString() + "</b> at <b>" + lat.toString() + long.toString() + "</b>")
                .addTo(waypoints);
        } else if (counter == 8) {
            var marker = L.marker([lat, long], {
                    icon: B8
                })
                .bindPopup("Waypoint <b>M" + counter.toString() + "</b> at <b>" + lat.toString() + long.toString() + "</b>")
                .addTo(waypoints);
        }

        if (lastcoords.length == 2) {
            lastcoords.shift()
        };
        if (lastcoords.length != 0) {
            lastcoords.push([lat, long]);
            var firstpolyline = new L.Polyline(lastcoords, {
                color: 'red',
                weight: 3,
                opacity: 0.5,
                smoothFactor: 1
            });
            firstpolyline.addTo(waypoints);
        } else {
            lastcoords.push([lat, long]);
        };
        dataArray.push("[B" + counter.toString() + "]"); //ID
        dataArray.push("latitude = " + lat.toString()); //lat
        dataArray.push("latitudeminutes = 0"); //latmin
        dataArray.push("latitudeseconds = 0"); //latsec
        dataArray.push("longitude = " + long.toString()); //long
        dataArray.push("longitudeminutes = 0"); //longmin
        dataArray.push("longitudeseconds = 0"); //longsec
        dataArray.push("missiontime = 0"); //mistime
        dataArray.push("velocity = 0"); //velocity
        dataArray.push("etalocked = false"); //etalock
        dataArray.push("velocitylocked = false"); //vellock
        dataArray.push("istargetpoint = true"); //target?
        dataArray.push(""); //newline

        counter = counter + 1;
    } else {
        alert("Max limit reached!");
    };
};