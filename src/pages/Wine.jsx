import React, { useEffect, useState } from 'react';
import Alcohol from '../components/ui/Alcohol';
import '../styles/Alcohol.css'
import Filter from '../components/ui/Filter';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';



let active_filters = []

const Wine = ({ alc: initialAlc, addToCart }) => {

    const [initial_alc, setinitialAlc] = useState(initialAlc.filter(alc=>alc.type === 'wine').slice());
    const [alc, setAlc] = useState(initial_alc);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    function filter_array(categories) {
        let condition = false
        for (let i=0; i < active_filters.length; i++) {
            if (categories.includes(active_filters[i])) {
                condition = true
            } else {
                condition = false
                break
            }
        }
        return condition
    }

    function filterTypes(filter) {
        setLoading(true)
        console.log(filter.target.value)
        if (filter.target.checked) {
            active_filters.push(filter.target.value)
        }
        else if (!filter.target.checked) {
            active_filters = active_filters.filter(arr => arr !== filter.target.value)
        }

        if (active_filters.length > 0) {
            setAlc(initial_alc.slice().filter(alc => filter_array(alc.categories)))
        } else {
            setAlc(initial_alc)
        }
        setPage(1)
        setLoading(false)
    }

    function filterAlc(filter) {
        setLoading(true)
        if (filter === 'LOW_TO_HIGH') {
            setAlc(alc.slice().sort((a, b) =>
                (a.salePrice) - (b.salePrice)
            ))
        }
        else if (filter === 'HIGH_TO_LOW') {
            setAlc(alc.slice().sort((b, a) =>
                (a.salePrice) - (b.salePrice)
            ))
        }
        else if (filter == "ALPHABETICALLY") {
            setAlc(alc.slice().sort((a, b) =>
                a.title.localeCompare(b.title)
            ))
        }
        setLoading(false)
    }


    return (
        <section id="beer">
            <div className="row">
                <div className="container">
                    <div className="top__bar">
                        <div className="beer__info">
                            <span className='title'>Wine</span> <span className="number__products">({initial_alc.length} Products)</span>
                        </div>
                        <div className="sort">
                            <select id="filter" className='sort__select' defaultValue="DEFAULT" onChange={(event) => filterAlc(event.target.value)}>
                                <option value="DEFAULT" disabled>Sort</option>
                                <option value="LOW_TO_HIGH">Price, low to high</option>
                                <option value="HIGH_TO_LOW">Price, high to low </option>
                                <option value="ALPHABETICALLY">Alphabetically</option>
                            </select>
                        </div>
                    </div>
                    <div className="alc__wrapper">
                        <div className="alc__body--wrapper">
                            <div className="filters">
                                <Filter header="Type" filterTypes={filterTypes} filters={['Red Wine', "White Wine", "Sparkling Wine", "Fruit Wine"]}/>
                            </div>
                            <div className="alc__list">
                                {      
                                    loading ? <CircularProgress /> :
                                    alc.slice((page-1)*15, (page)*(15)).map((a, index) => {
                                        return <Alcohol addToCart={addToCart} key={index} alcohol={a} />
                                    })
                                }
                            </div>
                        </div>
                        <Pagination className='pagnation' count={Math.ceil(alc.length/15)} onChange={(event,val) => {setPage(val)}}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Wine;
