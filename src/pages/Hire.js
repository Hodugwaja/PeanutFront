import React from 'react';
import HireGet from '../components/people/PeopleGet';
import HeaderContainer from '../containers/common/HeaderContainer'

const Hire = () => {
    return(
        <div>
            <HeaderContainer/>
            <HireGet bot = "false" front = "true" back = "false" illust = "true"/>
        </div>
    )
}

export default Hire;