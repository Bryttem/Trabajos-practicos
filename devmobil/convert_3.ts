function convert_of_GB_toMB (gigabytes: number, valueMB: number = 1024){
    let megabytes: number = (gigabytes * valueMB);
    return megabytes;
}
console.log(convert_of_GB_toMB(16))