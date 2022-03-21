import React from 'react';

import {PropTypes } from 'prop-types';


Pagination.propTypes = {
    pagination: PropTypes.array,
    onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
    onPageChange : null,
}

function Pagination(props) {
    const {pagination,onPageChange} = props;


    
    const {page,limmit,totalRows} = pagination[0];



    console.log(page);
    console.log(limmit);
    const totalPages = Math.ceil(totalRows/limmit)

    const handlePageChange = (newPage) =>{
        if(onPageChange)
        {
            onPageChange(newPage);
        }
    }
  return (
    <div>
        <button
            disabled={page <= 1}
            onClick ={()=>handlePageChange(page-1)}
            >
                Prev
        </button>
        <button
            disabled={page >= totalPages}
            onClick ={()=>handlePageChange(page+1)}
            >
                Next
        </button>
    </div>
  )
}

export default Pagination;