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

    text.textContent = "Du blickar över baren och ser att tjejen som jobbar i baren va assnygg, dags att beställa"
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
    button1.addEventListener("click", ()=> loadHomeScene());
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
    button1.addEventListener("click", ()=> loadHomeScene());
    button2.addEventListener("click", ()=> loadCloserScene1());
}
//homescene
function loadHomeScene1() {
    const text = document.getElementById("text");
    const button1 = document.getElementById("opt-1")
    const button2 = document.getElementById("opt-2")

    text.textContent = "Den snygge tjejen som jobbade i baren har slutat för dagen och följer med dig hem"
    button1.textContent = "Du bestämmer dig för att ge det en chans och försöka kyssa henne"
    button2.textContent = "Du ernjuder henne något att dricka"
    button1.addEventListener("click", ()=> loadNotCleanedScene());
    button2.addEventListener("click", ()=> loadNotCleanedScene());
}

//not cleaned scene
function loadHomeScene() {
    const text = document.getElementById("text");
    const button1 = document.getElementById("opt-1")
    const button2 = document.getElementById("opt-2")

    text.textContent = "Hon kände direkt när hon kom hem till dig att det kändes alldeles för ostädat, hon bestämde sig för att åka hem"
    button1.textContent = "Du går tillbaka till krogen"
    button2.textContent = "Du stannar"
    button1.addEventListener("click", ()=> loadPubScene2());
    button2.addEventListener("click", ()=> loadCloserScene1());
}
//pubscene 2
function loadPubScene2() {
    const text = document.getElementById("text");
    const button1 = document.getElementById("opt-1")
    const button2 = document.getElementById("opt-2")

    text.textContent = "Du kommer fram till krogen igen, vakterna tycker du är för berusad och släpper inte in dig"
    button1.textContent = "Du går tillbaka hem"
    button2.textContent = "Du håller inte med vakterna"
    button1.addEventListener("click", ()=> loadCloserScene1());
    button2.addEventListener("click", ()=> loadPoliceScene());
    //policescen
    function loadPoliceScene(){
        alert ("vakterna har tillkallat polis, du spenderar resten av natten i fyllecell");
    }
}

//closer scene 1

function loadCloserScene1() {
    const text = document.getElementById("text");
    text.textContent = "Du är hemma och lägger dig i soffan och äter upp chipsen du hade från igår, sen somnar du"

}






//val städa scen 1
function loadCleanScene() {
    const text = document.getElementById("text");
    const button1 = document.getElementById("opt-1")
    const button2 = document.getElementById("opt-2")

    text.textContent = "Nu har du städat och duschat och redo för krogbesöket, du tar en taxi ner, och kommit fram"
    button1.textContent = "Beställ en öl i baren"
    button2.textContent = "Be om en meny och sätt dig i baren"
    button1.addEventListener("click", ()=> loadBeerScene());
    button2.addEventListener("click", ()=> loadMenuScene());
}