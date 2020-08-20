console.log("uhfhuhf")
function post(){
    var txt = document.getElementById('txtContent');
    var image =document.getElementById('image-upload');
    
    var video =document.getElementById('video-upload');

    if(txt.value == "" ){
        alert("selec any one")
        txt.focus()
        document.getElementById('posttext').innerHTML = txt
        return false
    }
    

}