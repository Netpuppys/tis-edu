export const metadata = {
  title: "Virtual Campus Tour",
  description:
    "Take a virtual tour of Tula's International School's campus in Dehradun and explore our boarding facilities, classrooms and grounds online.",
  alternates: {
    canonical: "https://tis.edu.in/virtual-tour/",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function Virtual() {
  return (
    <>
      <style>{`
        html { height:100%; }
        body { height:100%; overflow:hidden; margin:0; padding:0; font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#FFFFFF; background-color:#000000; }
      `}</style>
      <h1
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Virtual Campus Tour - Tula&apos;s International School
      </h1>
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
