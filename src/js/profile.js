$.ajax({
    url: 'src/xml/profile.xml',
    dataType: 'html',
    success: function(xml) {
        $('#profil').append($(xml).find('profillengkap').text());
        $(xml).find('anggota').each(function(i) {
            $('#staff').append('Nama: ' + $(xml).find('nama').eq(i).text() + '<br>Email: ' + $(xml).find('email').eq(i).text() + '<br><br>');
        });
    }
});