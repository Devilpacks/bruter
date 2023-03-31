import { english } from "./english";

export class MnemonicProvider {
    constructor() {
    }
    getPhrase(indexArray: number[]) {
        let phrase: string[] =[]
        indexArray.forEach(i=>{
            const word = english[i];
            phrase.push(word)
        })
        return phrase.join(' ')
    }
}
