const btns = document.getElementsByClassName("button");
const btnVolPlus = document.getElementById("VolumePlus");
const btnVolMinus = document.getElementById("VolumeMinus");
const btnChPlus = document.getElementById("ChannelPlus");
const btnChMinus = document.getElementById("ChannelMinus");
const screenInfo = document.getElementById("ScreenInfo");
const VolBar = document.getElementById("VolumeBar");
const pwrlight = document.getElementById("powerlight");
const lighttvbackground = document.getElementById("TvSectionTop");
const sourcebtn = document.getElementById("SourceButton");

var dateNow = new Date();
var dateNowString = dateNow.toString();
let dateNowStringHour = dateNowString.slice(16, 24);


document.getElementById("dateinfo").innerHTML = dateNowStringHour;
document.getElementById("dateinfo1").innerHTML = dateNowStringHour;
document.getElementById("dateinfo2").innerHTML = dateNowStringHour;
document.getElementById("dateinfo3").innerHTML = dateNowStringHour;
document.getElementById("dateinfo4").innerHTML = dateNowStringHour;
document.getElementById("dateinfo5").innerHTML = dateNowStringHour;


let arrayVolBar = Array.from(VolBar);
let arrayBtns = Array.from(btns);
let TvScreen = document.getElementById("TvScreen");
let TvOn = false;
let powerButton = document.getElementById("powerButton");
let IncreaseDecreaseVolume = 0;
let IncreaseDecreaseChannel = 0;
let channelValue = 0;
let channelinfo;



btnVolPlus.addEventListener("click", () => {
    if (IncreaseDecreaseVolume <= 4 && TvOn) {
        IncreaseDecreaseVolume++;
        VolBar.classList.remove(VolBar.classList[VolBar.classList.length - 1]);
        VolBar.classList.add("VolBarLighted" + IncreaseDecreaseVolume.toString());
    }
})

btnVolMinus.addEventListener("click", () => {
    if (IncreaseDecreaseVolume >= 1 && TvOn) {
        IncreaseDecreaseVolume--;
        VolBar.classList.remove(VolBar.classList[VolBar.classList.length - 1]);
        VolBar.classList.add("VolBarLighted" + IncreaseDecreaseVolume.toString());
    }
})

btnChPlus.addEventListener("click", () => {
    if (IncreaseDecreaseChannel <= 5 && IncreaseDecreaseChannel + channelValue <= 5 && TvOn) {
        IncreaseDecreaseChannel += 1;
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        TvScreen.classList.add("channel" + (IncreaseDecreaseChannel).toString());
        channelinfo = ("channel" + (IncreaseDecreaseChannel).toString());
    }
})

btnChMinus.addEventListener("click", () => {
    if (IncreaseDecreaseChannel >= 2 && TvOn) {
        IncreaseDecreaseChannel -= 1;
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        TvScreen.classList.add("channel" + (IncreaseDecreaseChannel).toString());
        channelinfo = ("channel" + (IncreaseDecreaseChannel).toString());
    }
})


powerButton.addEventListener("click", () => {
    if (!TvOn) {
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        TvScreen.classList.add("channelDefault");
        pwrlight.classList.remove(pwrlight.classList[pwrlight.classList.length - 1]);
        pwrlight.classList.add("powerlighton");
        lighttvbackground.classList.remove(lighttvbackground.classList[lighttvbackground.classList.length - 1]);
        lighttvbackground.classList.add("TvBackgroundlightOn");
        TvOn = true;
    }
    else {
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        TvScreen.classList.add("ScreenBlack");
        pwrlight.classList.remove(pwrlight.classList[pwrlight.classList.length - 1]);
        pwrlight.classList.add("powerlightoff");
        lighttvbackground.classList.remove(lighttvbackground.classList[lighttvbackground.classList.length - 1]);
        lighttvbackground.classList.add("TvBackgroundlightOff");
        TvOn = false;
        IncreaseDecreaseChannel = 0;
        return TvOn;
    }
})

sourcebtn.addEventListener("click", () => {
    if (TvOn) {
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        setTimeout(function () {
            TvScreen.classList.add(channelinfo);
        }, 1)
    }

}
)

arrayBtns.map(
    item => {
        item.addEventListener("click", (e) => {
            if (TvOn) {
                IncreaseDecreaseChannel = parseInt(e.target.id.slice(-1));
                TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
                TvScreen.classList.add("channel" + e.target.id.slice(-1));
                channelinfo = ("channel" + e.target.id.slice(-1));
            }
        })
    })
