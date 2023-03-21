---
title: "IProvider Interface"
description: "A Provider has the job to provide search results.
A Provider can be used at two points:
1. It can be registered as a global provider
2. It can be added to a step using the StepBuilder in a search result"
---

Namespace: `JoaLauncher.Api.Providers`

A Provider has the job to provide search results.
A Provider can be used at two points:
1. It can be registered as a global provider
2. It can be added to a step using the StepBuilder in a search result

```CSharp
public interface IProvider
```

## Methods
| Name                                  | Description                                                                                                                      |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| GetSearchResults(string searchString) | A performance critical method used to return search results. In most cases this method should only return cached search results. |
