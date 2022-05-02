import React, { Fragment, useMemo } from "react";

import { Box, Grid } from "@mui/material";

import "./css/Collections.css";

const Collections = () => {
  const images = useMemo(
    () => [
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/files/Collection_Tile_201x751_Mens-1_324ff911-f870-4dd1-bcaf-40e2385bb7fa.jpg?v=1648618574",
        alt: "img",
        overlay: {
          title: "SHOP MEN",
          list: ["Formals", "Moccasins", "Athleisure", "Sandals"],
        },
        id: 1,
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/files/Collection_Tile_201x751_Womens-1_9a049105-f029-41a3-a3cc-1b45e0047776.jpg?v=1648618603",
        alt: "img",
        overlay: {
          title: "SHOP WOMEN",
          list: ["Pumps", "Heels", "Sandals", "Athleisure"],
        },
        id: 2,
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/files/Collection_Tile_501x751_Kids-1_9b02c23c-9020-4c8c-8839-8a7bbd64929d.jpg?v=1648618633",
        alt: "img",
        overlay: {
          title: "KIDS COMFORT",
          list: ["Casual", "Athleisure", "Sandals", "Slides"],
        },
        id: 3,
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/files/Collection_Tile_201x751_Accesssories-1_9eafcd42-a957-485d-824a-6a7b93a12be5.jpg?v=1641565431",
        alt: "img",
        overlay: {
          title: "ACCESSORIES",
          list: ["Shoe Care", "Insoles", "Socks", "Scarves"],
        },
        id: 4,
      },
    ],
    []
  );

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, textAlign: "center" }} on>
        <header className="collection_header">
          <h2>Shop the collections</h2>
        </header>
        <Grid container>
          {images.map((item) => (
            <Grid key={item.id} item xs={12} sm={12} md={6} lg={6}>
              <div className="collection_images">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="collection_image"
                />
                <div class="image-with-text-overlay__content">
                  <b className="overlay_title">{item.overlay.title}</b>
                  <div className="catergories-display">
                    <ul className="categories-items-list">
                      {item.overlay.list.map((listItem) => (
                        <li>{listItem}</li>
                      ))}
                    </ul>
                  </div>
                  <a href="/" className="categories_link" aria-label="link">
                    Shop Now
                  </a>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Collections;
