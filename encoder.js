function  encodeText() {
    let myDiv = document.getElementById("encodedDiv");
    myDiv.style.display === "none";
    let req = document.getElementById("mytext").value;
    let res = "";
    for (i=0; i<req.length;i++) {
    
        switch (req[i]) {
            case "a":
                res = res.concat("b");
                break
            case "b":
                res = res.concat("d");
                break
            case "c":
                res = res.concat("f");
                break
            case "d":
                res = res.concat("h");
                break
            case "e":
                res = res.concat("j");
                break
            case "f":
                res = res.concat("l");
                break
            case "g":
                res = res.concat("n");
                break
            case "h":
                res = res.concat("p");
                break
            case "i":
                res = res.concat("r");
                break
            case "j":
                res = res.concat("t");
                break
            case "k":
                res = res.concat("k");
                break
            case "l":
                res = res.concat("x");
                break
            case "m":
                res = res.concat("z");
                break
            case "n":
                res = res.concat("y");
                break
            case "o":
                res = res.concat("w");
                break
            case "p":
                res = res.concat("u");
                break
            case "q":
                res = res.concat("s");
                break
            case "r":
                res = res.concat("q");
                break
            case "s":
                res = res.concat("o");
                break
            case "t":
                res = res.concat("m");
                break
            case "u":
                res = res.concat("k");
                break
            case "v":
                res = res.concat("i");
                break
            case "w":
                res = res.concat("g");
                break
            case "x":
                res = res.concat("e");
                break
            case "y":
                res = res.concat("c");
                break
            case "z":
                res = res.concat("a");
                break
            case "0":
                res = res.concat(1);
                break
            case "1":
                res = res.concat(3);
                break
            case "2":
                res = res.concat(6);
                break
            case "3":
                res = res.concat(7);
                break
            case "4":
                res = res.concat(9);
                break
            case "5":
                res = res.concat(8);
                break
            case "6":
                res = res.concat(6);
                break
            case "7":
                res = res.concat(4);
                break
            case "8":
                res = res.concat(2);
                break
            case "9":
                res = res.concat(0);
                break

        }

}
myDiv.style.display = "block";
myDiv.innerHTML=res;
}
