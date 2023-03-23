import fs from "fs";
import YAML from "yaml";
import type {apiProperty, apiType} from "./types";
import type {ymlRoot} from "./ymlType";

const types : apiType[] = [];
const files = fs.readdirSync("./api");

files.forEach(p => {
    const file = fs.readFileSync("./api/" + p, 'utf8');
    const yaml: ymlRoot = YAML.parse(file)

    let type: apiType | undefined;

    const getType = (t: string) : "interface" | "class" | "enum" | "record" => {
        if(t === "Interface")
            return "interface"
        if(t === "Class")
            return "class"
        if(t === "Enum")
            return "enum"
        if(t === "Record")
            return "record"
        throw "Unknown type: " + t;
    }

    if(!yaml.items)
        return;

    yaml.items.forEach(i => {
        if(i.type === "Interface" || i.type === "Class" || i.type === "Enum" || i.type === "Record" ){
            type = {
                type: getType(i.type),
                name: i.name,
                description : i.summary ?? "",
                url : "/" + i.name.toLowerCase(),
                namespace : i.parent,
                methods : [],
                genericParameters : [],
                properties : [],
                signature: i.syntax.content
            }
        }
        if(i.type === "Property" && type){
            let property : apiProperty = {
                type: {
                    name: i.syntax.return?.type ?? "property does not return",
                    url: ""
                },
                signature: i.syntax.content,
                description: i.summary ?? "",
                name: i.name
            }
            type.properties.push(property)
        }
    })

    if(type)
        types.push(type)
})

console.log("TEST")
types.forEach(x => {
    console.log(x.name)
})



export {types}
