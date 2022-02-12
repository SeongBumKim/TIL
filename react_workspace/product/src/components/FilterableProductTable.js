import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }
    handleFilterTextChange = (searchText) => {
        this.setState({
          filterText: searchText
        });
    }
      
    handleInStockChange = (stockOnly) => {
        this.setState({
          inStockOnly: stockOnly
        });
    }
    render() {
        const {products} = this.props;
        const {filterText, inStockOnly} = this.state;
        return (
            <div>
                <SearchBar 
                filterText = {filterText}
                inStockOnly = {inStockOnly}
                onSearch={this.handleFilterTextChange}
                onStockOnly={this.handleInStockChange} />

                <ProductTable products={products} 
                filterText = {this.state.filterText}
                inStockOnly = {this.state.inStockOnly} />
            </div>
        );
    }
}

export default FilterableProductTable;