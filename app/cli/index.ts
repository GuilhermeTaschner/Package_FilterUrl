import { result } from './../index.d';
import chalk from 'chalk';
import * as fs from 'fs';
import getData from "../index.js"
import validateList from '../RequestHTTP/validation-http.js';
const path = process.argv;

async function printText(data: string | result[], archive?: string, validate?: boolean){
    if(validate){
        console.log(
            chalk.yellow(`"Lista validada": `),
            chalk.black.bgGreenBright(archive),
            await validateList(data as result[])
        )
    } else {
        console.log(
            chalk.yellow(`"Lista de links": `),
            chalk.black.bgGreenBright(archive),
            data
        )
    }

}

export default async function processText(argumentsPath: string[]) {
    const path = argumentsPath[2];
    const validate = argumentsPath[3] === '--validation'
    try {
        fs.lstatSync(path)
    }
    catch (error){
        if(error.code === 'ENOENT'){
            console.error("Arquivo ou diretorio nao existe")
            return
        }
        else {
            console.error("Erro nao especificado")
            return
        }
    }

    if(fs.lstatSync(path).isFile()){
        const data: string | result[] = await getData(path)
        printText(data, path, validate)
    } else if(fs.lstatSync(path).isDirectory()){
        const archives: string[] = await fs.promises.readdir(path)
        archives.forEach(async (archive) => {
            const list: string | result[] = await getData(`${path}/${archive}`)
            printText(list, archive, validate)
        })
    }
}

processText(path)