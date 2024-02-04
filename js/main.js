const btns = document.getElementsByClassName("button");
const btnVolPlus = document.getElementById("VolumePlus");
const btnVolMinus = document.getElementById("VolumeMinus");
const btnChPlus = document.getElementById("ChannelPlus");
const btnChMinus = document.getElementById("ChannelMinus");
const VolBar = document.getElementById("VolumeBar");

let arrayVolBar = Array.from(VolBar);
let arrayBtns = Array.from(btns);
let TvScreen = document.getElementById("TvScreen");
let TvOn = false;
let powerButton = document.getElementById("powerButton");
let IncreaseDecreaseVolume = 0;
let IncreaseDecreaseChannel = 0;
let channelValue = 0;



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
    }   
})

btnChMinus.addEventListener("click", () => {
    if (IncreaseDecreaseChannel >= 2 && TvOn) {
        IncreaseDecreaseChannel -= 1;
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        TvScreen.classList.add("channel" + (IncreaseDecreaseChannel).toString());
    }
})


powerButton.addEventListener("click", () => {
    if (!TvOn) {
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        TvScreen.classList.add("channelDefault");
        TvOn = true;
        return TvOn;
    }
    else {
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        TvScreen.classList.add("ScreenBlack");
        TvOn = false;
        IncreaseDecreaseChannel = 0;
        return TvOn;
    }
})


arrayBtns.map(
    item => {
        item.addEventListener("click", (e) => {
            if (TvOn) {
                IncreaseDecreaseChannel = parseInt(e.target.id.slice(-1));
                TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
                TvScreen.classList.add("channel" + e.target.id.slice(-1));
            }
        })
    })
