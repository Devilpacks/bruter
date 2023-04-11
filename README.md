# bruter(wrong method)
## Prepare
Create *.env* file with:
```
ETH_RPC="localhost:8545"
PHASE=0,0,0,0,0,0,0,0,0,0,0,0
```
ETH_RPC - it's your node rpc url

PHASE - it's mnemonic phrase index array, you can change numbers between 0 and 2047

## Start
```
npm run start
```
or use docker-compose
```
docker-compose up -d
```