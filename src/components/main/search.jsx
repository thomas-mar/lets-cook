import React from "react";
import { useState } from "react";


const Search = () => {

    const [searchTerm, setSearchTerm] = useState();

    const searchItems = (term) => {
        alert("Searching for " + term);
    }
    return (
        <>
                <div class="row">
                    <div class="col-8">
                        <h3>Search for a dish</h3>
                    </div>
                    <div class="col-4">
                        <div className="search input-group">
                            <input className="search-recipes form-control" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <button className="search-button btn btn-primary" onClick={() => searchItems(searchTerm)}>Go</button>
                        </div>
                    </div>
                </div>

        </>
    );
}

export default Search;