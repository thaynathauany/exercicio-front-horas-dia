function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() + ':' + data.getMinutes()
    var descricao =  ''
    //var hora = 8
    if (hora === "1" || hora === "0") { 
        descricao = "é" 
    } else 
        descricao = "são"
    
    msg.innerHTML = `Agora ${descricao} ${hora}.`
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'dia.png'
        document.body.style.background = '#096d33'
    } else if (hora >= 12 && hora <18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#eda025'
    } else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#4c4a46'
    } 
        
}
