import React from 'react';
import WriteActionButtons from '../components/write/WriteActionButtons'
import Responsive from '../components/common/Responsive';
import EditContainer from '../containers/write/EditContainer';

const writePage = () => {
    return(
        <Responsive>
            <EditContainer />
            <WriteActionButtons/>
        </Responsive>
    )
}

export default writePage;