import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import { Drawer } from "../Drawer/DrawerFunc";
import "./cartitems.css";

function CartItems() {
  const [empty, set_empty] = useState(true);
  const [items_count, setCount] = useState(0);

  return (
    <>
      <div className="nav_cart_tray">
        <div className="nav_cart_tray_inner flex jsb ac row">
          <h2>Cart</h2>
          <div className="flex jc ac">
            <Close
              className="flex jc ac"
              onClick={() => {
                Drawer("cart");
              }}
            />
          </div>
        </div>
        {empty ? (
          <div className="cart_container flex col">
            <div className="cart_item_outter">
              <div className="cart_item flex row">
                <div></div>
                <div className="cart_image">
                  <img src="../images/Shirts/AC Milan Home Kit.webp" alt="" />
                </div>
                <div className="order_details">
                  <div className="order_product">Chelsea Home Kit</div>
                  <div className="order_type">S / No Name</div>
                  <div className="quantity_total flex jsb ac row">
                    <div className="quantity flex row">
                      <button
                        className="decrement"
                        onClick={() => {
                          setCount(items_count - 1);
                        }}
                      >
                        –
                      </button>
                      <input
                        className="flex jc ac row"
                        type="text"
                        readOnly
                        value={items_count}
                      />
                      <button
                        className="increment"
                        onClick={() => {
                          setCount(items_count + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="total_amount flex te">₹300</div>
                  </div>
                </div>
              </div>
              <div className="note_and_order">
                <div className="oredr_note">
                  <div className="note_title">ORDER NOTE</div>
                  <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
              </div>
            </div>

            <div className="tally_and_order">
              <div className="tally flex jsb ac row">
                <div className="subtotal">Subtotal</div>
                <div className="total_ammount">₹300</div>
              </div>
              <div className="order_note">Shipping, taxes, and discounts calculated at checkout. Orders will be processed in GBP.</div>
              <div className="order_condition flex ac row">
                <input type="checkbox" name="" id="" /> I AGREE WITH THE TERMS AND CONDITIONS
              </div>
            </div>
          </div>
        ) : (
          <div className='empty_cart'>
            <p>Your cart is currently empty.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default CartItems;