import React from "react";

import styles from "./Info.module.scss";
/* eslint-disable jsx-a11y/no-distracting-elements */

const Info = () => {
  return (
    <>
      <marquee className={styles.para} direction="left" scrollamount="6">
        Place order by 26th April 11:59 pm for deliveries before Eid in Lahore,
        Karachi, Islamabad/Rawalpindi, Hyderabad, Bahawalpur, Rahim Yar Khan,
        Sahiwal, Faisalabad, Multan, Peshawar, Sialkot, Gujrat &amp; Gujranwala;
        for other cities place order by 25th April 11:59 pm. Orders placed after
        these dates will be delivered within 4 to 7 working days after Eid.
      </marquee>
    </>
  );
};

export default Info;
