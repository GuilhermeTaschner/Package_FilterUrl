import processText from "./dist/cli/index.js";

async function process(){
    const result = await processText("./archive/texto.md", true)
    console.log(result)
}

process()