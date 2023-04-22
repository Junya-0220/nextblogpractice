import Container from "@/components/continer";
import Hero from "@/components/hero";
import PostBody from "@/components/post-body";
import Contact from "@/components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column";

export default function About() {
  return (
    <>
      <Container>
        <Hero title={"About"} subtitle={"About development activities"} />
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <p>
                Cubrが得意とするのはモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることで社会や環境と結びつける提案をします。
              </p>
              <h2>ものづくりで目指していること</h2>
              <p>
                ものづくりではデータ解析からクリエィティブまで幅広いことを担当しています。
              </p>
              <p>単純に形にするだけでなく、つくる過程を大事にしています。</p>
              <h3>新しいことのチャレンジ</h3>
              <p>今までと違うものを作ります。</p>
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  );
}
