```
Installation command: npm i --save-dev @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-terser @rollup/plugin-typescript  rollup rollup-plugin-dts rollup-plugin-peer-deps-external tslib

1- npm run build
2- npm login --registry=https://npm.pkg.github.com
username:qasirdev
password: GPA TOKEN

3- npm publish
4- npm install @qasirdev/common-ui@0.0.1

Github actions:
1- publish.yml 
2- created new secret
  githu => settings => developer settings => personal access token
  => with read:packages and write:packages => name (e.g GPR_TOKEN)
3- repo common-ui => settings => secrets and variables => actions
 => repository secrets => create new reposity secrets (e.g GPR_TOKEN) with step 2 secrets.
4- use it in actions: GPR_TOKEN: ${{ secrets.GPR_TOKEN }}
5- run action to published new package version

```

<!--
actions with aws deploy: https://www.youtube.com/watch?v=DCFoBuzGuJs
https://github.com/tkssharma/ci-cd-demo/blob/main/.github/workflows/deploy.yml

action with examples: https://www.youtube.com/watch?v=sTL9qdeuINM
https://github.com/codebytes/github-actions-demos/blob/main/.github/workflows/00-basic.yml

https://medium.com/tri-petch-digital/how-to-create-react-component-library-and-publish-to-private-github-package-repository-3528ba37cb77

https://www.youtube.com/watch?v=sYQAjuqTTks
-->