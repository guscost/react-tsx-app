## Updating dependencies

Set versions in `package.json` and run:

```
npm run update
```

## Updating shadcn

To get all the shadcn components, it's a bit more work.

1. Init shadcn from somewhere outside this directory:

```
npx shadcn@latest init -d
```

2. `cd` to the new folder and add the components:

```
npx shadcn@latest add accordion alert alert-dialog aspect-ratio avatar badge breadcrumb button calendar card checkbox collapsible command context-menu dialog dropdown-menu hover-card input label menubar navigation-menu pagination popover progress radio-group resizable scroll-area select separator sheet sidebar skeleton slider switch table tabs textarea toast toggle toggle-group tooltip
```

3. Copy the contents of `@` into `src`, run `tsc` and fix any type issues.
