const TypeShortHandMap = new Map<string, string>([
    ["XMLSchema", "xsd"],
    ["22-rdf-syntax-ns", "rdf"],
  ]);

  const myTest = getType("http://www.w3.org/2001/XMLSchema#string");
  //the value of myTest should be "xsd:string"

function getType(s: string): string {
    const noPrefix = s;
    const splitted = s.split("#");
    let typeShortHand = splitted[0].slice(s.lastIndexOf("/")+1,s.length-1);

    //Timos fix
    if (TypeShortHandMap.has(typeShortHand as string)) {
        typeShortHand = TypeShortHandMap.get(typeShortHand as string) as string;
        }
    const ret = (typeShortHand + ":" + splitted[splitted.length - 1] as string);
    
    console.log(ret)
    return ret
}