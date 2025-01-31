## Updating dependencies

```
npm run update
```

## Updating shadcn

To get all the shadcn components, it's a bit more work.

1. Init the shadcn in a new Next.js folder outside this directory:

```
npx shadcn@latest init -d
```

2. `cd` to the directory and add the components:

```
npx shadcn@latest add accordion alert alert-dialog aspect-ratio avatar badge breadcrumb button calendar card carousel checkbox collapsible command context-menu dialog dropdown-menu hover-card input label menubar navigation-menu pagination popover progress radio-group resizable scroll-area select separator sheet sidebar skeleton slider switch table tabs textarea toast toggle toggle-group tooltip
```

3. Copy the contents of `@` into `src`, and add the AMD directives.
