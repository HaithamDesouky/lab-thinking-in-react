import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './FilterableProductTable.css';

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: this.props.products.data,
      inStockFilter: false,
      searchQuery: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleStockFilter = () => {
    console.log(this.state.inStockFilter);
    this.setState({
      inStockFilter: !this.state.inStockFilter,
    });
  };

  filterList = () => {
    const searchTerm = this.state.searchQuery.toLowerCase();
    return this.state.currentData.filter((item) => {
      if (!this.state.inStockFilter) {
        return item.name.toLowerCase().includes(searchTerm);
      } else {
        return item.name.toLowerCase().includes(searchTerm) && item.stocked;
      }
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          query={this.state.searchQuery}
          handleInput={this.handleInputChange}
          inStock={this.handleStockFilter}
        ></SearchBar>
        <ProductTable products={this.filterList()} />
      </div>
    );
  }
}

export default FilterableProductTable;
