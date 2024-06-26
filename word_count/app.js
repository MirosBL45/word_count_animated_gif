// function brojKarakteraIReci(str) {
//     // Brojanje karaktera
//     var brojKaraktera = str.length;

//     // Brojanje reči
//     // Uklonimo beline s početka i kraja stringa i razdelimo string na reči
//     var reci = str.trim().split(/\s+/);
//     var brojReci = reci.length;

//     // Ispis rezultata
//     console.log("Broj karaktera: " + brojKaraktera);
//     console.log("Broj reči: " + brojReci);

//     // Opciono, vraćanje rezultata kao objekat
//     return {
//         brojKaraktera: brojKaraktera,
//         brojReci: brojReci
//     };
// }

// // Primer upotrebe
// var tekst = "Mačke su izvrsni lovci, vješto love igračke i miševe. Njihove šape su meke, a okretnost ih čini majstorima u istraživanju uskih prostora.Fleksibilne su, savijajući se tijekom spavanja, a brzo čišćenje";
// brojKarakteraIReci(tekst);

let buttonText = document.getElementById('counting');

buttonText.addEventListener('click', function () {

    var inputText = document.getElementById('allText').value;

    // Number of letters
    var letterCount = inputText.length;

    // Word count
    var wordCount = inputText.trim().split(/\s+/).length;

    document.getElementById('lettersNumber').textContent = 'Letter Count: ' + letterCount;
    document.getElementById('wordsNumber').textContent = 'Word Count: ' + wordCount;

    document.getElementById('allText').value = '';
    document.getElementById('yourText').textContent = 'Your Text: ' + inputText;
});