function convert_to_MB (megabytes: number, gigabytes: number = 1024){
    return megabytes / gigabytes;
}
console.log(convert_to_MB(20))