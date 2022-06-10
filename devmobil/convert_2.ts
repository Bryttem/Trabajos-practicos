function convertCE (farenheit: number, celsius: number = 32, dividir: number = 1.8) {
    return (farenheit - celsius) / dividir;
}

console.log(convertCE(150) + "°C")