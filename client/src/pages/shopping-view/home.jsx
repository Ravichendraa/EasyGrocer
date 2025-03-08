import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

import VideoSection from "../../components/admin-view/VideoSection";
import Deepika from "@/components/admin-view/Deepika";
import './ShoppingHome.css';



const categoriesWithIcon = [
  { id: "stationery", label: "Stationery", image: <img src="/images/stationary.jpg" alt="Stationery" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "dry-fruits", label: "Dry Fruits", image: <img src="/images/dry_fruits.jpg" alt="Dry Fruits" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "biscuits", label: "Biscuits", image: <img src="/images/biscuit.jpeg" alt="Biscuits" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "chocolates", label: "Chocolates", image: <img src="/images/chocolate.jpeg" alt="Chocolates" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "soaps", label: "Soaps", image: <img src="/images/soaps.jpeg" alt="Soaps" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "dals", label: "Dals", image: <img src="/images/dal.jpeg" alt="Dals" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "snacks", label: "Snacks", image: <img src="/images/snacks.jpeg" alt="Snacks" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "softdrinks", label: "Soft Drinks", image: <img src="/images/softdrinks.jpeg" alt="Soft Drinks" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "personal-care", label: "Personal Care", image: <img src="/images/personal_care.webp" alt="Personal Care" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
];

const brandsWithIcon = [
  { id: "classmate", label: "Classmate", image: <img src="/images/classmate.png" alt="Classmate" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "camlin", label: "Camlin", image: <img src="/images/camlin.png" alt="Camlin" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "navneet", label: "Navneet", image: <img src="/images/navneet.jpeg" alt="Navneet" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "happilo", label: "Happilo", image: <img src="/images/happilo.jpeg" alt="Happilo" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "nutraj", label: "Nutraj", image: <img src="/images/nutraj.png" alt="Nutraj" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "vedaka", label: "Vedaka", image: <img src="/images/vedaka.png" alt="Vedaka" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "britannia", label: "Britannia", image: <img src="/images/britannia.png" alt="Britannia" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "parle", label: "Parle", image: <img src="/images/parle.png" alt="Parle" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "sunfeast", label: "Sunfeast", image: <img src="/images/sunfeast.jpeg" alt="Sunfeast" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "cadbury", label: "Cadbury", image: <img src="/images/cadbury.jpeg" alt="Cadbury" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "nestle", label: "Nestle", image: <img src="/images/nestle.png" alt="Nestlé" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "amul", label: "Amul", image: <img src="/images/amul.png" alt="Amul" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "santoor", label: "Santoor", image: <img src="/images/santoor.jpeg" alt="Santoor" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "dove", label: "Dove", image: <img src="/images/dove.png" alt="Dove" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "dettol", label: "Dettol", image: <img src="/images/dettol.jpeg" alt="Dettol" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "tata-sampann", label: "Tata Sampann", image: <img src="/images/tata-sampann.jpeg" alt="Tata Sampann" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "fortune", label: "Fortune", image: <img src="/images/fortune.png" alt="Fortune" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "organic-tattva", label: "Organic Tattva", image: <img src="/images/organic-tattva.jpeg" alt="Organic Tattva" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "haldirams", label: "Haldiram's", image: <img src="/images/haldirams.png" alt="Haldiram's" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "kurkure", label: "Kurkure", image: <img src="/images/kurkure.jpeg" alt="Kurkure" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "lays", label: "Lays", image: <img src="/images/lays.png" alt="Lays" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "coca_cola", label: "Coca-Cola", image: <img src="/images/coca_cola.png" alt="Coca-Cola" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "pepsi", label: "Pepsi", image: <img src="/images/pepsi.png" alt="Pepsi" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "himalaya", label: "Himalaya", image: <img src="/images/himalaya.jpeg" alt="Himalaya" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "nivea", label: "Nivea", image: <img src="/images/nivea.png" alt="Nivea" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
  { id: "garnier", label: "Garnier", image: <img src="/images/garnier.png" alt="Garnier" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" /> },
];
  

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    window.scrollTo(0, 0);
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    

    <div className="mt-20 flex flex-col min-h-screen">
      {/* Hero Slider Section */}
      <div className="  relative w-full h-auto min-h-[250px] sm:min-h-[350px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden ">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
            <img
            src={slide?.image}
            key={index}
            className={`${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000`}
            alt={`Slide ${index + 1}`}
          />
          
            ))
          : null}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/80 w-8 h-8 sm:w-10 sm:h-10"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/80 w-8 h-8 sm:w-10 sm:h-10"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>





{/* 1st vedio section */}

      
      <div>
      <VideoSection />
    </div>

{/* Categories Section */}
<section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Category
          </h2>
          <div className="carousel-container">
            <div className="carousel-track">
              {[...categoriesWithIcon, ...categoriesWithIcon].map(
                (categoryItem, index) => (
                  <Card
                    key={`category-${index}-${categoryItem.id}`}
                    onClick={() =>
                      handleNavigateToListingPage(categoryItem, "category")
                    }
                    className="carousel-item"
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      {categoryItem.image}
                      <span className="font-bold">{categoryItem.label}</span>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Brands Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="carousel-container">
            <div className="carousel-track">
              {[...brandsWithIcon, ...brandsWithIcon].map((brandItem, index) => (
                <Card
                  key={`brand-${index}-${brandItem.id}`}
                  onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                  className="carousel-item"
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    {brandItem.image}
                    <span className="font-bold">{brandItem.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


   {/* 2nd vedio section     */}
      <div>
      <Deepika />
    </div>



      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    key={productItem.id}
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>

      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
