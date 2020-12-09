import React from 'react';
import WriteActionButtons from '../components/write/WriteActionButtons'
import Responsive from '../components/common/Responsive';
import EditContainer from '../containers/write/EditContainer';
import writeActionButtonsContainer from '../containers/write/WriteActionButtonsContainer'

const writePage = () => {
    return(
        <Responsive>
            <EditContainer />
            <WriteActionButtons/>
            <writeActionButtonsContainer/>
        </Responsive>
    )
}

export default writePage;