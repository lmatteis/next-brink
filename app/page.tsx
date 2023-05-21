export default function Home() {
  return (
    <div>
      <div className="flex overflow-auto gap-2 h-32">
        <div className="bg-cold-blue w-[85vw] lg:w-auto lg:flex-1 shrink-0">
          ciao
        </div>
        <div className="bg-cold-blue w-[85vw] lg:w-auto lg:flex-1 shrink-0">
          ciao
        </div>
      </div>
      <h2>Ciao</h2>
      <div className="flex gap-2 h-80 overflow-auto">
        <div className="flex gap-2 flex-row lg:flex-col flex-1">
          <div className="bg-cold-blue flex-1 w-[85vw] lg:w-auto">1</div>
          <div className="bg-cold-blue flex-1 w-[85vw] lg:w-auto">2</div>
        </div>
        <div className="flex gap-2 flex-row lg:flex-col flex-1">
          <div className="bg-cold-blue flex-1 w-[85vw] lg:w-auto">3</div>
        </div>
        <div className="flex gap-2 flex-row lg:flex-col flex-1">
          <div className="bg-cold-blue flex-1 w-[85vw] lg:w-auto">4</div>
          <div className="bg-cold-blue flex-1 w-[85vw] lg:w-auto">5</div>
        </div>
      </div>
      <h2>Ciao</h2>
    </div>
  );
}
