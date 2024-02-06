/////DECLARING THE CONSTANTS/////

const btns = document.getElementsByClassName("button"); //Channel buttons
const btnVolPlus = document.getElementById("VolumePlus"); //Increment Volume
const btnVolMinus = document.getElementById("VolumeMinus"); //Decrease Volume
const btnChPlus = document.getElementById("ChannelPlus"); //Increment Channel
const btnChMinus = document.getElementById("ChannelMinus"); //Decrease Channel
const screenInfo = document.getElementById("ScreenInfo"); //Info HUD
const VolBar = document.getElementById("VolumeBar"); //Volume Bar
const pwrlight = document.getElementById("powerlight"); //Remote control power red LED
const lighttvbackground = document.getElementById("TvSectionTop"); //Background TV 
const sourcebtn = document.getElementById("SourceButton"); //Info Button

///Variables and lets to see the current time via strings

var dateNow = new Date(); ///Variable to obtain the date
var dateNowString = dateNow.toString(); //Variable to switch it to string
let dateNowStringHour = dateNowString.slice(16, 24); //Let to slice the data to obtain only the hour
let day = dateNow.getDate() ///Get only the day of the date in a let
let month = dateNow.getMonth() + 1 ///Get only the month of the date in a let
let year = dateNow.getFullYear() ///Get only the year of the date in a let
let date = `${day}-${month}-${year}` ///Concat all in one

////Inners HTML to send the data to a div tag 

document.getElementById("dateinfo").innerHTML = date;
document.getElementById("dateinfo1").innerHTML = date;
document.getElementById("dateinfo2").innerHTML = date;
document.getElementById("dateinfo3").innerHTML = date;
document.getElementById("dateinfo4").innerHTML = date;
document.getElementById("dateinfo5").innerHTML = date;

document.getElementById("hourinfo").innerHTML = dateNowStringHour;
document.getElementById("hourinfo1").innerHTML = dateNowStringHour;
document.getElementById("hourinfo2").innerHTML = dateNowStringHour;
document.getElementById("hourinfo3").innerHTML = dateNowStringHour;
document.getElementById("hourinfo4").innerHTML = dateNowStringHour;
document.getElementById("hourinfo5").innerHTML = dateNowStringHour;


////DECLARING LETS////

let arrayBtns = Array.from(btns); ////Passing the class "button" list to a array
let TvScreen = document.getElementById("TvScreen"); ////Declaring the TV screen div content
let TvOn = false; ////Boolean let to check if the TV is ON or not
let powerButton = document.getElementById("powerButton"); ////Declaring power button div
let IncreaseDecreaseVolume = 0; ///Incremental and decremental value when you use the + - volume button
let IncreaseDecreaseChannel = 0; ///Incremental and decremental value when you use the + - channel button
let channelValue = 0; ////
let channelinfo; /////let to save the channel info

///When you click the power button 

powerButton.addEventListener("click", () => {
    if (!TvOn) { //If the Tv if off
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        TvScreen.classList.add("channelDefault"); ////Remove the last class value and put the channel default (Guide list)
        pwrlight.classList.remove(pwrlight.classList[pwrlight.classList.length - 1]);
        pwrlight.classList.add("powerlighton"); ////Turn ON the power red LED
        lighttvbackground.classList.remove(lighttvbackground.classList[lighttvbackground.classList.length - 1]);
        lighttvbackground.classList.add("TvBackgroundlightOn");//////Adds light in the TV Background 
        TvOn = true;
    }
    else { //If the Tv is On
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        TvScreen.classList.add("ScreenBlack");////Turns Off the screen 
        pwrlight.classList.remove(pwrlight.classList[pwrlight.classList.length - 1]);
        pwrlight.classList.add("powerlightoff");////Turn Off the power red LED
        lighttvbackground.classList.remove(lighttvbackground.classList[lighttvbackground.classList.length - 1]);
        lighttvbackground.classList.add("TvBackgroundlightOff");////Turn off the light TV Background
        TvOn = false;////boolean to save that the Tv if off in this moment
        IncreaseDecreaseChannel = 0;////reset the incresese decrease channel valie 
        return TvOn; //// Returns the boolena value
    }
})

btnVolPlus.addEventListener("click", () => { ///When you press the + volume button
    if (IncreaseDecreaseVolume <= 4 && TvOn) { ///if the increase decrease let is minor or equal than 4 AND the tv is ON
        IncreaseDecreaseVolume++; /////The value increase
        VolBar.classList.remove(VolBar.classList[VolBar.classList.length - 1]);
        VolBar.classList.add("VolBarLighted" + IncreaseDecreaseVolume.toString());///The volume bar id increases its width removing the old value and adding the new one with the volbar class + the value of the bar
    }
})

btnVolMinus.addEventListener("click", () => { /////The same but opposite
    if (IncreaseDecreaseVolume >= 1 && TvOn) {
        IncreaseDecreaseVolume--;
        VolBar.classList.remove(VolBar.classList[VolBar.classList.length - 1]);
        VolBar.classList.add("VolBarLighted" + IncreaseDecreaseVolume.toString());
    }
})

btnChPlus.addEventListener("click", () => { ///When you press the + channel button
    if (IncreaseDecreaseChannel <= 5 && IncreaseDecreaseChannel + channelValue <= 5 && TvOn) { ////If the incremental decremental value is minor or equal than 5 and the TV is ON
        IncreaseDecreaseChannel += 1; /////Increment the channel value
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        TvScreen.classList.add("channel" + (IncreaseDecreaseChannel).toString()); /////The channel  increases its number removing the old value class and adding the new one with the channel class + the number of the channel
        channelinfo = ("channel" + (IncreaseDecreaseChannel).toString()); /////this let saves the channel info value if you want to press the info button
    }
})

btnChMinus.addEventListener("click", () => { ////The same but opposite 
    if (IncreaseDecreaseChannel >= 2 && TvOn) {
        IncreaseDecreaseChannel -= 1;
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        TvScreen.classList.add("channel" + (IncreaseDecreaseChannel).toString());
        channelinfo = ("channel" + (IncreaseDecreaseChannel).toString());
    }
})




sourcebtn.addEventListener("click", () => { ///when you press the channel info button
    if (TvOn) { /////if the TV is On
        TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
        setTimeout(function () {
            TvScreen.classList.add(channelinfo); ////Remove the previous value and puts the new on to show up in the screen the channel info (i´ve had to put a settimeout because if i dont this function doesn´t work)
        }, 1)
    }

}
)

arrayBtns.map( ////Map all the channel buttons list
    item => { ////declaring arrow function called item
        item.addEventListener("click", (e) => { ////When you one of the mapped channel button list you declare an arrow event called "e" 
            if (TvOn) { //// if the TV is ON
                IncreaseDecreaseChannel = parseInt(e.target.id.slice(-1)); ////saves the value in a the let with a number value with parseInt
                TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length - 1]);
                TvScreen.classList.add("channel" + e.target.id.slice(-1)); ///Removes the previous class value and puts the new one in the tv screen to show the new channel selected
                channelinfo = ("channel" + e.target.id.slice(-1)); ////Saves the channel info in a let if you want to press the info channel value later
                console.log(TvScreen.classList);
            }
        })
    })