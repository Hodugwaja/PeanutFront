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
							{easterEgg > 1 ? (<a href = "https://discord.gg/Cp5jduJZMn" target = "blank"><button className = "button">팀 땅콩 유저 커뮤니티</button></a>):(<a href = "https://team-peanut-unofficial.piko.ml/" rel = "noreferrer" target = "blank"><li><button className = "button">비공식 사이트 가기</button></li></a>)}
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
							<p>팀땅콩 내 봇 팀은 봇을 통하여 한 일과 하고 있는 작업 기재(예정)</p>
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

					<div>
						<section className = "wrapper style1 align-center">
							<div className = "inner">
								<h2>팀 땅콩 팀원들</h2>
								<p onClick = {() => alert("사실은 팀 땅콩을 위해 열심히 갈리는 노예들입니다\n살려주세요.....")}>팀 땅콩을 위해 열심히 일하는 팀원<span style={{textDecoration: 'line-through'}}>(노예)</span>들 입니다</p>
							</div>
							<h3><strong>봇 개발팀</strong></h3>
							<p>평범하게 봇을 개발하는 팀입니다</p>
							<div className="gallery style2 medium onscroll-fade-in">
								<article>
									<a href="https://github.com/jjun4341" className="image">
										<img src="https://cdn.discordapp.com/avatars/443734180816486441/b87bc59fe1a1de7da5756a557760b2c4.webp?size=256" alt="" />
									</a>
									<div className="caption">
										<h3>땅콩(PM) </h3>
										<p>학생 개발자이자 팀 대표, 땅콩입니다.</p>
										<ul className ="actions fixed">
											<li><span className ="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article >
									<a className="image">
										<img src="https://cdn.discordapp.com/avatars/557119176590884864/a_82d38e9364084c01c61e09c83e01fe9b.gif?size=256" alt="" />
									</a>
									<div className="caption">
										<h3>지영</h3>
										<p>파이썬을 다루는 폐인입니다</p>
										<ul className="actions fixed">
											<li><span className="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a className="image">
										<img src="https://media.discordapp.net/attachments/754181625776046146/778546208780058624/emote-6.png?width=677&height=677" alt="" />
									</a>
									<div className = "caption">
										<h3>방세준</h3>
										<p>뭐 다 하고싶은 빵</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a className = "image">
										<img src="https://cdn.discordapp.com/avatars/734560292024877056/b13b89124afe37b63904ba829cbf0b57.webp?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>블렉카이</h3>
										<p>(아직 없음)</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
							</div>
							<div className="gallery style2 medium onscroll-fade-in">
								<article>
									<a className="image">
										<img src="https://cdn.discordapp.com/avatars/740138708707049483/00bca3f91de8d08c16f68a86b21534d7.webp?size=256" alt="" />
									</a>
									<div className="caption">
										<h3>Hyper</h3>
										<p>유니티는 갓이다</p>
										<ul className ="actions fixed">
											<li><span className ="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article >
									<a className="image">
										<img src="https://cdn.discordapp.com/avatars/719003738228129832/858410cb4764deedbf5aa7185e5c64f9.webp?size=256" alt="" />
									</a>
									<div className="caption">
										<h3>Cord</h3>
										<p>코딩을 하고 싶은 디스코드 봇 만드는 사람</p>
										<ul className="actions fixed">
											<li><span className="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a className="image">
										<img src="https://cdn.discordapp.com/avatars/524515155254444032/a_53cbea39530a2c10e383ef50a8589d72.gif?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>BainBble0211</h3>
										<p>(아직 없음)</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a className = "image">
										<img src="https://cdn.discordapp.com/avatars/514800004414570506/a244a65b64b8800b81ddae266e333408.webp?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>안녕</h3>
										<p>(아직 없음)</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
							</div>
							<br /><br /><br />
							<h3><strong>웹 개발팀</strong></h3>
							<p>해당 홈페이지를 제작, 담당합니다</p>
							<div className = "gallery style2 medium onscroll-fade-in">
								<article >
									<a className="image">
										<img src="https://imgur.com/M0KveU6.jpg" alt="" />
									</a>
									<div className ="caption">
										<h3>호두과자 - Front</h3>
										<p>프앤 개발자 <br/>호두과자입니다</p>
										<ul className="actions fixed">
											<li><span className="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>

								<article>
									<a className = "image">
										<img src="https://cdn.discordapp.com/avatars/401532480278102027/19ddf68d07bc666121cf62dcda95f761.webp?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>Enusta</h3>
										<p>해킹, 보안 담당 데스</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>

								<article>
									<a className = "image">
										<img src="https://cdn.discordapp.com/avatars/628595345798201355/7e7863c93dbe6246d344160518f129d7.webp?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>파랑이</h3>
										<p>치노 좋아하는 10덕입니다</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								
								<article>
									<a className = "image">
										<img src="https://cdn.discordapp.com/avatars/299895531701010442/f2e502746c0c14c2be0f81f744fcabfc.webp?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>스톰</h3>
										<p>(여친 있음)</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
							</div>

							<br /><br /><br />
						<h3><strong>디자인팀</strong></h3>
							<p>홈페이지 제작, 봇 일러스트 등을 짭니다</p>
							<div className = "gallery style2 medium onscroll-fade-in">
								<article >
									<a className="image">
										<img src="https://cdn.discordapp.com/avatars/727486102587310102/90ed4efa7798ae7f99aca26f046d0002.webp?size=256" alt="" />
									</a>
									<div className ="caption">
										<h3>냐코</h3>
										<p>냐코는 잼민이~</p>
										<ul className="actions fixed">
											<li><span className="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								
								<article>
									<a className = "image">
										<img src="https://cdn.discordapp.com/avatars/761220557160579102/8c9e4c942aa84a593cbe49b27345e833.webp?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>버그</h3>
										<p>바퀴벌레임 ㅅㄱ</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>

								<article>
									<a className = "image">
										<img src="https://cdn.discordapp.com/avatars/748542279941357578/612d5e459aee6b2099d9d71f05ceed45.webp?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>팔구</h3>
										<p>(아직 없음)</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								
								<article>
									<a className = "image">
										<img src="" alt="" />
									</a>
									<div className = "caption">
										<h3>공석</h3>
										<p>여러분이 될 수 있습니다.<br/>어서 지원해보세요</p>
										<ul className = "actions fixed">
											<Link to = "/hire"><span className = "button small">지원</span></Link>
										</ul>
									</div>
								</article>
							</div>
							<br/><br/><br/>
							<Link to = "/hire"><h3><strong>나도 지원하기</strong></h3></Link>
						</section>
				</div>
					<br/><br/><br/><br/><br/>


					<footer className = "wrapper style1 align-center">
						<div className = "inner">
							<p>Footer 제작중...</p>
						</div>
					</footer>
                
			</div>
		</Master>
    );
}

export default Introduce;
