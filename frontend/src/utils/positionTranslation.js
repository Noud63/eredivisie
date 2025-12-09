 const position = (pos) => {
    const translations = {
      "Goalkeeper": "Doelman",
      "Defence": "Verdediger",
      "Offence": "Aanvaller",
      "Midfield": "Middenvelder",
      "Right Winger": "Rechts buiten",
      "Left Winger": "Links buiten",
      "Defensive Midfield": "Middenvelder",
      "Right-Back": "Rechts back",
      "Centre-Forward": "Spits",
      "Attacking Midfield": "Middenvelder",
      "Left-Back": "Links back",
      "Central Midfield": "Middenvelder",
      "Centre-Back": "Verdediger",
    };

    return translations[pos] || pos;
  };

  export default position