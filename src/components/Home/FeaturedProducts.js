import React, { useMemo } from "react";

import "./css/FeaturedProducts.css";

const FeaturedProducts = () => {
  const data = useMemo(
    () => [
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/IMG_0493_346x.jpg?v=1649218762",
        alt: "image_1",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/IMG_0493_346x.jpg?v=1649218762",
        alt: "image_2",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/IMG_0493_346x.jpg?v=1649218762",
        alt: "image_3",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/IMG_0493_346x.jpg?v=1649218762",
        alt: "image_4",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/IMG_0493_346x.jpg?v=1649218762",
        alt: "image_5",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/IMG_0493_346x.jpg?v=1649218762",
        alt: "image_6",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/IMG_0493_346x.jpg?v=1649218762",
        alt: "image_7",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/IMG_0493_346x.jpg?v=1649218762",
        alt: "image_8",
      },
    ],
    []
  );

  return (
    <div>
      <h2 className="featured_products_heading">Featured Products</h2>
      <div className="cards_container">
        {data.map((item) => (
          <div className="card">
            <div className="image_container">
              {" "}
              <img src={item.src} alt={item.alt} className="image" />
            </div>
            <div className="card_title">Born Gavin</div>
            <div className="card_price">Rs.2,900.00</div>
            <div className="card_size">MORE SIZES AVAILABLE</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
