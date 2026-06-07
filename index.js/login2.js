
// document.write("a good  month for: " + (localStorage.getItem("name")))
// document.getElementById("btnBack").addEventListener("click", f_click)
// document.getElementById("clearLS").addEventListener("click", f_clear)

// function f_click() {
//     window.history.back()
//     window.location = "../index1.html"
// }

// function f_clear() {
//     localStorage.clear()
//     if(localStorage.length==0)
//         alert("מחקת את האחסון המקומי!")
// }

// let welcomeMessage = document.getElementById("welcomeMessage");
// let userNameDisplay = document.getElementById("userName");

// // בדיקה אם יש שם ב-localStorage ולהציג את השם בדף הבית
// window.onload = function() {
//     const storedUsername = localStorage.getItem("name");
//     if (storedUsername) {
//         // אם יש שם שמור, הצג את הודעת הברכה
//         welcomeMessage.style.display = 'block';
//         userNameDisplay.innerText = storedUsername;
//     } else {
//         // אם אין שם ב-localStorage, אפשר להחזיר לדף הלוגין
//         window.location = "../index1.html"; // שים את הקישור לדף הלוגין שלך
//     }
// };

let welcomeMessage = document.getElementById("welcomeMessage");
let userNameDisplay = document.getElementById("userName");

// ברגע שטוענים את הדף, נבדוק אם יש שם ב-localStorage
window.onload = function() {
    const storedUsername = localStorage.getItem("name");

    if (storedUsername) {
        // אם יש שם ב-localStorage, הצג את הודעת הברכה
        welcomeMessage.style.display = 'block';
        userNameDisplay.innerText = storedUsername;
    } else {
        // אם אין שם ב-localStorage, הודעת הברכה לא תוצג
        welcomeMessage.style.display = 'none';
    }
};
        // כאשר עוזבים את הדף (לפני שהדף נטען מחדש)
        window.addEventListener("beforeunload", function() {
            // ברגע שהדף עוזב, נמחק את הודעת הברכה
            localStorage.removeItem("name");  // לא מוחק את השם, רק לא מציג את הודעת הברכה
        });