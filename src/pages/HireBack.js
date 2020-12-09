import React from 'react';
import HireForm from '../components/people/PeopleForm';
import HeaderContainer from '../containers/common/HeaderContainer'

const HireBack = () => {
    return(
        <div>
            <HeaderContainer/>
            <HireForm  hire = "false" name = "백엔드 개발자" description = "Node.js, MongoDB를 사용하여 팀 땅콩 웹사이트 개발 및 운영 하는 역할" number = "0" type = "Web"/>
        </div>
    )
}

export default HireBack;