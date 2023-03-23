export type apiMethod = {
    signature: string,
    description: string,
    parameters: apiParameter[],
    returns: apiReturn,
    exceptions: apiException[]
}

export type apiParameter = {
    name: string
    type: apiType | externType,
    description: string
}

export type apiReturn = {
    type: apiType | externType,
    description: string
}

export type apiException = {
    type: apiType | externType,
    description: string
}

export type externType = {
    name: string,
    genericParameters: apiType[]
}

export type apiType = {
    namespace: string
    name: string,
    genericParameters: apiType[],
    url: string,
    description: string,
    methods: apiMethod[],
    properties: apiProperty[],
    signature: string,
    type: "interface" | "class" | "enum" | "record"
}

export type apiProperty = {
    name: string,
    description: string,
    type: {
        name: string,
        url: string
    }
    signature: string
}

export {}
