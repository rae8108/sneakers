import React, { useState } from "react";
import Nav from "./Nav";
import Basket from "./Basket";
import "./Product.css";

export default function Product() {
  const products = [
    {
      id: 1,
      imageUrl:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee99b4b9bde74f30a933a8bf011911ae_9366/samba-og-shoes.jpg",
      name: "Samba OG Shoes",
      price: "£90.00",
      description:
        "The classic look and feel of the authentic samba. Born on the pitch, the Samba is a timeless icon of street style. These shoes stay true to their legacy with a soft leather upper and suede overlays. ",
      sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    },
    {
      id: 2,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/92fcae5dd0e8423a8790585c6c97148b_9366/Gazelle_Indoor_Shoes_Orange_IH7499_01_standard.jpg",
      name: "Gazelle Indoor Shoes",
      price: "£90.00",
      description:
        " Soft suede and a durable leather lining come together on a gum rubber outsole with a translucent effect. The 3-Stripes and metallic-gold lettering complete the authentic look. ",
      sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    },
    {
      id: 3,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a278952992ed4275a9d87ea627c85aa9_9366/Gazelle_Bold_Shoes_Pink_IE0421_01_standard.jpg",
      name: "Gazelle Bold Shoes",
      price: "£90.00",
      description:
        "It wouldn't be a list of adidas' most iconic shoes without the Gazelle. First worn on indoor courts in the '70s, the suede shoe is gaining new fans to this day. Now the style you covet is lifted up to new heights. ",
      sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    },
    {
      id: 4,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb18cfdee5484bafb694a97601138947_9366/Handball_Spezial_Shoes_Blue_BD7632_01_standard.jpg",
      name: "Handball Spezial Shoes",
      price: "£85.00",
      description:
        "First introduced in 1979 for elite handball players, these shoes are now beloved for their classic style. This version is built with a nubuck suede upper for a supple feel. A soft gum rubber outsole keeps them true to their vintage roots. ",
      sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    },
    {
      id: 5,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b80efa4a56c48559df964fb030efb49_9366/NMD_G1_Shoes_White_IF3457_01_standard.jpg",
      name: "NMD_G1 Shoes",
      price: "£130.00",
      description:
        " Feel the past and the future at once underfoot: plush BOOST and an EVA midsole deliver comfort with a retro look. Pull tabs at the tongue and heel are a nod to OG adidas style. These shoes invite you to join the future before it's here. ",
      sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    },
    {
      id: 6,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/836f18ee57e441d8938aaf1201323358_9366/Forum_Low_Classic_Shoes_White_ID6858_01_standard.jpg",
      name: "Forum Low Classic Shoes",
      price: "£90.00",
      description:
        "The signature layered build is streamlined, with a gum rubber outsole for traction with style. Built to last with a nubuck and leather upper, these trainers are a perfect go-to for busy days and wild nights.",
      sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    },
    {
      id: 7,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6044dd9dea9948f49524adaa00b9338b_9366/Response_CL_Shoes_Grey_GZ1561_01_standard.jpg",
      name: "Response CL Shoes",
      price: "£90.00",
      description:
        "Look ready for anything. These adidas Response CL Shoes have a built-up structure inspired by trail runners. A soft, lightweight midsole keeps you comfortable during even the most strenuous backyard cookouts. ",
      sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    },
    {
      id: 8,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/62d96641e799450fbbdfad0800cb06ed_9366/NMD_R1_Shoes_Black_GZ9256_01_standard.jpg",
      name: "NMD _R1 Shoes",
      price: "£120.00",
      description:
        "Boost cushioning for all-day comfort. Bold colour and signature midsole plugs make a statement, so wherever you're headed, you're sure to show up in style.",
      sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    },
    {
      id: 9,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cee92a74571f4539af73b6fb66d7469a_9366/SL_72_Shoes_Blue_IE3427_01_standard.jpg",
      name: "SL 72 Shoes",
      price: "£80.00",
      description:
        "An Ecotex tongue adds texture, and the EVA midsole keeps you comfortable on the go. The classic low-profile cut and rubber outsole deliver the final touches.",
      sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    },
  ];

  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [basketItems, setBasketItems] = useState([]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleAddToBasket = () => {
    if (selectedProduct && selectedSize) {
      const existingIndex = basketItems.findIndex(
        (item) => item.id === selectedProduct.id && item.size === selectedSize
      );

      if (existingIndex !== -1) {
        // If item already exists, update quantity
        const updatedBasketItems = [...basketItems];
        updatedBasketItems[existingIndex].quantity += 1;
        setBasketItems(updatedBasketItems);
      } else {
        // If item doesn't exist, add it to basket with quantity 1
        setBasketItems([
          ...basketItems,
          {
            id: selectedProduct.id,
            name: selectedProduct.name,
            size: selectedSize,
            price: selectedProduct.price,
            imageUrl: selectedProduct.imageUrl,
            quantity: 1,
          },
        ]);
      }
    }
    setPopupVisible(false);
  };

  const handleIncreaseQuantity = (index) => {
    const updatedBasketItems = [...basketItems];
    updatedBasketItems[index].quantity += 1;
    setBasketItems(updatedBasketItems);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedBasketItems = [...basketItems];
    if (updatedBasketItems[index].quantity > 1) {
      updatedBasketItems[index].quantity -= 1;
      setBasketItems(updatedBasketItems);
    }
  };

  return (
    <div>
      <Nav />
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button
                className="view-details-button"
                onClick={() => handleViewDetails(product)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {popupVisible && (
        <div className="popup" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleClosePopup}></span>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="popup-image"
            />
            <div className="popup-description">
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.price}</p>
              <p>{selectedProduct.description}</p>
              <h3>Select Size:</h3>
              <div className="size-buttons">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-button ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => handleSizeSelection(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button onClick={handleAddToBasket}>Add to Basket</button>
            </div>
          </div>
        </div>
      )}
      {basketItems.length > 0 && (
        <Basket
          basketItems={basketItems}
          onClose={() => setBasketItems([])}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
      )}
    </div>
  );
}
