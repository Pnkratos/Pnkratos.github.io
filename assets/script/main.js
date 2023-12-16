document.getElementById('olho').addEventListener("click", function(){
    var inSenha = document.getElementById("inSenha")
    var imgOlho = document.getElementById("imgOlho")
    if(inSenha.getAttribute('type') == 'password') {
        inSenha.setAttribute('type', 'text');
        imgOlho.setAttribute("src",'assets/img/eye-solid.svg')
    } else {
        inSenha.setAttribute('type', 'password');
        imgOlho.setAttribute("src",'assets/img/eye-slash-solid.svg')
    }
})

document.getElementById("btnEntrar").addEventListener("click", function(){
    window.location.href='./home.html'
})