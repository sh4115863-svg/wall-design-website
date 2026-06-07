

// let myName = document.getElementById("txtName")
// let code1 = document.getElementById("txtEmail")
// code1.addEventListener("click", f_blur)

// function f_click() {

//     localStorage.setItem("name", myName.value)
//     window.location = "../index.html"
// }

// function f_blur() {

//     //אם לא פעם ראשונה
//     if (localStorage.getItem(myName.value) != null) {
//         let codeSaving = localStorage.getItem(myName.value)
//         if (codeSaving == code1.value)
//             document.getElementById("btnSend").addEventListener("click", f_click)
//         else
//             alert("invalid code!! press again...")
//     }
//     //אם פעם ראשונה
//     else {
//         localStorage.setItem(myName.value, code1.value)
//         document.getElementById("btnSend").addEventListener("click", f_click)
//     }
// }

let myName = document.getElementById("txtName");
let password = document.getElementById("txtPassword");
let btnSend = document.getElementById("btnSend");

// מאזין לאירוע של לחיצה על כפתור "כניסה"
btnSend.addEventListener("click", f_click);

// פונקציה שנקראת בלחיצה על כפתור "כניסה"
function f_click() {
    // בדיקה אם אחד מהשדות ריק
    if (myName.value === "" || password.value === "") {
        alert("נא למלא שם וסיסמא לפני הכניסה.");
        return;  // אם אחד מהשדות ריק, לא נעשה כלום ונחזיר את המשתמש
    }

    const savedPassword = localStorage.getItem(myName.value);

    // אם השם כבר קיים ב-localStorage
    if (savedPassword !== null) {
        // אם הסיסמא נכונה, נעבור לדף הבית
        if (savedPassword === password.value) {
            localStorage.setItem("name", myName.value); // נשמור את השם ב-localStorage
            window.location.href = "../index.html";  // העבר לדף הבית
        } else {
            // אם הסיסמא לא נכונה, הצג הודעת שגיאה
            alert("הסיסמא שגויה! נסה שוב.");
        }
    } else {
        // אם השם לא קיים ב-localStorage, נשמור אותו עם הסיסמא
        localStorage.setItem(myName.value, password.value);
        localStorage.setItem("name", myName.value);  // נשמור את השם ב-localStorage
        window.location.href = "../index.html";  // העבר לדף הבית
    }
}
