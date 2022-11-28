## What is this?

The edge runtime, used for running middleware file, can also be configured for running pages with `getServerSideProps()`. 

The edge runtime does not support Node.js built-in modules, like `fs` or `path`, so importing them fails.
Middleware & API Route have a user-friendly error report, in such situation:

```shell
Error: The edge runtime does not support Node.js 'fs' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime
```

Ideally, pages with gSSP should have the same. Current report is:

```shell
./pages/index.js:1:0
Module not found: Can't resolve 'fs'
> 1 | import fs from 'fs';
```

To reproduce, simply runs `pnpm build`: the build will fail with the error.

To see how an API function reports the same error:

1. comment `runtime: 'experimental-edge'` in `next.config.js` 
1. start dev server `pnpm dev`
1. hit `http://localhost:3000/api/hello`
