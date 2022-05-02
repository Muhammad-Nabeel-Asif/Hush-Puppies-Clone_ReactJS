import React, { Fragment } from "react";

import "./css/Manifesto.css";

const Manifesto = () => {
  return (
    <Fragment>
      <hr />
      <h2 className="manifesto_h2">OUR MANIFESTO</h2>
      <div className="paragraph">
        <p>
          Even when life isn’t perfect, you choose to see the good. Everyone can
          choose how they frame their world, and you choose to frame yours with
          color, light and goodness. We believe that optimism is contagious and
          that by encouraging little acts of positivity we can help shape a
          better world. That’s why we champion people that are spreading joy in
          small, surprising ways. We’re not new to this optimism thing – we’ve
          been making comfortable, colorful footwear, with the world’s most
          loveable ambassador, for over 60+ years. So come take a look at the
          Bright, Bold, Comfy, True, New Hush Puppies and join us on the bright
          side.
        </p>
      </div>
      <div className="items_grid">
        <div className="f_image"></div>
        <div className="s_image">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hum-Td4-vxY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="t_image">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4O7LeIx7xI8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="fo_image"></div>
        <div className="fi_image"></div>
        <div className="si_image">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6Qd6ve2v1vs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export default Manifesto;
