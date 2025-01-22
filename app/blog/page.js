import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import Blog from "../../components/QuickLinks/Blog";
import BlogsHeader from "../../public/Banner/blogs.webp";
import BlogsHeaderMobile from "../../public/Banner/blogsMobile.webp";
import Header from "../../components/globalComponents/Header/Header";
export default function blog() {
  return (
    <>
      <Head>
        <title>Tula&apos;s International Boarding School Dehradun Blog</title>
        <meta
          name="description"
          content="Tula's International School One among top boarding, residential, CBSE, Co-ed boarding schools in Dehradun, Uttarakhand India. Visit blog for latest updates."
        />
      </Head>
      <Navbar />
      <Header
        headerImg={BlogsHeader}
        headerImgMobile={BlogsHeaderMobile}
        title={"Blogs"}
        subtitle={"Your window into the inspiring world of talent, creativity, and culture at TIS"}
      />
      <Blog />
      <Footer />
    </>
  );
}
