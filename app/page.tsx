import { Column } from "./components/Column";
import { Content } from "./components/Content";
import { Description } from "./components/Description";
import { Grid } from "./components/Grid";
import { Heading } from "./components/Heading";
import { Hero } from "./components/Hero";
import { Highlight } from "./components/Highlight";
import { Info } from "./components/Info";
import { InfoHeader } from "./components/InfoHeader";
import { InfoTop } from "./components/InfoTop";
import { Item } from "./components/Item";
import { MainDescription } from "./components/MainDescription";
import { Slide } from "./components/Slide";
import { Slider } from "./components/Slider";
import { Subtitle } from "./components/Subtitle";
import { Title } from "./components/Title";

export default function Home() {
  return (
    <div>
      <Hero>
        <Subtitle>Luctus vitae.</Subtitle>
        <Title>Utrum ut placerat nec, varius sit amet lacus.</Title>
      </Hero>

      <Slider>
        <Slide />
        <Slide />
        {/* feel free to add more <Slide /> components here */}
      </Slider>

      <Highlight>
        <Heading>
          Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.
        </Heading>
        <Description>
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
        </Description>
      </Highlight>

      <Grid>
        {/* this list of items becomes h-scrollable on small viewports */}
        <Column>
          <Item></Item>
          <Item></Item>
        </Column>
        <Column>
          <Item></Item>
        </Column>
        <Column>
          <Item></Item>
          <Item></Item>
        </Column>
      </Grid>

      <Content>
        <Info>
          <InfoTop>
            <InfoHeader>
              Proin enim enim, tincidunt consequat sollicitudin.
            </InfoHeader>
            <MainDescription>
              Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel
              leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet
              pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam
              ac. Pellentesque non augue ullamcorper arcu facilisis bibendum.
              Nulla quis tincidunt turpis. Sed quis erat arcu.{" "}
            </MainDescription>
          </InfoTop>
          {/* Note how we're changing flex direction on small viewports */}
          <div className="flex gap-10 flex-col-reverse lg:flex-col">
            <div className="flex gap-2 flex-col lg:flex-row flex-1 mx-[10px] lg:mx-0">
              <div className="flex-1 hidden lg:block"></div>
              <MainDescription>
                Phasellus gravida felis quis ex mattis, sed suscipit tellus
                tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh
                vestibulum ornare. Morbi porta, enim hendrerit consectetur
                ultrices, libero dui ultricies libero, vel rutrum sem magna quis
                augue. Nulla quis magna at lorem sodales gravida.
              </MainDescription>
            </div>
            <div className="flex gap-2 flex-row lg:flex-col">
              <div className="bg-cold-blue w-full h-[273px] lg:w-[55%] lg:h-[430px]"></div>
            </div>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-end">
            <div className="bg-cold-blue lg:bg-[#4425B3] h-[273px] lg:w-[55%] lg:h-[430px] lg:-mt-[110px]"></div>
          </div>
        </Info>
        <div>
          <div className="border-[0.5px] border-white my-[100px]"></div>
          <div className="flex flex-col-reverse lg:flex-row gap-10 px-[10px] lg:px-0 pb-[100px]">
            <div className="bg-cold-blue w-full h-[394px] lg:h-[440px]"></div>
            <div className="bg-cold-blue w-full h-[394px] lg:h-[440px]"></div>
            <div className="text-[32px] lg:text-[42px] leading-[35px] lg:leading-[46px] ">
              Proin enim enim, tincidunt consequat sollicitudin.
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}
