import { EthereumProvider, EthereumOptions } from "./ethereum";
import { MnemonicProvider } from "./mnemonic";

import { ETH_RPC,PHASE } from "./utlis/config";

async function bootstrap() {
    console.log('Starting BRUTER');
    const options: EthereumOptions = {
        url: ETH_RPC
    }
    const mnemonicProvider = new MnemonicProvider();
    const ethProvider = new EthereumProvider(options);
    const phase = PHASE.split(',').map(Number);
    const maxValue = 2047;
    const lastIndex = phase.length - 1;
    let currentCombination = [...phase];
    try {
        while (true) {
            let carry = true;
            for (let i = lastIndex; i >= 0; i--) {
                if (carry) {
                    currentCombination[i]++;
                    if (currentCombination[i] > maxValue) {
                        currentCombination[i] = 0;
                        carry = true;
                    } else {
                        carry = false;
                    }
                }
            }
            if (carry) {
                break;
            }
            console.time('bruter');
            const mnemonic = mnemonicProvider.getPhrase(currentCombination);
            const address = ethProvider.addressFromMnemonic(mnemonic);
            const balance = await ethProvider.getBalanceByAddress(address);
            console.timeEnd('bruter');
            // console.table({address: address, balance: balance.toString()})
            if (balance.gt(0)) {
                console.log(mnemonic);
                process.exit(1)
            }
            console.log(JSON.stringify(currentCombination));
        }
    } catch (error) {
        console.log(phase);
        console.log(error);
    }
}
bootstrap()