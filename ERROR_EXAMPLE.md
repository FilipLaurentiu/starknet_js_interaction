```text
yarn run v1.22.17
$ starknet tx_status --network alpha-goerli --contract artifacts/token/ERC20.json --error_message --hash 0x2566797355cb027ec7854d7544eda045fd4e76264a54244db00a99a3281f6ce
/home/filip/.local/lib/python3.8/site-packages/starkware/starknet/common/storage.cairo:22:5: Error at pc=0:113:
    if is_small != 0:
    ^^
Got an exception while executing a hint.
Cairo traceback (most recent call last):
./contracts/token/ERC20.cairo:23:6
func constructor{
     ^*********^
./contracts/token/ERC20.cairo:33:5
    ERC20_initializer(name, symbol, initial_supply, recipient)
    ^********************************************************^
/home/filip/Work/starknet_js_interaction/contracts/token/ERC20_base.cairo:55:5
    ERC20_mint(recipient, initial_supply)
    ^***********************************^
/home/filip/Work/starknet_js_interaction/contracts/token/ERC20_base.cairo:207:30
    let (balance: Uint256) = ERC20_balances.read(account=recipient)
                             ^************************************^
autogen/starknet/storage_var/ERC20_balances/impl.cairo:16:30
        let (storage_addr) = addr(account)
                             ^***********^
autogen/starknet/storage_var/ERC20_balances/impl.cairo:10:21
        let (res) = normalize_address(addr=res)
                    ^*************************^

```
