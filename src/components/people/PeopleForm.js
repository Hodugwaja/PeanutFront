import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Footer from '../common/Footer'

const HireForm = styled.div`

margin-left: 10%;
margin-right: 10%;

.hook{
    padding-top: 30px;
    text-align: center;
    background-color: ${palette.cyan[8]};
    color: white;
    padding-bottom: 20px;
    @import url(//fonts.googleapis.com/earlyaccess/hanna.css);
    font-family: 'Hanna', fantasy;
}
.hook_title{
    font-size: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
    text-ailgn : left;
    color : white;
}
h1{
    font-size: 20px;
    font-weight: 900;
    text-ailgn : left;
    color : black
}
p, li{
    font-size: 20px;
    font-weight: 100;
    font-family: 'BMHANNAAir';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    margin-top : 7.5px;
    margin-bottom : 10px;
    
}

.container{
    margin-top: 80px;
}

.container h1{
    font-size: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
}


`;
const peopleForm = ({hire, name, description, number, type}) => {
    return(
        <HireForm>
                <div class="hook">
                    {hire === "true" ? (<h1 class="hook_title">[모집중] {name}</h1>) : (<h1 class="hook_title">[모집 중단] {name}</h1>)}        
                </div>
                <div class="container">
                    <h1 class="title">{name}</h1>
                    <p>{description}</p>      
                    <hr />
                    <h1 class="how_many">모집 인원</h1>
                    <p>{number}명</p>
                    <hr />
                    <h1>자격 요건</h1>
                    <ul>
                        <li>인성이 바른 사람</li>
                        <li>새로운 것을 배울 의지가 있는 사람</li>
                        <li>소통 잘 할 수 있는 사람</li>
                    </ul>
                    <hr/>
                    {type === "Web" ? 
                        (
                            <div>
                                <h1 class="advantage">우대 사항</h1>
                                <ul class="advantage_skills">
                                    <li>HTML, CSS, JAVASCRIPT에 대한 기본적인 이해(프론트)</li>
                                    <li>React.js에 대한 이해(프론트)</li>
                                    <li>node.js, mongoDB 사용(백)</li>
                                </ul>
                            </div>
                        )
                        :( 
                            <div>
                                <h1 class="advantage">우대 사항</h1>
                                <ul class="advantage_skills">
                                    <li>파이썬에 대한 기본적인 이해(봇)</li>
                                    <li>봇 제작 경험(봇)</li>
                                    <li>포토샵 또는 일러스트레이터 또는 XD 또는 포토그레이트 사용 유무(디자인)</li>
                                </ul>
                            </div>
                        )
                    
                    }
                   
                   <hr/>
                    <h1 class="how_to">지원 방법</h1>
                    <ul class="how_to_lists">
                        <li>이메일(jjun4341@naver.com)</li>
                        <li>디스코드 땅콩#1283 친구추가 후 DM으로 연락</li>
                    </ul>
                    
                    <hr/>
                    <h1>지원 양식</h1>
                    <ul>
                        <li>디스코드 닉네임 #태그</li>
                        <li>지원 분야(봇, 웹, 디자인)</li>
                        <li>스팩(할 수 있는 언어, 대충 자신있는 정도 | 없으면 없다고 말하면 됩니다. 어차피 들어가면 새로 배울 예정)</li>
                        <li>깃헙 링크</li>
                        <li>깃헙 레포지트리(작업물이 있을 때)</li>
                        <li>각오 한마디</li>
                    </ul>
                    <hr/>
                </div>
                <Footer/>
        </HireForm>
    );
}

export default peopleForm;