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
`;

function ConstructorSearchApp() {
    const [clientData, setClientData] = useState([]);
    useEffect(() => {
        axios.get('https://ac.cnstrc.com/search/apple?key=key_fygjntHGW7usvxC8')
            .then((data) => {
                const result = data.data.response.results ?? [];
                setClientData(result);
            });
    }, [clientData]);

    return (
        <StyledPageContainer>
            <h1>Search Results for Apples</h1>
            <StyledDescription>
                This page was created as part of an interview for Constructor.io. 
                This page displays the search results for Apples derived from Constructor.io's search API.
            </StyledDescription>
            <br/>
            <StyledCardContainer>
                {
                    clientData.map((item) => {
                        return (
                            <StyledCardDisplay key={item.data.id}>
                                <div>{item.value}</div>
                                <br/>
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
