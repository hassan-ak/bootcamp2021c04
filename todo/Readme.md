# Todo App with TypeScript

## Steps

Install "node" and "npm"

```
https://nodejs.org/dist/v12.0.0/
node --version
npm --version
```

Install "git"

```
https://git-scm.com/downloads
git --version
```

Install "TypeScript

```
npm install --global typescript
tsc --version
```

Install and "Editor"

```
https://code.visualstudio.com
```

Initilize the project

```
cd todo
npm init --yes
```

package.json created in result with following content

```
{
  "name": "todo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Create ysconfig.json file with following content

```
{
    "compilerOptions": {
        "target": "es2018",
        "outDir": "./dist",
        "rootDir": "./src",
        "module": "commonjs"
    }
}
```

create follwong two folders in the main directory

```
dist
src
```

do all the coding in "src" folder and then compile the code using

```
tsc
```

run the code with following command

```
node dist/index.js
```
