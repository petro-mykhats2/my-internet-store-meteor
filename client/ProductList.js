import React from "react"
import { withTracker } from "meteor/react-meteor-data"
import { Products } from "../imports/api/products"

const ProductList = ({ products }) => (
  <div>
    <h2>Product List</h2>
    {products && products.length ? (
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    ) : (
      <p>No products found</p>
    )}
  </div>
)

export default withTracker(() => {
  Meteor.subscribe("products")
  return {
    products: Products.find().fetch(),
  }
})(ProductList)
