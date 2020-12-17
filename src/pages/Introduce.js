import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import '../assets/css/Animate.css'
import './CSS/main.css'
//import StyledText from  '../assets/js/AnimatedText'
import HeaderContainer from '../containers/common/HeaderContainer'
import palette from '../lib/styles/palette';
import Swal from 'sweetalert2'
import Footer from '../components/common/Footer'


// ngrok http 3000 -host-header=localhost
// ssh -R :6001:10.156.145.147:3000 -p 2222 root@piko.app

const Master = styled.div`
margin-left : 10%;
margin-right : 10%;
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);
border : 1px solid ${palette.gray[2]};

* {
 font-family: 'Hanna', fantasy;
 outline : none;
}
	
`;

const Introduce = () => {	
	const { user } = useSelector(({ user }) => ({ user: user.user }));
	const style = {
		margin: '15px',
	};
	const random = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);	
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const easterEgg = random(1, 100000);
	const teamButton = "더 알아보기";
    return(
		
        <Master className="is-preload">
			<HeaderContainer/>
			<div className="divided wrapper-id">
					<section className="spotlight style1 orient-right content-align-left image-position-center" id="first">
						<div className="content">
							<h2>Team Peanut</h2>
							<p>재밌는 디스코드 경험을 해보시고 싶으신가요? <br/>그 여정에 저희 TEAM 땅콩이 함께 하고 싶습니다!</p>
							<p>-팀 땅콩 대표 땅콩</p>
							<ul className="actions stacked">
							{user ? (<div><div>{user.username}님 어서오세요</div> <br/></div>):(<Link to = '/login'><li><button className = "button" style = {style}>로그인</button></li></Link>)}
							{easterEgg > 1 ? (<a href = "https://discord.gg/TXDqdVbMAE" target = "blank"><button className = "button">팀 유니크코드 커뮤니티</button></a>):(<a href = "https://team-peanut-unofficial.piko.ml/" rel = "noreferrer" target = "blank"><li><button className = "button">비공식 사이트 가기</button></li></a>)}
							</ul>
						</div>
						<div className="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt="" />
						</div>
					</section>

					<section className = "spotlight style1 orient-left content-align-left image-position-center">
						<div className = "content">
							<h2>비엔나 봇</h2>
							<p>기능이 너무 다양해서 <br/>무엇을 하는 봇인지 궁금할 정도의 봇</p>
							<ul className = "actions stacked">
								<li><button className = "button">소개보기</button></li>
								<li><button className ="button" onClick = {() => Swal.fire({
									icon: 'error',
									title: '죄송합니다',
									text: '아직 제작 하지 않아 초대가 불가능합니다',
									})}>제작중</button></li>
							</ul>
						</div>
						<div className = "image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt="" />
						</div>
					</section>

					<section className ="spotlight style1 orient-right content-align-left image-position-center">
						<div className ="content">
							<h2>일정관리 봇</h2>
							<p>팀땅콩 내 봇 팀은 봇을 통하여 한 일과 하고 있는 작업 기재</p>
							<ul className ="actions stacked">
								<li><button className ="button">소개 보기</button></li>
								<li><button className ="button" onClick = {() => Swal.fire({
									icon: 'error',
									title: '죄송합니다',
									text: '아직 제작 하지 않아 초대가 불가능합니다',
									})}>제작중</button></li>
							</ul>
						</div>
						<div className ="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt = ""/>
						</div>
					</section>

					<br/><br/><br/><br/><br/>                
			</div>
			<Footer/>
		</Master>
    );
}

export default Introduce;
