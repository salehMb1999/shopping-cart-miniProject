import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div class="shop-item">
        <span class="shop-item-title">{this.props.title}</span>
        <img class="shop-item-image" src={this.props.img} alt="productImg" />
        <div class="shop-item-details">
          <span class="shop-item-price">${this.props.price}</span>
          <button onClick={this.props.addToCartHandler.bind(this, this.props.id)} class="btn btn-primary shop-item-button" type="button">
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}
