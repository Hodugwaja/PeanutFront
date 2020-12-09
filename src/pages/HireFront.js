import React from 'react';
import HireForm from '../components/people/PeopleForm';
import HeaderContainer from '../containers/common/HeaderContainer'
const HireFront = () => {
    return(
        <div>
            <HeaderContainer/>
            <HireForm hire = "true" name = "프론트엔드 개발자" description = "React를 사용하여 팀 땅콩 웹사이트 개발 및 운영 하는 역할 + 모바일 UI 개발" number = "1" type = "Web"/>
            
        </div>
    )
}

export default HireFront;