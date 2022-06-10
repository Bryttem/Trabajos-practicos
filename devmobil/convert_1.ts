function convertFA(celsius: number, farenheit: number = 1.8, sumar: number = 32) {
    return (celsius * farenheit) + sumar;
}

console.log(convertFA(90) + "°F")