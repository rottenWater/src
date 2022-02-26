function validate1() {
    
    var username = document.getElementById("userName");
    var vUsername = document.getElementById("valUserName");

    var password = document.getElementById('password');
    var vPassword = document.getElementById("valPassword");

    var ulangiPassword = document.getElementById('ulangiPassword');
    var vUlangiPassword = document.getElementById('valUlangiPassword');

    var namaIdentitas = document.getElementById('namaIdentitas');
    var vNamaIdentitas = document.getElementById('valNamaIdentitas');

    var namaIjazah = document.getElementById('namaIjazah');
    var vNamaIjazah = document.getElementById('valNamaIjazah');

    var jenisIdentitas = document.getElementById('jenisIdentitas');
    var vJenisIdentitas = document.getElementById('valJenisIdentitas');

    var nomorIdenttias = document.getElementById('nomorIdentitas');
    var vnNomorIdentitas = document.getElementById('valNomorIdentitas');

    var wargaNegara = document.getElementById('wargaNegara');
    var vWargaNegara = document.getElementById('valWargaNegara');


    if (username.value == "") {
        vUsername.style.display = 'block'
    } else {
        vUsername.style.display = 'none'
    }

    if (password.value == "") {
        vPassword.style.display = 'block'
    } else {
        vPassword.style.display = 'none'
    }

    if (ulangiPassword.value == "") {
        vUlangiPassword.style.display = 'block'
    } else {
        vUlangiPassword.style.display = 'none'
    }

    if (namaIdentitas.value == "") {
        vNamaIdentitas.style.display = 'block'
    } else {
        vNamaIdentitas.style.display = 'none'
    }

    if (namaIjazah.value == "") {
        vNamaIjazah.style.display = 'block'
    } else {
        vNamaIjazah.style.display = 'none'
    }

    if (jenisIdentitas.value == "") {
        vJenisIdentitas.style.display = 'block'
    } else {
        vJenisIdentitas.style.display = 'none'
    }

    if (nomorIdenttias.value == "") {
        vnNomorIdentitas.style.display = 'block'
    } else {
        vnNomorIdentitas.style.display = 'none'
    }

    if (wargaNegara.value == "") {
        vWargaNegara.style.display = 'block'
    } else {
        vWargaNegara.style.display = 'none'
    }


    

}