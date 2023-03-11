import React, { useState } from "react"

const AddProduct = () => {
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()

    Meteor.call(
      "addProduct",
      {
        name: productName,
        price: productPrice,
      },
      (error) => {
        if (error) {
          console.log(error.reason)
        } else {
          setProductName("")
          setProductPrice(0)
        }
      }
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input
          type="text"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Product Price:
        <input
          type="number"
          value={productPrice}
          onChange={(event) => setProductPrice(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  )
}

export default AddProduct
