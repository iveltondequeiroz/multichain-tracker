import "@covalenthq/goldrush-kit/styles.css";
import {
    GoldRushProvider,
    NFTWalletTokenListView,
} from "@covalenthq/goldrush-kit";

type ListProps = {
  accountAddress: string;
}

const NFTList = ({accountAddress}: ListProps) => {
  return (
      <div>
        <GoldRushProvider
          apikey={import.meta.env.VITE_COVALENT_KEY}
          mode="dark"
          color="emerald"
        >
          <NFTWalletTokenListView
            chain_names={[
              "eth-mainnet",
              "matic-mainnet",
              "bsc-mainnet",
              "avalanche-mainnet",
              "optimism-mainnet",
            ]}
            address={accountAddress}
          />
        </GoldRushProvider>
      </div>
  )
}

export default NFTList