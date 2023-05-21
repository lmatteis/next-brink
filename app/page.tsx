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

      <div className="bg-black text-white">
        <div className="flex gap-2 overflow-auto flex-col pt-[100px]">
          <div className="flex gap-2 flex-col lg:flex-row">
            <div className="text-[42px] leading-none flex-1">
              <div className="mr-[200px]">
                Proin enim enim, tincidunt consequat sollicitudin.
              </div>
            </div>
            <div className="flex-1 text-[21px]">
              Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel
              leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet
              pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam
              ac. Pellentesque non augue ullamcorper arcu facilisis bibendum.
              Nulla quis tincidunt turpis. Sed quis erat arcu.{" "}
            </div>
          </div>
          <div className="flex gap-2 flex-col-reverse lg:flex-col">
            <div className="flex gap-2 flex-col lg:flex-row flex-1">
              <div className="flex-1 hidden lg:block"></div>
              <div className="flex-1 text-[21px]">
                Phasellus gravida felis quis ex mattis, sed suscipit tellus
                tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh
                vestibulum ornare. Morbi porta, enim hendrerit consectetur
                ultrices, libero dui ultricies libero, vel rutrum sem magna quis
                augue. Nulla quis magna at lorem sodales gravida.
              </div>
            </div>
            <div className="flex gap-2 flex-row lg:flex-col">
              <div className="bg-cold-blue w-full h-[273px] lg:w-[55%] lg:h-[430px]">
                ciao
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-end">
            <div className="bg-cold-blue lg:bg-[#4425B3] h-[273px] lg:w-[55%] lg:h-[430px] lg:-mt-[100px]">
              6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
