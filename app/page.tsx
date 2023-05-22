export default function Home() {
  return (
    <div>
      <div className="mt-[230px] lg:mt-[270px] px-[10px] lg:px-[20px] mb-[40px]">
        <div className="text-[21px] mb-3 lg:mb-5">Luctus vitae.</div>
        <div className="text-[36px] lg:text-[84px] leading-[39px] lg:leading-[92px] w-4/5">
          Utrum ut placerat nec, varius sit amet lacus.
        </div>
      </div>
      <div className="flex overflow-auto gap-2 h-[776px]">
        <div className="bg-cold-blue w-[85vw] lg:w-auto lg:flex-1 shrink-0"></div>
        <div className="bg-cold-blue w-[85vw] lg:w-auto lg:flex-1 shrink-0"></div>
      </div>
      <div className="mx-[10px] lg:mx-auto lg:w-3/6 mt-[100px] mb-[40px] lg:mb-[100px]">
        <div className="text-[32px] lg:text-[42px] leading-[35px] lg:leading-[46px] text-center mb-[40px]">
          Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.
        </div>
        <div className="text-[21px] leading-[33px] text-left flex flex-col gap-8">
          <div>
            Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.
            Quisque maximus ante sapien, at pharetra sem sagittis eu. Maecenas
            nibh leo, interdum ac malesuada quis, tempus vel lacus.
          </div>
          <div>
            Aliquam quis velit et nunc scelerisque auctor quis id lacus. Proin
            sem turpis, rutrum ut placerat nec, varius sit amet lacus. Praesent
            sed viverra lorem.
          </div>
        </div>
      </div>
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
