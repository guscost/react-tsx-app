# arthropod

React & TSX webapp with no package management or bundling

## Development

To watch for TypeScript changes and serve the app:

```
npm install -g typescript serve
tsc --watch & serve www &
```

Changes will compile on save, but you will need to refresh the browser manually.

## Deployment

After transpiling with `tsc`, copy the contents of the `www` folder to a static file server, and you're done.

## Included dependencies

- `react`
- `react-dom`
- `lucide-react`
- `tailwindcss`
- `@radix-ui/*`
- `shadcn` dependencies: `clsx`, `zod`, etc
- `react-day-picker` v9 and custom calendar

### Updating dependencies

See `update/README.md` for instructions on updating the included dependencies.

## Wish list

Here are some things I'd like to fix:

### Fully-typed shadcn dependencies

- `react-resizable-panels`
