import { getUsersBalance } from "@/db/getUsersBalance";
import BalanceItem from "./balance-item";

async function BalanceSummary() {
  // manually add the balance data in prisma studio for now
  const balanceData = await getUsersBalance();

  return (
    <section className="flex flex-col gap-y-3 md:gap-6 md:flex-row col-span-8 lg:col-span-12">
      <BalanceItem
        title="Current Balance"
        value={balanceData?.currentBalance || 0}
        inverted
      />
      <BalanceItem title="Income" value={balanceData?.income || 0} />
      <BalanceItem title="Expenses" value={balanceData?.expenses || 0} />
    </section>
  );
}

export default BalanceSummary;
