import { result } from './../index.d';

function linksExtractor(linkList: result[]){
    return linkList?.map(link => Object.values(link).join())
}

export default async function validateList(LinkList: result[]){
    const refactoredLinkList = linksExtractor(LinkList as result[])
    const linkListWithStatus = await checkStatusLink(refactoredLinkList)
    return LinkList.map((link, index) => (
        {...link, status: linkListWithStatus[index]}
    ))
}

async function checkStatusLink (linkList: string[]) {
    const ListStatus = await Promise
    .all(
        linkList.map(async url => {
            try{
                const response = await fetch(url)
                return response.status
            }
            catch (error) {
                return controllerError(error)
            }
        })
    )
    return ListStatus
}

function controllerError(error: any): string  {
    if(error.cause.code === "ENOTFOUND"){
        return "link nao encontrado"
    } else {
        return "erro inesperado"
    }
}