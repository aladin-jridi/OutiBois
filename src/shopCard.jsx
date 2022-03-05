import React, { useState } from "react";
import { Image } from "cloudinary-react";

const ShopCard = ({ shopcard, removeFromCard }) => {
  const [toggleIdShopCard, settoggleIdShopCard] = useState("");
  const [toggleIdForm, settoggleIdForm] = useState("display-none");
  return (
    <div className="module module-cart pull-left">
      <div className="cart-icon">
        <i className="fa fa-shopping-cart" />
        <span className="cart-label">{shopcard.length}</span>
      </div>

      {/* <table className="cart-icon">
        <tr>
          <td>
            <i className="fa fa-shopping-cart" />
          </td>
          <td>
            <span className="cart-label">{shopcard.length}</span>
          </td>
        </tr>
      </table> */}

      <div className="cart-box" id={toggleIdShopCard}>
        <div className="cart-overview">
          <ul className="list-unstyled">
            {shopcard.map((machine, index) => (
              <li key={index}>
                <Image
                  className="img-responsive"
                  cloudName="outibois"
                  public_id={machine.image[0]}
                />
                <div className="product-meta">
                  <h5 className="product-title">{machine.name}</h5>
                </div>
                <a className="cancel" onClick={() => removeFromCard(machine)}>
                  cancel
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="clearfix"></div>
        <div className="cart-control">
          <a className="btn btn-secondary pull-right">Devis</a>
        </div>
      </div>
      <div className="cart-box" id={toggleIdForm}></div>
    </div>
  );
};

export default ShopCard;
