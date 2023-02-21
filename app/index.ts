import * as fs from 'fs';
import { result } from './index.d';

function fsError(error: any) {
    throw new Error((`${error.code} Falha ao buscar arquivo:`))
}

export function extractorLink(text: string): result[] | string {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
    const getLinks = [...text.matchAll(regex)]
    const result = getLinks.map(Link => ({[Link[1]]: Link[2]}))
    return result.length !== 0 ? result : "Without links"
}

export default async function getData(addresData: string){
    try{
        const encoding = 'utf8';
        const responseFile = await fs.promises.readFile( addresData, encoding)
        return extractorLink(responseFile)
    }
    catch (error) {
        fsError(error)
    }
}
