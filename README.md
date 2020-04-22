### 진행사항

#### 04/20

- [x] create-react-app 없이 만들기
      [링크](https://dev.to/theenadayalan/how-to-set-up-react-js-from-scratch-without-using-create-react-app-37mk)
- [x] 서버를 만들고, 각종 미들웨어들을 연결하기. - package.json 에 명령어를 입력. import 문이 되도록 babel-node 활용

#### 04/21

- 참고: 모르는 것들 하나씩 배우고 적용하고 그런 것은 개인 공부에 어울림.. 회사는 결과물을 빠르게 내는 것이 중요.. 여기 코드를 복사 붙여넣기해서 적용하는게 나았을수도..
- 참고: webpackDevMiddleware 로 publicPath 를 지정하면, 나중에 index.html 에 `<script src="bundle.js"></script>`로 연결시킬 때의 경로를 자동으로 지정해줌
- [x] 디렉토리 구분, 대시보드 출력
- [x] ra-data-fakerest 로 가짜 dataProvider 생성, 가짜 데이터를 연결
- [x] 가짜 데이터를 기반으로 Shop 페이지 출력

#### 04/22

- 참고: db를 먼저 만들고, 가데이터를 만들 필요가 없음. 프로바이더가 서버로 보내고 받고 하는 것이 중요.
- [] 몽구스로 몽고 DB 를 생성, 연결하기 - create
- [x] Shop 스키마, 모델을 만들기
	- [] 왜 get_list 로 처음에 불러오는게 느릴까
- [x] create, get_list, get_one, edit, show, delete 컨트롤러 함수 작성
      > create 의 url 이 /Shops/create 가 아니라 /Shops 로 해야만 작동함
- [x] 라우트를 미들웨어로 만들어서 묶기. 기본적으로 '/Shops'를 가지고 있으니, get_list하려면 url을 ""으로 해야 작동함
- [x] 임의로 몽고에 넣은 데이터를 출력해야함. "Warning: Missing translation for key: "Not Found"" 해결하기

- [x] react-admin 의 클라이언트, 서버를 연결하기

#### 04/23

- [] Members 만들기
	- [] Members Components
	- [] Members Router
	- [] Members Controller
