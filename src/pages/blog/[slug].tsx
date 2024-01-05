import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { ArticlesList } from "./static/article-list";
import styles from "../../styles/Article.module.scss";
import '../../globals.css'
import { Footer } from "@/app/layouts/footer";
import Navbar from "@/app/layouts/navbar";
import { Socials } from "@/app/components/socials";
import { Reveal } from "@/app/components/reveal";

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;
  const content: any = ArticlesList.find((x) => x.slug === slug);

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <Head>
        <meta name="description" content={content?.meta.description} />
        <meta property="og:description" content={content?.meta.description} />
        <meta property="og:title" content={content?.meta.title} />
        <meta property="og:type" content="article" />
        <meta name="keywords" content={content?.meta.keywords} />
        <title>{content?.meta.title}</title>
      </Head>

      <div className="bg-white">
        <div>
          <Navbar />
          <div className="flex flex-col">
            <Socials />
          </div>
          <main className="max-w-4xl mx-auto px-4 bg-white flex justify-center bg-black">
            <Reveal>
              <div className="flex flex-col justify-center items-center mx-auto">
                <div className="font-bold text-3xl text-[#141414] mb-12">{content?.title}</div>
                <div className="max-w-4xl w-full">
                  {content?.image && (
                    <img
                      src={content.image}
                      alt={content?.keyword}
                      className="w-full max-h-72 object-cover"
                    />
                  )}
                </div>
                <div dangerouslySetInnerHTML={{ __html: content?.body }} className="my-12 text-lg leading-relaxed	"></div>
              </div>
            </Reveal>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Article;
