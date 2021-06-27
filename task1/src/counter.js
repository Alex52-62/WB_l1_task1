import * as module from "./howler.js";

export function clock() {
    var myTimer = setInterval(myClock, 1000);
    var c = +document.getElementById("in").value;

    function myClock() {

        document.getElementById("demo").innerHTML = --c;
        if (c == 10) {
            var sound = new Howl({
                src: ['./src/sounds.mp3'],
            });
            console.log(sound);
            sound.play();
        } else if (c === 0) {
            clearInterval(myTimer);
            alert("Reached zero");
        }
    }
    const el = document.getElementById("demo2");
    el.addEventListener("click", stop);

    function stop() { // функция остановки таймера
        clearInterval(myTimer);
    }
}