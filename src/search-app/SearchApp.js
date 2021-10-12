import axios from 'axios';
// import styled from 'styled-components'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Card } from '@mui/material';

// Styled Components
const StyledPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const StyledCardDisplay = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding: 16px;
    width: 400px;
    height: 280px;
`;
const StyledThumbnail = styled.img`
    height: 200px;
`;
const StyledDescription = styled.p`
    max-width: 80%;
    overflow-wrap: normal;
    margin-bottom: 40px;
`;
const StyledInput = styled.input`
    padding: 8px;
`;
const StyledSearchButton = styled.button`
    padding: 8px
`;

function ConstructorSearchApp() {
    const [clientData, setClientData] = useState([]);
    // const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchUrl, setSearchUrl] = useState('https://ac.cnstrc.com/search/a?key=key_fygjntHGW7usvxC8');
    useEffect(() => {
        axios.get(searchUrl)
            .then((data) => {
                const result = data.data.response.results ?? [];
                setClientData(result);
            });
    }, [searchUrl]);
    // useEffect(() => {
    //     axios.get('https://ac.cnstrc.com/autocomplete/ap?key=key_fygjntHGW7usvxC8').then((data) => {
    //         const result = data.data.sections["Search Suggestions"] ?? [];
    //         console.log(result);
    //         setSearchSuggestions(result);
    //     });
    // }, [searchValue]);
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
    }
    const handleClickSearch = () => {
        setSearchUrl(`https://ac.cnstrc.com/search/${searchValue.trim().toLowerCase()}?key=key_fygjntHGW7usvxC8`);
    }
    return (
        <StyledPageContainer>
            <h1>Search Results</h1>
            <StyledDescription>
                This page displays the search results derived from the given API.
            </StyledDescription>
            <div>
                <StyledInput type="text" id="searchbar" name="searchbar" value={searchValue} onChange={handleSearchChange} placeholder="Type your search value" ></StyledInput>
                <StyledSearchButton type="submit" onClick={handleClickSearch}>Search!</StyledSearchButton>
            </div>
            <br />
            <StyledCardContainer>
                {
                    clientData.map((item) => {
                        return (
                            <StyledCardDisplay key={item.data.id}>
                                <div>{item.value}</div>
                                <br />
                                <StyledThumbnail style={{ float: "right" }} src={item.data.url} alt="search result" />
                            </StyledCardDisplay>
                        )
                    })
                }
            </StyledCardContainer>
        </StyledPageContainer>
    );
}

export default ConstructorSearchApp;
