## 유니크코드 공식 웹사이트 README
### 사용 언어 : javascript, css, redux saga

1. 서버키는 법
    - 필수 설치 요소
        - Node
        - Yarn
    - 사용법
        - 해당 파일의 경로를 cmd로 인도한다(아니면 vs코드 켜서 터미널 키면 됨)
        - yarn install를 누르고 기다린다(꽤 걸릴 거임)
        - npm start를 누른다

2. 서버 도메인
    - '/'  
        - 파일 : src/pages/Introduce.js
        - 메인 페이지(디자인 바꿀 예정), 팀에 대한 간단한 소개와 봇 소개목록 있음
        - 각각 소개 란을 누르면 봇 페이지 나올 예정(아직 제작 안함)
    - '/login, '/register'
        - 파일 
            - 로그인 : src/pages/Login.js
            - 회원가입 : src/pages/Register.js
            - 디자인 쪽 : src/components/auth/
        - 로그인과 회원가입
        - 로그인과 회원가입을 할 수 있다(서버가 필요함, 서버코드는 정식 발행 시 드릴 예정)
        - 원래라면 공지사항과 그에 대한 피드백과 같은 댓글을 넣을 기능 구현 예정(이번주 내에 끝낼듯) -> 따라서 아직 쓸데는 없음
    - '/hire'
        - 파일
            - 페이지 : src/pages/Hire.js
            - 디자인 : src/components/people/peopleGet.js
        - 구인구직 하는 페이지
        - 일단은 님들 팀을 안 구한다고 하길래 다이렉트는 없음(그곳 내용만 바꾸면 됨)
    - '/FrontEnd | /BackEnd | /bot | /illust'
        - 파일
            - FrontEnd : src/pages/HireFront.js
            - BackEnd : src/pages/HireBack.js
            - bot : src/pages/HireBot.js
            - illust : src/pages/Hireilust.js
            - 디자인 : src/components/people/peopleForm.js
        - 따로 구인구직 세부정보
        - 이것도 안하니까 패스
    - write
        - 파일
            - src/pages/writePage.js
            - 디자인 : src/components/write/writeForm.js



## 주의사항
- 디자인이 구림(바꿀꺼임, 역시 탬플릿은 써야 하지 말아야함, 그것때문에 2주 밀림, 나도 구림 ㄱㅊ)
- 모솔 만세
- 솔로 천국 커플 지옥
- 문제 있으면 호두과자#8981로 연락
- 제가 팀에서 제일 쓸데없어서 코드 족같이 짜놓음 양해바람