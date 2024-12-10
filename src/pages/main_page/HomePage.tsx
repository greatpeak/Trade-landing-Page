import Home from "./Home";
import Currency from "./Currency";
import Coins from "./Coin";
import Trade from "./Trade";
import UserExp from "./UserExp";

export default function HomePage() {
  return (
    <>
      <div className="md:pt-[120px] pt-[100px]">
        <Home />
      </div>
      <Currency />
      <Coins />
      <Trade />
      <UserExp />
    </>
  );
}
