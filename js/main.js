function darkmode() {
    var element = document.body;
    var element2 = document.jumbotron;
    var element3 = document.iletisim;
    var element4 = document.projelerim;
    element.classList.toggle("darkmode");
    element2.classList.toggle("darkmode");
    element3.classList.toggle("darkmode");
    element4.classList.toggle("darkmode");
}


function girisyap() {
    var username = document.getElementById("kullanici").value;
    var password = document.getElementById("sifre").value;
    var form=document.getElementById("loginform");
    if (username == "ugur" && password == "12345") {
        alert("Giriş Başarılı. Yönlendiriliyorsunuz..");
        form.action="anasayfa.html";
    } else {
        alert("Kullanıcı Adı veya Şifre Yanlış");
		form.action="index.html";
    }
}


