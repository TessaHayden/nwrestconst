
    const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
    }
    function toggleActive(e) {
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

    // script for calendar
  const date = new Date();

  const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
      date.getFullYear(), 
      date.getMonth() + 1, 0)
      .getDate();
    
    const prevLastDay = new Date(
      date.getFullYear(), 
      date.getMonth(), 0)
      .getDate();

    const firstDayIndex = date.getDay();
    
    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth()+ 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    document.querySelector('.date h1').innerHTML= months[date.getMonth()];
    document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if(
        i === new Date().getDate() && 
        date.getMonth() === new Date().getMonth()
        ) {
      days += `<div class="today">${i}</div>`; 
    }  else {
        days += `<div>${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.innerHTML = days;
    } 
};
    document.querySelector('.prev').addEventListener('click', () => {date.setMonth(date.getMonth() - 1);
      renderCalendar();
    });
    document.querySelector('.next').addEventListener('click', () => {date.setMonth(date.getMonth() + 1);
      renderCalendar();
    });
    
renderCalendar();
    
// script for form validation

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict';
//   window.addEventListener('load', function () {
// // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.getElementsByClassName('needs-validation');
// // Loop over them and prevent submission
//   var validation = Array.prototype.filter.call(forms, function (form) {
//     form.addEventListener('submit', function (event) {
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();




