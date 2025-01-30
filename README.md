# react-tsx-app

React & TSX webapp with no package management or bundling

## Development

To watch for TypeScript changes and serve the app:

```
npm install -g typescript serve
tsc --watch & serve www &
```

Changes will compile on save, but you will need to refresh the browser manually.

## Deployment

Copy the contents of the `www` folder to a static file server, and you're done.
