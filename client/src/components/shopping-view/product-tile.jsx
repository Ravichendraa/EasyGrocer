// import { Card, CardContent, CardFooter } from "../ui/card";
// import { Button } from "../ui/button";
// import { brandOptionsMap, categoryOptionsMap } from "@/config";
// import { Badge } from "../ui/badge";

// function ShoppingProductTile({
//   product,
//   handleGetProductDetails,
//   handleAddtoCart,
// }) {
//   return (
//     <Card className="w-full max-w-sm mx-auto">
//       <div onClick={() => handleGetProductDetails(product?._id)}>
//         <div className="relative">
//           <img
//             src={product?.image}
//             alt={product?.title}
//             className="w-full h-[300px] object-cover rounded-t-lg"
//           />
//           {product?.totalStock <= 0 ? (
//             <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
//               Out Of Stock
//             </Badge>
//           ) : product?.totalStock < 10 && product?.totalStock > 0 ? (
//             <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
//               {`Only ${product?.totalStock} items left`}
//             </Badge>
//           ) : product?.salePrice > 0 ? (
//             <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
//               Sale
//             </Badge>
//           ) : null}
//         </div>
//         <CardContent className="p-4">
//           <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
//           <div className="flex justify-between items-center mb-2">
//             <span className="text-[16px] text-muted-foreground">
//               {categoryOptionsMap[product?.category]}
//             </span>
//             <span className="text-[16px] text-muted-foreground">
//               {brandOptionsMap[product?.brand]}
//             </span>
//           </div>
//           <div className="flex justify-between items-center mb-2">
//             <span
//               className={`${
//                 product?.salePrice > 0 ? "line-through" : ""
//               } text-lg font-semibold text-primary`}
//             >
//               ${product?.price}
//             </span>
//             {product?.salePrice > 0 ? (
//               <span className="text-lg font-semibold text-primary">
//                 ${product?.salePrice}
//               </span>
//             ) : null}
//           </div>
//         </CardContent>
//       </div>
//       <CardFooter>
//         {product?.totalStock <= 0 ? (
//           <Button className="w-full opacity-60 cursor-not-allowed">
//             Out Of Stock
//           </Button>
//         ) : (
//           <Button
//             onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
//             className="w-full"
//           >
//             Add to cart
//           </Button>
//         )}
//       </CardFooter>
//     </Card>
//   );
// }

// export default ShoppingProductTile;



import { useState } from 'react';
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  // Calculate the discount percentage
  const discountPercentage =
    product.salePrice > 0
      ? Math.round(((product.price - product.salePrice) / product.price) * 100)
      : 0;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="w-full max-w-sm mx-auto flex flex-col">
      <div
        onClick={() => handleGetProductDetails(product?._id)}
        className="flex-grow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-48 object-contain rounded-t-lg"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600">
              {`Only ${product?.totalStock} left`}
            </Badge>
          ) : discountPercentage > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`${discountPercentage}% Off`}
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          <h2 className="text-lg font-bold mb-2 line-clamp-2 h-12">
            {product?.title}
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
            <span className="text-sm text-muted-foreground">
              {brandOptionsMap[product?.brand]}
            </span>
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-baseline space-x-2">
            {product?.salePrice > 0 ? (
              <>
                <span className="text-xl font-semibold text-primary">
                  ₹{product?.salePrice}
                </span>
                <span className="text-lg line-through text-muted-foreground">
                  ₹{product?.price}
                </span>
                <span className="text-sm text-red-600">
                  {`${discountPercentage}% Off`}
                </span>
              </>
            ) : (
              <span className="text-xl font-semibold text-primary">
                ₹{product?.price}
              </span>
            )}
          </div>
          {product?.totalStock === 0 ? (
            <Button
              className="opacity-60 cursor-not-allowed"
              disabled
            >
              Out Of Stock
            </Button>
          ) : (
            <Button
              onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            >
              Add to cart
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;

