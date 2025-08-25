import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 justify-items-center">
      <main className="flex flex-col gap-[32px] items-center w-10/12 object-center">
        <Navigation />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
