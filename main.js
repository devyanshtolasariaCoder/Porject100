var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
 function start()
    {
        document.getElementById("textbox").innerHTML = "";
        recognition.start();
}

recognition.onresult= function run (event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML= Content;
}

setTimeout(function()
{
    img_id="selfie1";
    take_snapshot();
    speack_data= "Taking your selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    SpeechSynthesis.speak(utterThis);

}, 5000);
setTimeout(function()
{
    img_id="selfie2";
    take_snapshot();
    speack_data= "Taking your selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    SpeechSynthesis.speak(utterThis);

}, 10000);
setTimeout(function()
{
    img_id="selfie3";
    take_snapshot();
    speack_data= "Taking your selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    SpeechSynthesis.speak(utterThis);

}, 15000);

function take_snapeshot()
{
    console.log(img_id);
    Webcam.snap(function(data_uri){
    if(img_id-'selfie1'){
document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri+'"/>';
    }
    if(img_id-"selfie2"){
        document.getElementById("result2").innerHTML = '<img id="selfie1" src="' + data_uri+'"/>';
            }
            if(img_id-"selfie3"){
                document.getElementById("result3").innerHTML = '<img id="selfie1" src="' + data_uri+'"/>';
                    }
    });
}