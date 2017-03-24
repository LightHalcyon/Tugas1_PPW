var tmp;
var tmp2;
$.ajax({
    url: 'src/xml/profile.xml',
    dataType: 'html',
    success: function(xml) {
        tmp2 = xml;
    }
});
$.get("src/json/project.json", function(project) {
    tmp = project;
    for (i = 0; i < tmp.project.length; i++) {
        $('#projects').append("Judul: " + tmp.project[i].judul + "<br>Deskripsi: " + tmp.project[i].deskripsi + "<br>Mulai Sejak: " + tmp.project[i].bulan + "/" + tmp.project[i].tahun + "<br>Staff:");
        for (j = 0; j < tmp.project[i].staff.length; j++) {

            var id = tmp.project[i].staff[j].id;
            $(tmp2).find('anggota').each(function(k) {
                if (id == $(tmp2).find('id').eq(k).text()) {
                    $('#projects').append("<br>&ensp;" + $(tmp2).find('nama').eq(k).text());
                }
            });
        }
        $('#projects').append('<hr>');
    }
});