# testcafe-docker-yarn-pnp

Repository with minimal setup to show testcafe docker image not working with yarn pnp

## Steps to Reproduce

1. Install dependencies: `yarn install`
2. Compile the typescript into javascript: `yarn build`
3. Run testcafe tests: `yarn start-docker`
4. Observer the following error:

   ```
    ERROR Cannot prepare tests due to the following error:

    Error: Cannot find module 'node-fetch'
    Require stack:
    - /app/build/tests/lifecycle.test.js
    - /usr/lib/node_modules/testcafe/lib/compiler/test-file/formats/es-next/compiler.js
    - /usr/lib/node_modules/testcafe/lib/compiler/compilers.js
    - /usr/lib/node_modules/testcafe/lib/compiler/index.js
    - /usr/lib/node_modules/testcafe/lib/runner/bootstrapper.js
    - /usr/lib/node_modules/testcafe/lib/runner/index.js
    - /usr/lib/node_modules/testcafe/lib/testcafe.js
    - /usr/lib/node_modules/testcafe/lib/index.js
    - /usr/lib/node_modules/testcafe/lib/cli/cli.js
    - /usr/lib/node_modules/testcafe/lib/cli/index.js
        at Object.<anonymous> (/app/tests/lifecycle.test.ts:2:1)

    Type "testcafe -h" for help.
   ```

**Note**: The test run just fine not in docker by running the command `yarn start`

## Workaround

1. Install dependencies: `yarn install`
2. Compile the typescript into javascript: `yarn build`
3. Build the docker image that contains the workaround: `docker build -t testcafe/testcafe:yarn-pnp .`
4. Run testcafe tests: `yarn start-docker-workaround`
5. Observe that the tests complete successfully
