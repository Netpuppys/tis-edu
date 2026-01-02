export default function ImageBanner() {
  return (
    <>
      {/* Mobile Banner */}
      <img
        src="/LandingPage/webinar-banner-mobile.jpg"
        alt="banner mobile"
        className="w-full h-auto block md:hidden"
      />

      {/* Desktop Banner */}
      <img
        src="/LandingPage/webinar-banner.jpg"
        alt="banner desktop"
        className="w-full h-auto hidden md:block"
      />
    </>
  );
}
