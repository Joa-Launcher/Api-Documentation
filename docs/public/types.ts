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
    signature: string
}

export type apiProperty = {
    name: string,
    description: string,
    type: apiType | externType,
    signature: string
}

export {}
