import React from "react";

import classes from "./Help.module.css";

const Help = () => {
  return (
    <div>
      <table className={classes.main_table}>
        <tr className={classes.first_row}>
          <th>name</th>
          <th>phone</th>
          <th>email</th>
          <th>address</th>
          <th>postalZip</th>
          <th>region</th>
          <th>country</th>
          <th>list</th>
          <th>numberrange</th>
          <th>currency</th>
        </tr>
        <tr>
          <td>Coby Hodge</td>
          <td>1-814-968-8313</td>
          <td>et.magnis@outlook.couk</td>
          <td>Ap #391-1207 Nisi. Rd.</td>
          <td>565638</td>
          <td>Puntarenas</td>
          <td>Turkey</td>
          <td>11</td>
          <td>1</td>
          <td>$65.01</td>
        </tr>
        <tr>
          <td>Amal Richards</td>
          <td>(870) 419-4116</td>
          <td>est.ac.mattis@yahoo.edu</td>
          <td>P.O. Box 697, 3017 Nunc Avenue</td>
          <td>743657</td>
          <td>East Region</td>
          <td>France</td>
          <td>3</td>
          <td>9</td>
          <td>$59.26</td>
        </tr>
        <tr>
          <td>Uta Callahan</td>
          <td>(317) 775-2885</td>
          <td>sit.amet@outlook.couk</td>
          <td>Ap #188-7495 Sociis Avenue</td>
          <td>612289</td>
          <td>Antalya</td>
          <td>South Korea</td>
          <td>3</td>
          <td>1</td>
          <td>$40.98</td>
        </tr>
        <tr>
          <td>Barclay Ellison</td>
          <td>1-376-576-1783</td>
          <td>lacus.pede.sagittis@google.couk</td>
          <td>P.O. Box 149, 1893 Sagittis. St.</td>
          <td>610785</td>
          <td>Central Visayas</td>
          <td>China</td>
          <td>1</td>
          <td>10</td>
          <td>$45.84</td>
        </tr>
        <tr>
          <td>Harper Owen</td>
          <td>1-646-493-8852</td>
          <td>eros.nec.tellus@aol.org</td>
          <td>4665 Egestas St.</td>
          <td>75-43</td>
          <td>West Region</td>
          <td>Peru</td>
          <td>15</td>
          <td>4</td>
          <td>$60.83</td>
        </tr>
      </table>
    </div>
  );
};

export default Help;
