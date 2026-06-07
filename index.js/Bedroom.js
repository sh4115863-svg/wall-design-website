document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".grid-bedroom img");//בוחר את כל התמונות שנמצאות בתוך אלמנט עם הקלאס .grid-bedroom.


  
    // צור אלמנט פופ-אפ
    const popupContainer = document.createElement("div");//יוצר דינמית אלמנט div שיכיל את הפופ־אפ.
    const popupImage = document.createElement("img");//img – יציג את התמונה שנלחצה.
    const closeButton = document.createElement("span");//span – יהיה כפתור הסגירה (X).
  
    popupContainer.classList.add("popup-container");//מוסיף מחלקות CSS לכל אחד מהאלמנטים לצורך עיצוב.
    popupImage.classList.add("popup-image");
    closeButton.classList.add("close-button");
    closeButton.innerHTML = "✖";//מוסיף תוכן כפתור סגירה (האייקון ✖).
  
    //בונה את מבנה הפופ־אפ על המסך: התמונה + כפתור בתוך הקונטיינר, ואז מוסיף אותו ל־body.
    popupContainer.appendChild(popupImage);
    popupContainer.appendChild(closeButton);
    document.body.appendChild(popupContainer);
  
    images.forEach((img) => {
      img.addEventListener("click", () => {//לכל תמונה מוסיף אירוע click.
        popupImage.src = img.src;//כאשר לוחצים – מציב את ה־src של התמונה שנלחצה לתוך ה־popup, ומציג את הפופ־אפ (display: flex).
        popupContainer.style.display = "flex";
      });
    });
  
    // סוגר את הפופ־אפ כשלוחצים על ה־X.
    closeButton.addEventListener("click", () => {
      popupContainer.style.display = "none";
    });
  
    //אם המשתמש לוחץ מחוץ לתמונה (על הרקע של הפופ־אפ) – גם אז הפופ־אפ נסגר.
    popupContainer.addEventListener("click", (e) => {
      if (e.target === popupContainer) {
        popupContainer.style.display = "none";
      }
    });
  });
  

  //פונקציה שמופעלת כשמשתמש לוחץ על אייקון (כמו ☰).
  //מוצאת את תפריט הניווט (.nav-links) ומדליקה/מכבה את הקלאס .show, שמכניס או מוציא את התפריט מהמסך.
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  