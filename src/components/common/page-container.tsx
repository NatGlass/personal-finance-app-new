function PageContainer({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="container p-0">
      <div className="mx-4 my-6 md:mx-10 md:my-8 grid grid-cols-8 lg:grid-cols-12">
        {children}
      </div>
    </main>
  );
}

export default PageContainer;
