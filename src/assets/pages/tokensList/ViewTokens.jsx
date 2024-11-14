import Navbar from "../../components/navigation/Navbar";
import TokenCard from "../../components/tokenCard/TokenCard";

function ViewTokens() {
  return (
    <>
<Navbar/>
<div className="w-full p-8 flex justify-center mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example tokens - add as many <TokenCard /> components as needed */}
        <TokenCard category="Marketing" title="Campaign Access" description="Access to summer campaign." duration="7 Days" />
        <TokenCard category="Sales" title="Discount Voucher" description="Voucher for sales discounts." duration="30 Days" />
        <TokenCard category="Engineering" title="Tech Workshop" description="Access to exclusive workshops." duration="14 Days" />
        <TokenCard category="HR" title="Onboarding Pass" description="Pass for new employees." duration="No Expiry" />
        {/* Add more TokenCard components as needed */}
      </div>
    </div>
    </>

  );
}

export default ViewTokens;
