import React,{useEffect, useState} from 'react'
import Cards from "../components/Cards";
import loading from "../imagen/loading.gif";
import { useInfoContext } from "../context/InfoContext";
import ReactPaginate from 'react-paginate';

function ListCards({items}) {
    const [page, setPage] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 15;
    
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setPage(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,items]);





    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
      };
  return (
    <>
    <div className="contenedor">
            {page.length > 0 ? (
            page.map((dat) => <Cards key={dat.id} datos={dat} />)
            ) : (
            <img src={loading} />
            )}
        </div>
        <div className="paginacion">
            <ReactPaginate
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            /> 
        </div>
    </>    
  )
}

export default ListCards