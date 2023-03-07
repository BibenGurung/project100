var SpeechRecognition = window.webkitSpeechRecognition;

var recongnition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recongnition.start();
}

recongnition.onresult = function(event) {
    console.log(event);


var Content= event.results[0][0]. transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "selfie")
    {
        console.log("taking selfie ---");
        speak();
    }


document.getElementById("textbox").innerHTML = Content;
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 Seconds";
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}



function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    })
}

function setTimeOutButton()
{
    setTimeout(function(){alert("set TimeOutButton");
}, 5000);
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}