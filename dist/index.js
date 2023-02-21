import * as fs from 'fs';
function fsError(error) {
    throw new Error((`${error.code} Falha ao buscar arquivo:`));
}
export function extractorLink(text) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const getLinks = [...text.matchAll(regex)];
    const result = getLinks.map(Link => ({ [Link[1]]: Link[2] }));
    return result.length !== 0 ? result : "Without links";
}
export default async function getData(addresData) {
    try {
        const encoding = 'utf8';
        const responseFile = await fs.promises.readFile(addresData, encoding);
        return extractorLink(responseFile);
    }
    catch (error) {
        fsError(error);
    }
}
