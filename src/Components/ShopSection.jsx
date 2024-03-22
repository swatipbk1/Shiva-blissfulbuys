// ShopSection.js
import React from 'react';
import ProductBox from './ProductBox'; // Import ProductBox component

const ShopSection = () => {
  return (
    <div className="shop-section">
      <ProductBox title="Health & Personal Care" image="box1.jpg" />
      <ProductBox title="Shop for valentines day" image="box2.jpg" />
      <ProductBox title="Luxury knits & bedding" image="box3.jpg" />
      <ProductBox title="Designer Clothing" image="box4.jpg" />
      <ProductBox title="Electronics Devices" image="box5.jpg" />
      <ProductBox title="Party Supplies" image="box6.jpg" />
      <ProductBox title="Non-Fiction Content" image="box7.jpg" />
      <ProductBox title="New Arrivals in Toys" image="box8.jpg" />
    </div>
  );
}

export default ShopSection;
