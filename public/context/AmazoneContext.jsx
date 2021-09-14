import { Container } from '@material-ui/core';
import React, { createContext, useState } from 'react'

const AmazoneContext = createContext();

const AmazoneContextProvider = (props) => {
    // Responsible for opening and closing sub container
    const [subContainer, setSubContainer] = useState(false);
    // Responsible for storing sub container entries
    const [subContainerEntries, setSubContainerEntries] = useState(null);
    return (
        <AmazoneContext.Provider>
        </AmazoneContext.Provider>
    )
}

export default AmazoneContextProvider
