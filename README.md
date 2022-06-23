# 🥕 당근마켓🥕

## 개발기간

2022.06.17 - 2022.06.23


## 내용
당근마켓 클론코딩

## 😎 당근마켓 클론코딩 작업자!

👉 BE : 고승준, 황현준, 이영균

👉 FE : 정신영, 정대규


<div><h1>🛠STACKS🛠</h1></div>   
<div align=center> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <br>
  <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">   
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=purple">   
  <br>
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=pink">   
  <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=green">     
</div>



## API 명세서


[API명세서]([(https://www.notion.so/5-e46792f114dc498298c40eb3b76d544f)])


## 기능

- [x] 1. 게시글
  - [x] 목록 가져오기
  - [x] 추가하기
  - [x] 삭제하기
  - [x] 수정하기
- [x] 2. 회원가입하기 (modal)
- [x] 3. 로그인하기 (modal)
- [x] 4. 검색
- [x] 5. 파이어베이스 or S3로 배포!



## 페이지별 상세페이지별 상세

1. 회원가입

   - [x] 아이디 형식 체크
   - [x] 비밀번호 체크
   - [x] profile 이미지
   - [x] 중복체크 안할시 가입불가

2. 로그인

   - [x] 아이디, 패스워드 형식에서 벗어날 시 로그인 막을 것

3. 메인 페이지(게시글 목록 페이지)

   - [x] 게시글 목록 노출
   - [x] 게시글 하나는 작성자지역, 이미지 미리보기, 텍스트 제목, 가격, 작성시간 으로 구성
   - [x] 게시글 하나를 클릭 시, 게시글 상세 페이지로 이동 (로그인 안할시 상세페이지 이동불가)

4. 글 작성 페이지

   - [x] 1. 올릴 사진 미리보기
   - [x] 2. 빈칸이 없어야 작성완료 가능
   - [x] 3. 작성 완료 시 메인 페이지로 이동

5. 게시글 상세 페이지

   - [x] 작성자만 수정, 삭제 가능



## 초기설정

```bash
$ yarn add react@18.1.0

$ yarn add react-router-dom

$ yarn add styled-components

$ yarn add redux react-redux redux-thunk redux-logger redux-actions redux-devtools-extension
 
$ yarn add enhancer

$ yarn add connected-react-router

$ yarn add axios

$ yarn add firebase@9.8.3

$ yarn add storage
```

## 결과

[당근마켓]([http://dictionarytest1.s3-website.ap-northeast-2.amazonaws.com/])
