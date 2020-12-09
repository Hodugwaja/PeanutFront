import React from 'react';
import HireForm from '../components/people/PeopleForm';
import HeaderContainer from '../containers/common/HeaderContainer'

const HireIllust = () => {
    return(
        <div>
            <HeaderContainer/>
            <HireForm hire = "true" name = "디자이너(일러스트레이터)" description = "팀 땅콩 사이트를 디자인 또는 팀 봇 일러스트레이터" number = "1" type = "Illust"/>
        </div>
    )
}

export default HireIllust;