
function ValidateForm() {

    let firstName = document.forms["mittFormular"]["firstName"].value;
    let lastName = document.forms["mittFormular"]["lastName"].value;
    let phoneNumber = document.forms["mittFormular"]["phoneNumber"].value;
    let email = document.forms["mittFormular"]["email"].value;
    let age = document.forms["mittFormular"]["age"].value;

    let regName = /[0-9]/;     // en regex för namnen. inga siffror eller symboler.
    // let regTel = ;       en regex för telefonnumret. inga symboler eller mellanslag.


    if (firstName == "") {
        alert("Den första rutan är tom. Fyll i ditt förnamn!");
        return false;
    } else if (firstName.match(regName) != null || firstName.length < 2) {
        alert("Ditt förnamn måste vara längre än 2 bokstäver långt.");
        return false;
    }

    if (lastName == "") {
        alert("Den andra rutan är tom. Fyll i ditt efternamn!")
        return false;
    }
    else if (lastName.length < 2) {         // Fixa: FÅR EJ HELLER innehålla några siffor eller symboler.
        alert("Ditt efternamn måste vara längre än 2 bokstäver långt.")
        return false;
    }

    if (phoneNumber.length < 10) {     //Fixa: Får ej innehålla symboler. Även ej innehålla mellanslag, går det? 
        alert("Var vänlig fyll i ditt telefonnummer med formatet '0701112233'")
        return false;
    }

    // ELLI KOMMENTARER:
    // angående email: i och med att vi använt 'input type:email' i htmlen så är en automatisk validering redan på plats..
    // gäller detta även telefonnumret som har 'input type: tel' i html?? kolla vad det innebär. 
    // samt: är det fusk? uppgiften är ju att programmera js-validering... 

    if (age == "N/A") {
        alert("Vänligen välj en ålder i listan")
        return false;
    }

}