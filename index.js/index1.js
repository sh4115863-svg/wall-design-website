
// document.addEventListener('DOMContentLoaded', function () {
//     const navItems = document.querySelectorAll('.nav-item');
//     const currentPage = window.location.pathname.split('/').pop();
  
//     navItems.forEach(item => {
//       const linkHref = item.getAttribute('href');
//       if (linkHref.includes(currentPage)) {
//         item.classList.add('active');
//       }
//     });
//   });




// const element = document.getElementById('myElement');

// element.addEventListener('click', function() {
//     if (element.style.backgroundColor === 'lightcoral') {
//         element.style.backgroundColor = 'lightblue';  // חזרה לצבע הקודם
//     } else {
//         element.style.backgroundColor = 'lightcoral';  // שינוי לצבע חדש
//     }
// });

// const divColor =document.querySelector(".Ccolor");
// divColor.addEventListener('mouseover', div1);

// function div1() {
//     divColor.classList.add("color");
//     divColor.classList.remove("Ccolor");
//     divColor.dir = 'ltr'; 
//   }

//   const divColor2 =document.querySelector(".Ccolor");
//   divColor2.addEventListener('mouseout', div2);
  
  

//   function div2() {
//     divColor2.classList.add('Ccolor');
//     divColor2.classList.remove('color');
//     divColor2.dir = 'rtl';
    
//   }

  /*החלפת צבעים עי לחיצה*/ 
let color=document.querySelector(".a1");
color.addEventListener('click', classa1);

const Abutton =document.querySelector("button");
Abutton.addEventListener('click', classa1);

function classa1() {
    Abutton.classList.add("a1");
    Abutton.classList.remove("a2");
    Abutton.classList.remove("a3");
  }
  let aaa=document.querySelector(".a2");
  aaa.addEventListener('click', classa2);
  
function classa2() {
    Abutton.classList.add("a2");
    Abutton.classList.remove("a1");
    Abutton.classList.remove("a3");
  }
  let ccc=document.querySelector(".a3");
    ccc.addEventListener('click', classa3);

  function classa3() {
    Abutton.classList.add("a3");
    Abutton.classList.remove("a2");
    Abutton.classList.remove("a1");
  }

  /********************/
  function toggleImage(setId) {
    const beforeImage = document.querySelector(`#${setId} .before-image`);
    const afterImage = document.querySelector(`#${setId} .after-image`);
    
    if (beforeImage.style.display === 'none') {
        beforeImage.style.display = 'block';
        afterImage.style.display = 'none';
    } else {
        beforeImage.style.display = 'none';
        afterImage.style.display = 'block';
    }
}

// אתחול התמונה המוצגת (הצגת "לפני" בתחילה)
window.onload = () => {
    const imageSets = document.querySelectorAll('.image-set');
    imageSets.forEach(set => {
        const beforeImage = set.querySelector('.before-image');
        const afterImage = set.querySelector('.after-image');
        afterImage.style.display = 'none'; // התחל להסתיר את תמונת ה"אחרי"
    });
};
