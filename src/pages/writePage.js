import React from 'react';
import Responsive from '../components/common/Responsive';
import EditContainer from '../containers/write/EditContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer'
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const writePage = () => {
    return(
        <Responsive>
            <EditContainer />
            <TagBoxContainer/>
            <WriteActionButtonsContainer/>
        </Responsive>
    )
}

export default writePage;