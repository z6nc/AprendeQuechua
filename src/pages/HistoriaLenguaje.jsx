import { Navbar } from "../componets/Header/Navbar/navbar";
import { HeaderBgImg } from "../componets/Header/headerBgImg";
import { HeaderMain } from "../componets/Header/headerMain";
import { TitleUI } from "../ui/titleUI";
import { ImgBannerUI } from "../ui/ImgBannerUI";
import { TimeLine } from "../componets/Historia/TimeLine";
import { HistoriaArticle } from "../componets/Historia/HistoriaArticle";
import { Footer } from "../componets/Footer/Footer";
export default function HistoriaLenguaje() {
  return (
    <>
      <HeaderMain>
        <Navbar />
        <HeaderBgImg
          src={
            "https://cdn.qwenlm.ai/output/5613e1ee-1dd7-41c6-bb62-388da33cafcc/t2i/e8f0022a-df32-4ddd-9ddd-a47ea41c1ed3/9a3d9e81-d9f3-45aa-90d2-caab62c24396.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiNTYxM2UxZWUtMWRkNy00MWM2LWJiNjItMzg4ZGEzM2NhZmNjIiwicmVzb3VyY2VfaWQiOiI5YTNkOWU4MS1kOWYzLTQ1YWEtOTBkMi1jYWFiNjJjMjQzOTYiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.jqlbCpjNL45uTGUuyKaTt80Df0pBWcEmMqDp-sHqyqQ"
          }
          alt={"Imagen de libros en diferentes posiciones "}
          style={"brightness-50"}
        />
        <ImgBannerUI>
          <TitleUI title={"Historia de Quechua "} />
        </ImgBannerUI>
      </HeaderMain>

      <main className="min-h-screen   py-4 mx-4 lg:mx-0">
        <HistoriaArticle/>
        <TimeLine/>
      </main>
      <Footer/>
    </>
  );
}
