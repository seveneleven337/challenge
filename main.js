var TypeShortHandMap = new Map([
    ["XMLSchema", "xsd"],
    ["22-rdf-syntax-ns", "rdf"],
]);
var myTest = getType("http://www.w3.org/2001/22-rdf-syntax-ns#string");
//the value of myTest should be "xsd:string"
function getType(s) {
    var noPrefix = s;
    var splitted = s.split("#");
    var typeShortHand = splitted[0].slice(s.lastIndexOf("/") + 1, s.length - 1);
    //Timos fix
    if (TypeShortHandMap.has(typeShortHand)) {
        typeShortHand = TypeShortHandMap.get(typeShortHand);
    }
    var ret = typeShortHand + ":" + splitted[splitted.length - 1];
    console.log(ret);
    return ret;
}
