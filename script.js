function convert() {
  var valeur = document.getElementById("valueCelsius").value;
  // Convertir la valeur en float
  var nombre = parseFloat(valeur);

  var resultatDiv = document.getElementById("result");

  // Vérifier si la conversion a réussi et si c'est un nombre
  if (!isNaN(nombre) && isFinite(nombre)) {
    result = convertToCustomScale(nombre);
    resultatDiv.innerHTML = result + "°G"
  } else {
    alert("Veuillez entrer un nombre à virgule flottante valide.");
  }
}

function convertToCustomScale(celsius) {
  const referenceLow = -196; // Température de référence basse
  const referenceHigh = -71.15; // Température de référence haute
  const intervalPerDivision = (referenceHigh - referenceLow) / 10; // Intervalle par division
  const intervalPerSubdivision = intervalPerDivision / 7; // Intervalle par subdivision

  // Calculer E
  const adjustedTemperature = celsius + 196; // Ajuster la température
  const wholeDivisions = Math.floor(adjustedTemperature / intervalPerDivision); // Partie entière
  const remainder = adjustedTemperature % intervalPerDivision; // Reste

  const fractionalPart = remainder / intervalPerSubdivision; // Partie fractionnaire
  const customScaleValue = wholeDivisions + fractionalPart; // Valeur sur l'échelle personnalisée

  console.log(customScaleValue)
  return customScaleValue;
}