import type {apiMethod, apiType, externType} from "./types";

let iprovider : apiType = {
    name: "IProvider",
    url: "/iprovider",
    description: "A Provider has the job to provide search results.\n" +
        "A Provider can be used at two points\n" +
        "1. It can be registered as a global provider\n" +
        "2. It can be added to a step using the StepBuilder in a search result",
    methods: [
        {
            signature: "List<SearchResult> GetSearchResults(string searchString)",
            description: "A performance critical method used to return search results.\n" +
                "In most cases this method should only return cached search results.",
            parameters: [
                {
                    name: "searchString",
                    type: {
                        name: "string",
                        url: "https://learn.microsoft.com/en-us/dotnet/api/system.string",
                        genericParameters: []
                    },
                    description: "the current search string"
                }
            ],
            exceptions: [
                {
                    type: {
                        name: "ArgumentOutOfRangeException",
                        url: "",
                        genericParameters: []
                    },
                    description: "this is a test exception"
                }
            ],
            returns: {
                type: {
                    name: "List<SearchResult>",
                    url: "https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1",
                    genericParameters: []
                },
                description: "the list of results to display"
            }
        }
    ],
    genericParameters: []
}


export {iprovider}
