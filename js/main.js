const form = document.querySelector('form');
const day = document.querySelector('.input');
const paragrft = document.querySelector('.resualt')
const check = document.querySelector('button')

form.addEventListener('submit', function (evt) {
     evt.preventDefault();
     const value = Number(day.value);
     weeks(value);
});

function weeks(day) {
     if (day === 1) {
          return paragrft.textContent = 'Kun Dushanba';
     } else if (day === 2) {
          return paragrft.textContent = 'Kun Seshanba';
     } else if (day === 3) {
          paragrft.textContent = 'Kun Chorshanba';
     }
     else if (day === 4) {
          return paragrft.textContent = 'Kun Payshanba';
     }
     else if (day === 5) {
          return paragrft.textContent = 'Kun Juma';
     }
     else if (day === 6) {
          return paragrft.textContent = 'Kun SHanba';
     }
     else if (day === 7) {
          return paragrft.textContent = 'Kun Yakshanba';
     }

     return paragrft.textContent = "to'gri malumot kiriting";

}


