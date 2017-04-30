window.addEventListener('load',function(){
  var inputCaptcha=document.getElementById("captcha");
  var inputTextCaptcha=document.getElementById('copyCaptcha');
  generaCaptcha(inputCaptcha);

  document.getElementById('check').addEventListener('click',function(){
    if(verifyCaptcha(inputCaptcha,inputTextCaptcha)){
      alert("Código valido");
    }else {
      alert("El código no es correcto");
    }
  });

  document.getElementById('reboot').addEventListener('click',function(){
    generaCaptcha(inputCaptcha);
    document.getElementById('copyCaptcha').value="";
  });

});
function generaCaptcha(input){
  var regex=/[A-Za-z0-9]{1}/;
  var caracter = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');

  for (var i=0;i<6;i++){
    var c1 = caracter[Math.floor(Math.random() * caracter.length)];
    var c2 = caracter[Math.floor(Math.random() * caracter.length)];
    var c3 = caracter[Math.floor(Math.random() * caracter.length)];
    var c4 = caracter[Math.floor(Math.random() * caracter.length)];
    var c5 = caracter[Math.floor(Math.random() * caracter.length)];
    var c6 = caracter[Math.floor(Math.random() * caracter.length)];
    var c7 = caracter[Math.floor(Math.random() * caracter.length)];
   }
   input.value = c1 + c2 + c3 + c4 + c5 + c6 + c7;
   var randomColor = Math.floor(Math.random()*16777215).toString(16);
   document.getElementsByClassName('captcha')[0].style.color="#"+randomColor;
}

function verifyCaptcha(captcha,captchaCopy){
  return (captcha.value!=captchaCopy.value) ? false:true;
}
