import React from 'react';

const Pagination = ({ currentPage, totalRows, rowsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, currentPage + 1);

  return (
    <div>
      {startPage > 1 && <button onClick={() => onPageChange(currentPage - 1)}>Prev</button>}

      {pageNumbers.slice(startPage - 1, endPage).map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{ fontWeight: currentPage === page ? 'bold' : 'normal' }}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && <button onClick={() => onPageChange(currentPage + 1)}>Next</button>}
    </div>
  );
};

export default Pagination;