function spela_tarning() {
    let antal_kast = 0;
    let mal = 1; //Första målet är att slå 1

    while (mal <= 6) {
        kast = Math.floor(Math.random() * 6) + 1;  // Slumpa ett kast mellan 1 och 6
        antal_kast += 1;  // Öka antalet kast

        if (kast === mal) {  // Om kastet matchar målet
            mal += 1  // Gå till nästa mål
        }
    }

    return antal_kast
}

console.log(`${spela_tarning()}x throws`);