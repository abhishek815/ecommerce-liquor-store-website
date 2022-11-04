import React from 'react';
import '../../styles/Alcohol.css'
import Checkbox from '@mui/material/Checkbox';
const Filter = ({ filterTypes, header, filters }) => {
    return (
        <div>
            <div className="filter">
                <div className="filter__type">
                    <div className="filter__type--header">
                        <h2>{header}</h2>
                    </div>
                </div>
                {
                    filters.map((filter, index) => {
                        return (<div key={index} className="filter__values">
                            <div className="filter__values-row">
                                <Checkbox size='small' value={filter.toLowerCase()} onChange={(event) => filterTypes(event)} />
                                <span className='filter__name'>{filter}</span>
                            </div>
                        </div>)

                    })
                }
            </div>
        </div>
    );
}

export default Filter;
