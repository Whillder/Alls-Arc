// window.onload=function(){
//     document.getElementById("searchvoice").onclick=rec;
// }
// let rec;
//     if (!("webkitSpeechRecognition" in window)) {
//     	alert("disculpas, no puedes usar la API");
//     } else {
//     	rec = new webkitSpeechRecognition();
//     	rec.lang = "es-AR";
//     	rec.continuous = true;
//     	rec.interim = true;
//     	rec.addEventListener("result",iniciar);
//     }
// function iniciar(event){
// 	for (let i = event.resultIndex; i < event.results.length; i++){
//          document.getElementById('search').innerHTML = event.results[i][0].transcript;
// 	}
// }
