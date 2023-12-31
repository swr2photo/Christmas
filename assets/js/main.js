/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== DAY COUNTER FOR CHRISTMAS ===============*/
const titleData = document.getElementById('title-data'),
      numberData = document.getElementById('number-data'),
      textData = document.getElementById('text-data'),
      msgChristmas = document.getElementById('msg-chrismas');

const christmasCountdown = () => {
    let now = new Date(),
        currentMonth = now.getMonth() + 1,
        currentDay = now.getDate();

    let nextChristmasYear = now.getFullYear();
    if (currentMonth == 12 && currentDay > 25) {
        nextChristmasYear += 1;
    }

    let nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`;
    let ChristmasDay = new Date(nextChristmasDate);
    let timeLeft = ChristmasDay - now;

    let days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;

    if (currentMonth != 12 || (currentMonth == 12 && currentDay != 25)) {
        days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
        hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
        minutes = Math.floor(timeLeft / 1000 / 60) % 60;
        seconds = Math.floor(timeLeft / 1000) % 60;
    }

    numberData.innerHTML = days < 10 ? `0${days}` : days;
    textData.innerHTML = 'วัน';

    if (currentDay == 24) {
        numberData.innerHTML = hours < 10 ? `0${hours}` : hours;
        textData.innerHTML = 'ชั่วโมง';

        if (hours === 0) {
            numberData.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
            textData.innerHTML = 'นาที';

            if (minutes === 0) {
                numberData.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
                textData.innerHTML = 'วินาที';
            }
        }
    }

    if (currentMonth == 12 && currentDay == 25) {
        titleData.style.display = 'none';
        msgChristmas.style.display = 'block';msgChristmas.innerHTML = '<div style="text-align: center;"><span style="color: #000000;">วันนี้ 25 ธันวาคม 2566 </span> <br> Merry Christmas</div>';
        msgChristmas.innerHTML = '<div style="text-align: center;"><span style="color: #000000;">วันนี้ 25 ธันวาคม 2566 </span> <br> Merry Christmas</div>';
    }

    if (currentMonth == 12 && currentDay == 26) {
        titleData.style.display = 'block';
        msgChristmas.style.display = 'none';
    }
};

setInterval(christmasCountdown, 1000);



