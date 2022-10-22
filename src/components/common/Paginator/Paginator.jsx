import stules from './Paginator.module.css';
import { useState } from 'react';
import classNames from 'classnames';


let Paginator = ({ totalItemsCount, pageSize, currentPage, onChanget, portionSize = 20 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil( pagesCount / portionSize);
    let [portionNumber, setPortionNumber ] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return <div className={stules.PaginationWrapper}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>prev</button>}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
        .map(bullet => 
        <span 
            onClick={(e) => {onChanget(bullet)}}
            key={bullet} 
            //className={stules.Pagination + ' ' + (currentPage === bullet ? stules.selectedPage : '')}
            className={classNames( stules.Pagination, {[stules.selectedPage]: currentPage === bullet} )}
            >
            {bullet}
        </span>)}
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>next</button>}
    </div>
}


export default Paginator;