//Question 1

let a = "Tanmay";
let b =46;
console.log(a+b)

//Question 2
console.log(typeof (a+b))

//Question 3
const c = 
{
    name: "Tanmay",
    section: 1,
    isPrincipal: false
}
console.log(c)
//c = "Tanmay"; ----> Not possible
//c{} -----> Not Possible

//Question 4
c['friend'] = "Aswale"
c["name"]="Kaka"
console.log(c)

//Question 5

const dict = 
{
    Grateful : "feeling or showing an appreciation of kindness",
    Genetic : "relating to genes or heredity",
    Gigantic : "of very great size",
    Gaze : "look steadily and intently",
    Abnegation :  "Renunciation of a belief or doctrine"
}

console.log(dict["Genetic"])
console.log(dict.Gaze)            //-----> also can be accesed using object_name.key_name