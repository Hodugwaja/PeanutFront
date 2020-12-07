import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HireForm = styled.div`
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
const peopleForm = ({children}) => {
    return(
        <HireForm>
                <div class="hook">
                    <h1 class="hook_title">[모집중] 프론트엔드 개발자</h1>
                    <p> 팀 땅콩의 멋진 웹사이트 프론트엔드에 대하여 모든것을 담당합니다.<br/>우리의 멋진 웹사이트를 더욱더 빛나게 만들어주세요!<br/>백엔드에 대해 이해가 있다면 최고에요!</p>
                </div>
                <div class="container">
                    <h1 class="title">프론트엔드 개발자</h1>
                    <hr>
                    <h1 class="how_many">모집 인원</h1>
                    <p>9999명</p>
                    <h1 class="necessory">자격 요건</h1>
                    <ul class="necessory_skills">
                        <li>HTML.CSS.JS를 유연히 다룰 수 있음</li>
                        <li>React.js를 유연히 다룰 수 있음</li>
                        <li>기타등등 어쩌구 알아서 적으셈</li>
                    </ul>
                    <h1 class="advantage">우대 사항</h1>
                    <ul class="advantage_skills">
                        <li>백엔드에 대한 이해</li>
                        <li>어쩌구 저쩌구 샬라샬라</li>
                    </ul>
                    <h1 class="how_to">지원 방법</h1>
                    <ol class="how_to_lists">
                        <li>이메일</li>
                        <li>디코</li>
                        <li>아 힘들다</li>
                    </ol>
                </div>
        </HireForm>
    );
}