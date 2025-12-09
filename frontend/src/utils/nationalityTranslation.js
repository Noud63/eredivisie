const nationality = (nat) => {
     const translations = {
      "Netherlands": "Nederland",
      "Morocco": "Marokko",
      "Norway":"Noorwegen",
      "Algeria":"Algerije",
      "Iceland":"Ijsland",
      "Turkey":"Turkije",
      "Belgium":"België",
      "Poland":"Polen",
      "Indonesia":"Indonesië",
      "France":"Frankrijk",
      "Croatia":"Kroatië",
      "Germany":"Duitsland",
      "Ivory Coast":"Ivoorkust",
      "South Korea":"Zuid-Korea",
      "Serbia":"Servië",
      "Italy":"Italië",
      "Luxembourg":"Luxemburg",
      "Slovakia":"Slowakije",
      "Czech Republic":"Tjechië",
      "Denmark":"Denemarken",
      "Greece":"Griekenland",
      "Bulgaria":"Bulgarije",
      "Sweden":"Zweden",
      "Romania":"Roemenië",
      "Spain":"Spanje",
      "Brazil":"Brazilië",
      "Switzerland":"Zwitserland",
      "Austria":"Oostenrijk",
      "England":"Engeland",
      "Iraq":"Irak",
      "IreLand":"Ierland",
      "New Zealand":"Nieuw Zeeland",
      "Cape Verde Islands":"Kaap Verdië",
      "Argentina":"Argentinië",
      "Azerbaijan":"Azerbeidzjan",
      "Cameroon":"Kameroen",
      "Tunisia":"Tunesië",
      "Comoros":"Comoren"
     }

     return translations[nat] || nat
  }

  export default nationality