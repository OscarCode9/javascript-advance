let texto = "Realmente amo los gatos. Mi gato es una mascota increíble. Ella ama acurrucarse conmigo y jugar. Qué gran gato gato gato gato.";

// Reemplazar todas las ocurrencias de "gato" por "perro"
console.log(texto.replaceAll("gato", "perro"));
// Salida: "Realmente amo los perros. Mi perro es una mascota increíble. Ella ama acurrucarse conmigo y jugar. Qué gran perro perro perro perro."

// Usar una expresión regular para reemplazar todas las ocurrencias (sin importar mayúsculas/minúsculas)
let textoMezclado = "Realmente amo los GATOS. Mi gato es una mascota increíble. Ella ama acurrucarse conmigo y jugar. Qué gran gatO gatO gatO gatO.";
console.log(textoMezclado.replaceAll(/gato/gi, "perro"));
// Salida: "Realmente amo los PERROS. Mi perro es una mascota increíble. Ella ama acurrucarse conmigo y jugar. Qué gran perrO perrO perrO perrO."