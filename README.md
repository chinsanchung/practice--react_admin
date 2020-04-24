### 실행

1. 우선 `yarn install`로 필요 패키지들을 설치합니다.
2. `yarn dev:assets`로 구현에 필요한 bundle.js, index.html 을 웹팩으로 생성합니다.
3. `yarn dev:server`로 localhost:4000 에 페이지를 띄웁니다.

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
- [x] 몽구스로 몽고 DB 를 생성, 연결하기
- [x] Shops 스키마, 모델을 만들기 - [] 왜 get_list 로 처음에 불러오는게 느릴까
- [x] create, get_list, get_one, edit, show, delete 컨트롤러 함수 작성 > create 의 url 이 /Shops/create 가 아니라 /Shops 로 해야만 작동함
- [x] 라우트를 미들웨어로 만들어서 묶기. 기본적으로 '/Shops'를 가지고 있으니, get_list하려면 url을 ""으로 해야 작동함
- [x] 임의로 몽고에 넣은 데이터를 출력해야함. "Warning: Missing translation for key: "Not Found"" 해결하기

- [x] react-admin 의 클라이언트, 서버를 연결하기

#### 04/23

- Shops
	- [x] 검색 기능: 객체 키가 search 가 아니라 q 로 바꿔야했음
	- [x] 페이지: 20개를 넘어갈 때 페이지 구분, 쿼리 검색이 제대로 되는가?
	- [x] 업데이트: 에러가 났었는데, Shops.updateOne()을 변수에 넣어 res에 보내주니 해결. 아래는 에러였던 구문
	- [] 처음 로딩이 느린 이유는? (계속 돌아가고 있음)
- [x] Members 만들기
- [x] Events 만들기
- [x] Announces 만들기
- [x] 검색에 mongoose 가 지원하는 regex expression 으로 부분검색 허용

#### 04/24
- [x] 마지막 항목을 삭제할 때 시간이 걸려서, 삭제가 안되고 남았다가 삭제됨..delete undo 때문인듯. 천천히 지우면 괜찮음
- Member 페이지에 기능 추가
	- [] 이미지 업로드..아바타 사진을 사용하도록 하기. 
		- 처음엔 되는데 서버를 닫고 다시 열면 불러오질 못함. 새로 갱신할 때마다 경로가 바뀌는듯?
	- [] 파일 업로드...text 파일로 간단 소개글, 이력
- blob 으로 변환된 URL은 보안 때문에 해당 문서에만 작동, 파일로 저장해서 그걸 보여줘야하는데 저장을 어떻게