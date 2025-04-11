Example repo to demonstrate the issue: https://github.com/vitest-dev/vitest/issues/7827

Steps to reproduce:

* Run `npm install`
* Run `npm run build`
* Run `npm run test`

You will see one test failing which can not find the context provider. The context provider can be easily resolved in the similiar use-case while running the app via vite: `npm run app`