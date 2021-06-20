# Architecture

### Directory structure

All screens should follow this pattern:

```
screenFoo/
    FooScreen.tsx
    tests/
        sometest.spec.tsx
        testData.fixture.ts
    components/
        FooHeader.tsx
        SpecificFooButton.tsx
    constants.ts
    useFooHook.ts
    types.ts
    utils.ts
    data.ts

```

That way its easy to know what to look for when scanning code.

### Screen checklist ✅

All screens should have considered:

-   dark mode
-   states: loading, errors, empty, paging, pop-up messages
-   pixel perfect from figma 👄
-   heavy logic should have tests
-   localization
-   sentry error handling
-   analytics
-   logging essential actions
-   performance tracing example
