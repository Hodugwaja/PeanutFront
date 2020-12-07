import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Swal from 'sweetalert2'
import './PeopleGet.css'

const People = styled.div`
    margin: 0;
    text-align : center;
    @import url(//fonts.googleapis.com/earlyaccess/hanna.css);

* {
 font-family: 'Hanna', fantasy;
}
	
a{
    cursor : pointer;
}

.container{
    justify-content: center;
    text-align: center;
}


.text1{
    font-size: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
}

hr{
    border: 1px solid grey; 
    width: 80%;
    margin-left : 10%;
    margin-bottom: 80px;
}

.text2{
    margin-top: 80px;
    font-size: 36px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
}

.recruit_lists{
    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}

.recruit_lists a{
    text-decoration: none;
    color: black;
    padding: 8px 12px;
    margin: 8px 12px;
    font-size: 24px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}
.recruit_role{
    
    margin-top: 100px;
    font-size: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
    
}
.recruit_lists li :hover{
    color : ${palette.gray[3]};
}
li{

    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    text-decoration: none;
    color: black;
    padding: 8px 12px;
    margin: 8px 12px;
}

`;

const PeopleGet = ({children}) => {
    let history = useHistory();
    const handleBot = () => {
        history.push({
            pathname: "/Bot",
        })
    }
    
    const handleFront = () => {
        history.push({
            pathname: "/FrontEnd",
        })
    }
    const handleBack = () => {
        history.push({
            pathname: "/Back",
        })
    }
    const handleIllust = () => {
        history.push({
            pathname: "/Illust",
        })
    }
    return(
        <div>
            <img className = "hire-background" alt = ""/>
            <People class="container">
                <h1 class="recruit_role">팀 땅콩은 이런 사람을 원합니다</h1>
                <hr />
                <p>4번과 5번은 조건을 갖추지 않아도 됨(있으면 우대)</p>
                <ul class="recruit_lists">
                    <li onClick={() => Swal.fire('인성이 바른 사람', '팀 땅콩은 인성이 바른 사람을 원합니다', 'question')}><a>인성이 바른 사람</a></li>
                    <li onClick={() => Swal.fire('소통 잘할 수 있는 사람', '팀 땅콩은 서로 회의를 하는 경우가 많습니다 그렇기에 소통을 잘할 수 있는 사람을 원합니다', 'question')}><a>소통 잘할 수 있는 사람</a></li>
                    <li onClick={() => Swal.fire('새 기술을 배울 열정 있는 사람', '팀 땅콩에서 일하면서 새로운 기술을 배워야 하는 경우도 있습니다', 'question')}><a>새로운 것을 배우려는 열정이 있는 사람</a></li>
                    <li onClick={() => Swal.fire('땅콩 알러지가 있는 사람', '왜인지는 모르겠지만 저희 팀 전부다 땅콩 알러지에 걸렸어요', 'question')}><a>땅콩 알레르기가 있는 사람</a></li>
                    <li onClick={() => Swal.fire('모솔', '솔로천국!, 커플지옥!', 'question')}><a>모솔인 사람</a></li>
                </ul>
                
                <h1 class="recruit_role">해택</h1>
                <hr />
                <div><li onClick={() => Swal.fire('유료기능', '봇이 개발중이라서 미정', 'question')}><a>팀 땅콩봇 유료기능 사용 가능</a></li></div>
                <div><li onClick={() =>Swal.fire('디스코드 Nitro', '기여도가 제일 높은 사람은 머장이 니트로 줌(ㅆㄱㄴ)', 'question')}><a>매월 기여도가 높은 사람에게 디스코드 Nitro증정</a></li></div>
                
                
                <h1 class="recruit_role">모집분야</h1>
                <hr />
                <ul class="recruit_lists">
                    <li onClick={() => handleBot()}><a>Bot Developer</a></li>
                    <li onClick={() => handleFront()}><a>FrontEnd Developer</a></li>
                    <li onClick={() => handleBack()}><a>BackEnd Developer</a></li>
                    <li onClick={() => handleIllust()}><a>Illustrator</a></li>
                </ul>
                <p>가 족같고 자유로운 분위기를 추구하는 팀 땅콩, 어서 지원하세요!!!</p>
            </People>
        </div>
    )
}


export default PeopleGet;