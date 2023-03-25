import fs from "fs";
import YAML from "yaml";
import type {apiMethod, apiProperty, apiType} from "./types";
import type {ymlRoot} from "./ymlType";

const types: apiType[] = [];
const files = fs.readdirSync("./api");

files.forEach(p => {
    const file = fs.readFileSync("./api/" + p, 'utf8');
    const yaml: ymlRoot = YAML.parse(file)

    let type: apiType | undefined;

    const getType = (t: string): "interface" | "class" | "enum" | "record" => {
        if (t === "Interface")
            return "interface"
        if (t === "Class")
            return "class"
        if (t === "Enum")
            return "enum"
        if (t === "Record")
            return "record"
        throw "Unknown type: " + t;
    }

    if (!yaml.items)
        return;

    yaml.items.forEach(i => {
        if (i.type === "Interface" || i.type === "Class" || i.type === "Enum" || i.type === "Record") {
            type = {
                type: getType(i.type),
                name: i.name,
                description: i.summary ?? "",
                url: "types/" + i.name,
                namespace: i.parent,
                methods: [],
                genericParameters: [],
                properties: [],
                signature: i.syntax.content
            }
        }
        if (i.type === "Property" && type) {
            let property: apiProperty = {
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
        if (i.type === "Method" && type) {
            let method: apiMethod = {
                signature: i.syntax.content,
                description: i.summary ?? "",
                returns: {
                    type: {
                        name: i.syntax.return?.type ?? "test",
                        url: ""
                    },
                    description: i.syntax.return?.description ?? ""
                },
                parameters: i.syntax.parameters?.map(x => {
                    return {
                        name: x.id,
                        description: x.description,
                        type: {
                            name: x.type,
                            url: ""
                        }
                    }
                }) ?? [],
            }
            type.methods.push(method)
        }
    })

    if (type)
        types.push(type)
})

const namespaces: { name: string, types: apiType[] }[] = []

types.forEach(type => {
    const existingNamespace = namespaces.find(x => x.name === type.namespace);
    if(existingNamespace){
        existingNamespace.types.push(type)
        return;
    }
    namespaces.push({name: type.namespace, types: [type]})
})

// console.log(namespaces)

export {types, namespaces}
