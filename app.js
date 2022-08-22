class App extends React.Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePurchased = this.togglePurchased.bind(this);
  }

  state = {
    products: products,
    item: "",
    brand: "",
    units: "",
    quantity: 0,
    isPurchased: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased,
    };
    this.setState({
      products: [...this.state.products, newProduct],
      item: "",
      brand: "",
      units: "",
      quantity: 0,
      isPurchased: false,
    });
  };

  togglePurchased = (event) => {
    let products = this.state.products;
    products[parseInt(event.target.id)].isPurchased = true;
    this.setState({ products });
  };

  render() {
    return (
      <div>
        <h1> React Groceries </h1>
        <div className='content'>
          <div className="list">
            <h2>Grocery List</h2>
            <ul>
              {this.state.products.map((product, index) => {
                return !product.isPurchased ? (
                  <li>
                    <h5>
                      {product.brand} {product.item} {product.units}
                    </h5>
                    <h6>Quantity: {product.quantity}</h6>
                    <button
                      id={index}
                      onClick={this.togglePurchased}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </li>
                ) : null;
              })}
            </ul>
            <br />
          </div>
          <div className="list">
            <h4>Add Product To List</h4>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="item" className="form-label">
                Item:
              </label>
              <input
                className="form-label"
                type="text"
                value={this.state.item}
                onChange={this.handleChange}
                id="item"
              />
              <br />
              <label htmlFor="brand" className="form-label">
                Brand:
              </label>
              <input
                type="text"
                className="form-label"
                value={this.state.brand}
                onChange={this.handleChange}
                id="brand"
              />
              <br />
              <label htmlFor="units" className="form-label">
                Units:
              </label>
              <input
                type="text"
                className="form-label"
                value={this.state.units}
                onChange={this.handleChange}
                id="units"
              />
              <br />
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <input
                type="number"
                className="form-label"
                value={this.state.quantity}
                onChange={this.handleChange}
                id="quantity"
                min={0}
              />
              <br />
              <input type="submit" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
