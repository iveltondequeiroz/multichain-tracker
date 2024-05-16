import TokenList from "./TokenList"
import NFTList from "./NFTList"
import { useState } from "react";

type ListProps = {
  accountAddress: string;
}

const AssetsTabs = ({accountAddress}:ListProps) => {  
  const  [balancesSelected, setBalancesSelected] = useState(true);

  return (
    <main>
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" 
               className="tab [--tab-bg:lightblue] [--tab-border-color:gray] text-black" aria-label="BALANCES"
               checked={balancesSelected} onChange={()=> setBalancesSelected(!balancesSelected) }/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TokenList accountAddress={accountAddress}/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" 
          className="tab [--tab-bg:lightblue] [--tab-border-color:grey] text-black isActive" aria-label="NFTs"
          checked={!balancesSelected} onChange={()=> setBalancesSelected(!balancesSelected) }/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <NFTList accountAddress={accountAddress}/>
        </div>
    </div>
  </main>
  )
}

export default AssetsTabs