import { EtherscanProvider } from 'ethers';

export default class MyEtherscanProvider extends EtherscanProvider {

    constructor() {
        super("sepolia", "795PVE73QZCF9RHF33PF5Z34XG3S6C61A5");
    }

    async getHistory(address, startBlock, endBlock) {
        const params = {
            action: "txlist",
            address,
            startblock: ((startBlock == null) ? 0 : startBlock),
            endblock: ((endBlock == null) ? 99999999 : endBlock),
            sort: "asc"
        };

        return this.fetch("account", params);
    }
}
