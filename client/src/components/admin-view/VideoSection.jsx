import { useNavigate } from "react-router-dom";

function VideoSection() {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate("/shop/listing");
  };
  
  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    window.scrollTo(0, 0);
    navigate(`/shop/listing`);
  }

  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          >
            <source src="/images/thumsup.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-end justify-end p-10 bg-black/40">
          <button
              className="bg-white/10 hover:bg-white/20 text-white border border-white px-6 py-2 rounded-lg transition mb-4"
              onClick={() => handleNavigateToListingPage({ id: "coca_cola", label: "Coca-Cola", 
                image: <img 
                src="/images/coca_cola.png"
                alt="Snacks"
                className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />  }, "brand")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
