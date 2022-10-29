import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import loading from '../imagen/loading.gif'
import Menu from '../components/Menu';
import {useParams} from 'react-router-dom'
import ReactPaginate from 'react-paginate';
function Categoria() {
    const [data, setData]= useState([])
    const [page, setPage] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 12;
  let {id}= useParams()

  useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage;
    const categoryFetch =()=>{
        fetch(`https://www.freetogame.com/api/games?category=${id}`)
        .then(res=> res.json())
        .then(bd => {
            setData(bd)
            setPage(bd.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(bd.length / itemsPerPage));
        })
        .catch(err =>console.error(err))
    }

    id && categoryFetch()

  },[id,itemOffset, itemsPerPage])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };



  return (
    <>
    <Menu/>
    <div className='contenedor'>
      {page.length > 0 ? (
            page.map((dat) => <Cards key={dat.id} datos={dat} />)
            ) : (
            <img src={loading} />
            )}
    </div>
    <div className="paginacion">
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
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

export default Categoria