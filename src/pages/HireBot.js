import React from 'react';
import HireForm from '../components/people/PeopleForm';
import HeaderContainer from '../containers/common/HeaderContainer'

const HireBot = () => {
    return(
        <div>
            <HeaderContainer/>
            <HireForm hire = "false" name = "봇 개발자" description = "비엔나 봇, 일정관리 봇을 개발하는 역할" number = "20" type = "Bot"/>
        </div>
    )
}

export default HireBot;