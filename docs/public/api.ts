import type {apiMethod, apiType, externType} from "./types";

let stringType : externType = {
    name: "string",
    genericParameters: []
}

let iProvider : apiType = {
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
                    type: stringType,
                    description: "the current search string"
                }
            ],
            exceptions: [
                {
                    type: {
                        name: "ArgumentOutOfRangeException",
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
    genericParameters: [],
    properties: [],
    namespace: "JoaLauncher.Api.Providers",
    signature: "public interface IProvider"
}

let searchResult : apiType = {
    name: "SearchResult",
    url: "./searchresult",
    description: "Represents a search result which will be displayed to the user",
    genericParameters: [],
    methods: [
        {
            signature: "public abstract void Execute(IExecutionContext executionContext)",
            returns: {
                type: {
                    name: "void",
                    genericParameters: []
                },
                description: "void"
            },
            description: "The method which gets called if the user executes the search result",
            exceptions: [],
            parameters: [
                {
                    name: "executionContext",
                    type: {
                        name: "IExecutionContext",
                        genericParameters: []
                    },
                    description: "dont know"
                }
            ]
        }
    ],
    properties: [
        {
            name: "Title",
            type: stringType,
            description: "The title is a big text displayed on the search result",
            signature: "public required string Title { get; init; }"
        },
        {
            name: "Description",
            type: stringType,
            description: "The description is a smaller text below the title",
            signature: "public required string Description { get; init; }"
        },
        {
            name: "Icon",
            type: stringType,
            description: "The Icon displayed next to the title and description\n" +
                "Should contain the path to the icon. URLs are not supported",
            signature: "public required string Icon { get; init; }"
        },
        {
            name: "Actions",
            type: stringType,
            description: "A list of <see cref=\"ContextAction\"/> which represent the\n" +
                "possible actions the user could execute on this search result",
            signature: "public List<ContextAction>? Actions { get; set; }"
        }
    ],
    signature: "public abstract class SearchResult",
    namespace: "JoaLauncher.Api"
}


export {iProvider, searchResult}
