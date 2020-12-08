import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HireForm = styled.div`
    margin: 0;
    text-align : center;
    @import url(//fonts.googleapis.com/earlyaccess/hanna.css);
    margin: 0;
    height: 100%;


.hook{
    padding-top: 20px;
    text-align: center;
    background-color: royalblue;
    color: white;
    padding-bottom: 20px;
}
.hook_title{
    font-size: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
}
.hook p{
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 100;
}

.container{
    margin: 50px 80px;
}

.container h1{
    font-size: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
}

.container p{
    font-size: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

.necessory_skills li{
    font-size: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

.advantage_skills{
    font-size: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

.how_to_lists{
    font-size: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

`;
const peopleForm = ({name, description, number, type}) => {
    return(
        <HireForm>
                <div class="hook">
                    <h1 class="hook_title">[모집중] {name}</h1>
                    {description}                
                </div>
                <div class="container">
                    <h1 class="title">{name}</h1>
                    <hr />
                    <h1 class="how_many">모집 인원</h1>
                    <p>{number}명</p>

                    {type === "Web "? 
                        (
                            <div>
                                <h1 class="necessory">자격 요건</h1>
                                <ul class="necessory_skills">
                                    <li>HTML.CSS.JS를 유연히 다룰 수 있음</li>
                                    <li>인성과 새로운 것을 배울 열정, 소통 의지</li>
                                </ul>
                                <h1 class="advantage">우대 사항</h1>
                                <ul class="advantage_skills">
                                    <li>React.js에 대한 이해(프론트)</li>
                                    <li>node.js, mongoDB 사용(백)</li>
                                </ul>
                            </div>
                        )
                        :( 
                            <div>
                                <h1 class="necessory">자격 요건</h1>
                                <ul class="necessory_skills">
                                    <li>HTML.CSS.JS를 유연히 다룰 수 있음</li>
                                    <li>인성과 새로운 것을 배울 열정, 소통 의지</li>
                                </ul>
                                <h1 class="advantage">우대 사항</h1>
                                <ul class="advantage_skills">
                                    <li>React.js에 대한 이해(프론트)</li>
                                    <li>node.js, mongoDB 사용(백)</li>
                                </ul>
                            </div>
                        )
                    
                    }
                   
                    <h1 class="how_to">지원 방법</h1>
                    <ol class="how_to_lists">
                        <li>이메일</li>
                        <li>디스코드 땅콩#1283 친구추가 후 DM으로 연락</li>
                    </ol>
                </div>
        </HireForm>
    );
}

export default peopleForm;