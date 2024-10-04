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
  const T_b = -196; // Température basse en °C
  const intervalleTotal = 124.85; // Intervalle total en °C
  const nombreTotalSubdivisions = 77; // Nombre total de subdivisions (11 divisions principales * 7 subdivisions)

  // Calcul de la conversion
  const grenier = ((celsius - T_b) / intervalleTotal) * nombreTotalSubdivisions;

  return grenier;
}
