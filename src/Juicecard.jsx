
function Juicecard({imageSource, name, price, description, functionname}) {
    return(
        <div className="juicecardwrapper">
            <div className="juicecard">
                <img src={imageSource} alt="" style={{height: "200px", width: "280px"}}/>
                <h2>{name}</h2>
                <h3>Price: {price}</h3>
                <p>{description}</p>
                <div className="buttons">
                    <button className="buynowbtn">Buy Now</button>
                    <button className="addtocartbtn" onClick={functionname}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Juicecard