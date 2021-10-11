function changeWords(string){
    string = string.split(" ");
    for(let i = 0; i < string.length; i++ ){
        if(string[i].length >= 5){
            string[i] = string[i].split("").reverse().join("");
        }
        
    }
    string = string.join(" ");
    return string;
}

console.log(changeWords("Hey fellow interns"));
console.log(changeWords("This is a test"));
console.log(changeWords("This is another test"));
console.log(changeWords("Hello my name is Oleksii and i want to work in RADENCY"));


