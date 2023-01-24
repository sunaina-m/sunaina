import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/FilterContext';
const Sort = () => {
  const { filter_products ,sorting } = useFilterContext()
  return (
    <Wrapper className='sort-section'>
      
      <div className='product-data'>
        <p>{`${filter_products.length} Product Available`}</p>

      </div>
      <div className='sort-selection'>
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" className="sort-selection--style" onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
             <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
  
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`

export default Sort
