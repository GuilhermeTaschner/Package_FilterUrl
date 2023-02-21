import processText from "./dist/cli/index.js"

async function ver(){
    let result = await processText("./arquivos/texto.md", true)
    console.log(result)
}

ver()