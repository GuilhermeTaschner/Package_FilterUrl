import * as fs from 'fs';
import getData, { extractorLink } from "../index.js";
import validateList from '../RequestHTTP/validation-http.js';
export default async function processText(argumentsPath, validation) {
    const path = argumentsPath;
    try {
        fs.lstatSync(path);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            console.error("Arquivo ou diretorio nao existe");
            try {
                const extract = extractorLink(path);
                return validation ? await validateList(extract) : extract;
            }
            catch (error) {
                console.log("Argumentos inesperados");
            }
            return;
        }
        else {
            console.error("Erro nao especificado");
            return;
        }
    }
    const stats = fs.lstatSync(path);
    if (stats.isFile()) {
        const data = await getData(path);
        return validation ? await validateList(data) : data;
    }
    else if (stats.isDirectory()) {
        const archives = await fs.promises.readdir(path);
        return Promise.all(archives.map(async (archive) => {
            const list = await getData(`${path}/${archive}`);
            return validation ? await validateList(list) : list;
        }));
    }
}
