import * as fs from 'fs';
function fsError(error) {
    throw new Error((`${error.code} Falha ao buscar arquivo:`));
}
export function extractorLink(text, HTTP) {
    const regexHTTP = /\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const getLinks = HTTP ? [...text.matchAll(regexHTTP)] : [...text.matchAll(regex)];
    const result = HTTP ? getLinks.map(link => ({ "Link": link[1] })) : getLinks.map(Link => ({ [Link[1]]: Link[2] }));
    return result.length !== 0 ? result : "Without links";
}
export default async function getData(addresData, HTTP) {
    try {
        const encoding = 'utf8';
        const responseFile = await fs.promises.readFile(addresData, encoding);
        return extractorLink(responseFile, HTTP);
    }
    catch (error) {
        fsError(error);
    }
}
