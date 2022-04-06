function attachEventsListeners() {

    let Days = document.getElementById('days');
    let Hours = document.getElementById('hours');
    let Minutes = document.getElementById('minutes');
    let Seconds = document.getElementById('seconds');
    let ButtonDays = document.getElementById('daysBtn');
    let ButtonHours = document.getElementById('hoursBtn');
    let ButtonMinutes = document.getElementById('minutesBtn');
    

    ButtonDays.addEventListener('click', (event) => {
      Hours.value = Number(Days.value) * 24;
      Minutes.value = Number(Hours.value) * 60;
      Seconds.value = Number(Minutes.value) * 60;
    })
    ButtonHours.addEventListener('click', (event) => {
    Minutes.value = Number(Hours.value) * 60;
    Seconds.value = Number(Minutes.value) * 60;
    })
    ButtonMinutes.addEventListener('click', (event) => {
        Seconds.value = Number(Minutes.value) * 60;
        })
}