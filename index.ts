import {
  compileCalldata,
  shortString,
  stark,
  defaultProvider,
  number,
  uint256,
  AddTransactionResponse,
} from "starknet";
import { utils } from "ethers";

function getUint256CalldataFromBN(bn: number.BigNumberish) {
  return { type: "struct" as const, ...uint256.bnToUint256(bn) };
}

async function main() {
  const erc20Artifact = require("./artifacts/token/ERC20.json");
  const initial_supply = getUint256CalldataFromBN(
    utils.parseUnits("1000000000000000000", 18).toString()
  );

  const constructorArgs = compileCalldata({
    name: number.toBN(shortString.encodeShortString("TestToken")).toString(),
    symbol: number.toBN(shortString.encodeShortString("TKN")).toString(),
    initial_supply,
    recipient: number.toBN(stark.randomAddress()).toString(),
  });

  console.log("Deployment starts...");
  const transactionResponse: AddTransactionResponse =
    await defaultProvider.deployContract(erc20Artifact, constructorArgs, 1);

  console.log("Tx hash: ", transactionResponse.transaction_hash);

  try {
    await defaultProvider.waitForTx(transactionResponse.transaction_hash);
    console.log("Finish deployment");
  } catch (error) {
    console.log("Deployment fail");
  }
}

main();
