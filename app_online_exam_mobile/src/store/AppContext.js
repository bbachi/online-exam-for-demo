
import React, { useState, useEffect } from 'react';
import { saveItem, getItem } from './storage';

const AppContext = React.createContext({});

export default AppContext;
export const AppConsumer = AppContext.Consumer;

export const AppProvider = props => {
    
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        saveItem("userDetails", userDetails);
    }, [userDetails])

    return <AppContext.Provider
                value={{
                    userDetails,
                    setUserDetails,
                    addCurrentExamToUserDetails: currentExam => {
                        const userDtls = Object.assign({}, userDetails);
                        userDtls.ongoingExam = currentExam;
                        setUserDetails(userDtls)
                    }
                }}>
                {props.children}
            </AppContext.Provider>
}