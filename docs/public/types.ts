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
    url: string,
    genericParameters: apiType[]
}

export type apiType = {
    name: string,
    genericParameters: apiType[],
    url: string,
    description: string,
    methods: apiMethod[],
}

export {}
