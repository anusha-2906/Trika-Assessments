import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from'./SearchBar';
import Pagination from './Pagination';

 

function Products () { 
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    useEffect(() => {

    axios.get('http://localhost:5000/products')
        .then(response => {
            console.log(response.data);
            setProducts(response.data);
            setFilteredProducts(response.data);
        })
         .catch(error => console.error('Error fetching data:', error));
    }, []);
     useEffect(() => {
        const timer  = setTimeout(() => {
            const filtered = products.filter(products =>
                products.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        },300);
        return () => clearTimeout(timer);
    },[searchTerm, products]);

    const  handleSearch = (event) => {
      setSearchTerm(event.target.value);
  };
    
    const handledeleteRow = (id) => {
        const remainingProducts = filteredProducts.filter(products => products.id !== id);
        setFilteredProducts(remainingProducts);
    };
        
        const handleSelectRow = (id) => {
            const isSelected = selectedRows.includes(id);
            if (isSelected) {
              setSelectedRows(selectedRows.filter(rowId => rowId !== id));
            } else {
              setSelectedRows([...selectedRows, id]);
            }
          };
          const handleSelectAll = () => {
            const visibleProductIds = currentPageProducts.map(product => product.id);
            if (visibleProductIds.every(id => selectedRows.includes(id))) {
              setSelectedRows(selectedRows.filter(id => !visibleProductIds.includes(id)));
            } else {
              setSelectedRows([...new Set([...selectedRows, ...visibleProductIds])]);
            }
          };
          const indexOfLastRow = currentPage * rowsPerPage;
          const indexOfFirstRow = indexOfLastRow - rowsPerPage;
          const currentPageProducts = filteredProducts.slice(indexOfFirstRow, indexOfLastRow);
        
          return (
            <div>
              <h1>Product List</h1>
              <SearchBar onSearch={handleSearch} />
        
              <table>
                <thead>
                  <tr>
                    <th><input type="checkbox" onChange={handleSelectAll} /></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Brand</th> 
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPageProducts.map(product => (
                    <tr key={product.id} style={{ backgroundColor: selectedRows.includes(product.id) ? 'gray' : 'white' }}>
                      <td><input type="checkbox" checked={selectedRows.includes(product.id)} onChange={() => handleSelectRow(product.id)} /></td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.brand}</td> 
                      <td>
                <button onClick={() => handledeleteRow(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalRows={filteredProducts.length}
        rowsPerPage={rowsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

        
        
    
                       
  export default Products;