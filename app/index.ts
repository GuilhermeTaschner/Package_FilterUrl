import * as fs from 'fs';
import { result } from './index.d';

function fsError(error: any) {
    throw new Error((`${error.code} Falha ao buscar arquivo:`))
}

export function extractorLink(text: string, HTTP?: boolean): result[] | string {
    const regexHTTP = /\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
    const getLinks = HTTP ? [...text.matchAll(regexHTTP)] : [...text.matchAll(regex)]
    const result = HTTP ? getLinks.map(link => ({"Link": link[1]})) : getLinks.map(Link => ({[Link[1]]: Link[2]}))
    return result.length !== 0 ? result : "Without links"
}

export default async function getData(addresData: string, HTTP?: boolean) {
    try{
        const encoding = 'utf8';
        const responseFile = await fs.promises.readFile( addresData, encoding)
        return extractorLink(responseFile, HTTP)
    }
    catch (error) {
        fsError(error)
    }
}
