function TransactionsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full col-span-full h-full rounded-[12px] bg-white p-8">{children}</div>
  );
}

export default TransactionsContainer;
