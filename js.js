let imgBox = document.querySelector(".imgBox");
let qrImage = document.querySelector("#qrImage");
let text = document.querySelector("#text");
let btn =document.querySelector(".btn")

function generateQR(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value
}
btn.addEventListener("click", generateQR)
text.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        generateQR();
    }

});
