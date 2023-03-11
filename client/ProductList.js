import React from "react"
// import { withTracker } from "meteor/react-meteor-data"
// import { Products } from "../api/products"

const ProductList = () => (
  <div>
    <h2>Product List</h2>
    {/* <ul>
      {products.map((product) => (
        <li key={product._id}>
          {product.name} - {product.price}
        </li>
      ))}
    </ul> */}
  </div>
)
export default ProductList
// export default withTracker(() => {
//   Meteor.subscribe("products")
//   return {
//     products: Products.find().fetch(),
//   }
// })(ProductList)
