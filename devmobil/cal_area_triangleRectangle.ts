function Cal_triangleRec (base: number, height: number, dividir: number = 2) {
    let area: number = (base * height) / dividir;
    return area;
}

console.log(Cal_triangleRec(5, 8) + "cm²")