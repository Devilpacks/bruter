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
    getNextIndex(indexArray: number[]) {
        // between 0 and 2047
        const copy = indexArray
        for (let i = 0; i < indexArray.length; i++) {
            const element = indexArray[i];
            if (element<2047) {
                copy[i]=element+1
                return copy
            }
        }
    }
}
