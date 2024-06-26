import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import ChainsBadges from "./ChainsBadges";

type SearchProps = {
  onSearch: () => void;
}

const SearchBar = ({onSearch}: SearchProps) => {
  return (
    <section className="flex items-center justify-center text-center text-3xl">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <input type="text" id="accountAddress" placeholder="Type address or ENS here" className="input input-bordered w-full max-w-xs m-2" />
            <button onClick={onSearch} className="btn">
              <FaMagnifyingGlassDollar />
            </button>
           <ChainsBadges />
          </div>
        </div>
      </section>
  )
}

export default SearchBar