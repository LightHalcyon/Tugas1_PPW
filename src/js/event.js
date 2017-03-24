$.get("src/json/event.json", function(event) {
    var tmp = event;
    for (var i = 0; i < tmp.event.length; i++) {
        $('#event').append('<h2>' + tmp.event[i].judul + '</h2>');
        $('#event').append('<p>Tempat: ' + tmp.event[i].tempat + '<br>Tanggal: ' + tmp.event[i].tanggal + '<br>Pembicara: ' + tmp.event[i].pembicara + '</p>');
    }
});