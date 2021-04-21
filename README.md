<p align="center">
    <img width="60%" src="public\logo.svg">
</p>
<h1 align="center">Podcastr - NLW #5</h1>


## About

Web application to listen podcast. Developed during event NLW#05 from @rocketseat.


## Getting Started

First, run the development server:

```bash
yarn dev
```

## Fix SASS import
```bash
npm install -D typescript-plugin-css-modules
```
tsconfig.json
```bash
{
  "compilerOptions": {
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```
## JSON Server

Install
```bash
yarn add json-server -D
```
Run
```bash
yarn server
```
