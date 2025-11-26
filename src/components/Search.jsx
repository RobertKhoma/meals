import React, { useState } from "react";

function Search({handelClick}) {
const [value, setValue] = useState('')
const handelSubmit = ()=>{
    handelClick(value)
}

const handelKey =(e) =>{
    if (e.key === 'Enter') {
        handelSubmit()
    }
}

  return (
    <div className="row">
      <div className="row-search">
        <div className="col s12 input-field">
             <input onKeyDown={handelKey} onChange={(e) => {setValue(e.target.value)}} id="search-field" type="search" className="search" placeholder="search" value={value} />
             
             </div>
        <button className="btn btn-search" onClick={handelSubmit} >Search</button>
      </div>
    </div>
  );
}

export default Search;
