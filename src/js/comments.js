document.getElementById("komentar").innerHTML = localStorage.comments;

$(document).ready(function() {
    $('#kirim').click(function() {
        var comment = $("#boxcomment").val(); 
        var uname = $("#boxuname").val();

        var date = new Date();
        var month = date.getMonth() + 1;
        var min = date.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }

        if (typeof(Storage) !== "undefined") {               
            localStorage.comments += '<p>' + date.getDate() + '/' + month + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + min + ' WIB ' + uname + ':' + comment + '</p>';
            document.getElementById("komentar").innerHTML = localStorage.comments;                              
            return false;
        }
    })
});