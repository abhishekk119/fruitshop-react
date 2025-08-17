function Juicecard({
  imageSource,
  name,
  price,
  description,
  onAdd,
  showitemaddedmsg,
  itemQuantity,
}) {
  return (
    <div className="juicecardwrapper">
      <div className="juicecard">
        <img
          src={imageSource}
          alt=""
          style={{ height: "200px", width: "280px" }}
        />
        <h2>{name}</h2>
        <h3>Price: ₹{price}</h3>
        <p>{description}</p>
        {showitemaddedmsg && (
          <div className="itemaddedmsgdiv">
            <p style={{ color: "#3a7bd5" }}>
              Item added to cart. Quantity: {itemQuantity}
            </p>
          </div>
        )}
        <div className="buttons">
          <button className="buynowbtn">Buy Now</button>
          <button className="addtocartbtn" onClick={onAdd}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Juicecard;
