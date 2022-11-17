window.addEventListener("DOMContentLoaded", main);

function main() {
    loadStartScen();
}
//start scen
function loadStartScen() {
    const text = document.getElementById("text");
    const button1 = document.getElementById("opt-1")
    const button2 = document.getElementById("opt-2")

    text.textContent = "Hej idag får du träffa Erik, Erik är snickare och precis kommit hem på Fredagen efter att jobbat hela veckan"
    button1.textContent = "Byt om och gå på aw direkt"
    button2.textContent = "Stanna kvar, städa, duscha, gå ut efter"
    button1.addEventListener("click", ()=> loadPubScene());
    button2.addEventListener("click", ()=> loadCleanScene());

}

//val gå ut direkt scen1

function loadPubScene() {
    const text = document.getElementById("text");
    const button1 = document.getElementById("opt-1")
    const button2 = document.getElementById("opt-2")

    text.textContent = "Äntligen framme på krogen"
    button1.textContent = "Börja med något att äta"
    button2.textContent = "Beställ en öl direkt"
    button1.addEventListener("click", ()=> loadMenuScene());
    button2.addEventListener("click", ()=> loadBeerScene());
}

// beer scene
function loadBeerScene() {
    const text = document.getElementById("text");
    const button1 = document.getElementById("opt-1")
    const button2 = document.getElementById("opt-2")

    text.textContent = "Du blickar över baren och ser att tjejen som jobbar i baren va as snygg, dags att beställa"
    button1.textContent = "Kan jag få en bärs!"
    button2.textContent = "Skulle jag kunna beställa en öl?"
    button1.addEventListener("click", ()=> loadAngryScene());
    button2.addEventListener("click", ()=> loadMenuScene());
}

// Menu scene
function loadMenuScene() {
    const text = document.getElementById("text");
    const button1 = document.getElementById("opt-1")
    const button2 = document.getElementById("opt-2")

    text.textContent = "Du får en meny av den snygge tjejen i baren, som rekomenderar en IPA och en Högrevsburgare"
    button1.textContent = "Du beställer det hon rekommenderade"
    button2.textContent = "Du beställer bara en stor stark"
    button1.addEventListener("click", ()=> loadHomeScene1());
    button2.addEventListener("click", ()=> loadAngryScene());
}

// angry scene
function loadAngryScene() {
    const text = document.getElementById("text");
    const button1 = document.getElementById("opt-1")
    const button2 = document.getElementById("opt-2")

    text.textContent = "Du har gjort något som fått henne att sluta titta åt ditt håll, någon annan tar nu dina beställningar"
    button1.textContent = "Försök få hennes uppmärksamhet och kolla om hon kan rekommendera en ny öl at testa"
    button2.textContent = "Du beställer bara en stor stark från nya bartendern"
    button1.addEventListener("click", ()=> loadHomeScene1());
    button2.addEventListener("click", ()=> loadCloserScene1());
}
//homescene
function loadHomeScene1() {
    const text = document.getElementById("text");
    const button1 = document.getElementById("opt-1")
    const button2 = document.getElementById("opt-2")

    text.textContent = "Den snygge tjejen som jobbade i baren har slutat för dagen och tar ett glas med dig, sen följer med dig hem"
    button1.textContent = "Du bestämmer dig för att ge det en chans och försöka kyssa henne"
    button2.textContent = "Du erbjuder henne något att dricka"
    button1.addEventListener("click", ()=> loadNotCleanedScene());
    button2.addEventListener("click", ()=> loadNotCleanedScene());
}

//pubscene 2
function loadPubScene2() {
    const text = document.getElementById("text");
    const button1 = document.getElementById("opt-1")
    const button2 = document.getElementById("opt-2")

    text.textContent = "Du kommer fram till krogen igen, vakterna tycker du är för berusad och släpper inte in dig"
    button1.textContent = "Du går tillbaka hem"
    button2.textContent = "Du håller inte med vakterna"
    button1.addEventListener("click", ()=> loadCloserScene2());
    button2.addEventListener("click", ()=> loadPoliceScene());
    //policescen
    function loadPoliceScene(){
        alert ("vakterna har tillkallat polis, du spenderar resten av natten i fyllecell");
    }
}

//closer scene 1

function loadCloserScene1() {
    
    alert ("Efter att fortsatt dricka ett par stor stark fick du till sist gå hem utan något napp ikväll, du bestämde dig för att testa igen imorgon men vara lite trevligare");


}
// closer scene 2
function loadCloserScene2() {
    
    alert ("Du vingla sakta hem utan något napp ikväll, du bestämde dig för att testa igen imorgon men vara lite trevligare");


}
//not cleaned scene
function loadNotCleanedScene() {
    
    alert ("Du hade inte städat hemma så hon tyckte det såg för ofräscht ut och valde att dricka upp sin öl du bjöd på och åka hem igen");


}

function loadPoliceScene() {
    
    alert ("Polisen grep dig och tog med dig till fyllecellen där du fick sova resten av natten");


}


