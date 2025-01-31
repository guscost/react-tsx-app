# react-tsx-app

React & TSX webapp with no package management or bundling

## Development

To watch for TypeScript changes and serve the app:

```
npm install -g typescript serve
tsc --watch & serve www &
```

Changes will compile on save, but you will need to refresh the browser manually.

## Modules

Modules in `src` are transpiled as `amd`. All but the entrypoint should have a directive naming the module:

```
/// <amd-module name="hooks/use-mobile"/>
```

By convention, shadcn/ui component names are prefixed with `ui/`, and application components are capitalized and not prefixed. Only one module may omit a name declaration. It's a little bit clunky, but this whole architecture is more like "Previous.js" anyway.

## Deployment

After transpiling with `tsc`, copy the contents of the `www` folder to a static file server, and you're done.

## Included dependencies

- `react`
- `react-dom`
- `lucide-react`
- `@tailwindcss/browser`
- `@radix-ui/*`
- Basic `shadcn` dependencies: `clsx`, `class-variance-authority`, `tailwind-merge`, etc

### Updating dependencies

To update included dependencies, set versions and run `npm run update` in the `update` folder.

## Wish list

Here are some things I'd like to add:

### Asynchronous module loading
- Allows circular references
- Removes need to embed every script in its own `<script>` tag

### Fully-typed shadcn dependencies
- `react-day-picker`
- `react-resizable-panels`
- Missing components: Carousel, Chart, Data Table, Form, Input OTP, Sonner
