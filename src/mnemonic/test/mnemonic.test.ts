// import {describe, expect, test} from '@jest/globals';
import { MnemonicProvider } from "../index";

describe('mnemonic provider test', () => {
    const provider = new MnemonicProvider()
    test('getPhrase()', () => {
        const phrase = provider.getPhrase([1,2,3,4,5,6,7,8,9,10,11,12])
        expect(phrase).toBe('ability able about above absent absorb abstract absurd abuse access accident account');
    });
    test('getNextIndex()', () => {
        const indexArray = provider.getNextIndex([1,2,3,4,5,6,7,8,9,10,11,12])
        console.log(indexArray);
        
        // expect(phrase).toBe('ability able about above absent absorb abstract absurd abuse access accident account');
    });
});