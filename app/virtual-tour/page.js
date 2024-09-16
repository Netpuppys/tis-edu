// pages/index.js
import Head from "next/head";

export default function Virtual() {
  return (
    <>
      <Head>
        <title>
          Tula&apos;s International School | Best Boarding School in Dehradun
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <style>{`
          html { height:100%; }
          body { height:100%; overflow:hidden; margin:0; padding:0; font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#FFFFFF; background-color:#000000; }
        `}</style>
      </Head>
      <iframe
        className="content"
        allow="autoplay"
        allowvr="true"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        oAllowFullScreen
        msAllowFullScreen
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        width="100%"
        style={{ height: "100vh", zoom: "-50%" }}
        src="https://s3.ap-south-1.amazonaws.com/tis.edu/tour.html"
      ></iframe>
    </>
  );
}
