var prediction1 = ""
Webcam.set({
    width: 350,
    height: 285,
    image_format: 'png',
    png_quality: 100
});

var camera = document.getElementById("camera");

Webcam.attach("#camera");


function clickImage() {
    Webcam.snap(function(imgsrc) {
        document.getElementById("result").innerHTML = '<img id="image"src="' + imgsrc + '">'
    });
}
console.log(ml5.version);
var guesturemodel = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jiqujPJDH/model.json', modelLoaded);

function modelLoaded() {
    console.log("Model has loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "This gesture means " + prediction1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function check() {
    var photograph = document.getElementById("image");
    guesturemodel.classify(photograph, getresult);
}

function getresult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        prediction1 = results[0].label;
        speak();
        if (prediction1 == "Amazing") {
            document.getElementById("Prediction_1").innerHTML = "&#128076;";
        }

        if (prediction1 == "Best") {
            document.getElementById("Prediction_1").innerHTML = "&#128077;";
        }

        if (prediction1 == "Victory") {
            document.getElementById("Prediction_1").innerHTML = "&#9996;";
        }
    }
}