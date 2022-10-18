<h1>💚호두 오픈마켓</h1>
📌 2022.09 - 2022.10
<br>
📌 호두마켓 배포 URL : https://hodumarket.netlify.app/
<br>
<br>

<img src="https://media.discordapp.net/attachments/934745841661526058/1031987148657790976/smartmockups_l9ehzc5a.jpg?width=771&height=578">

<h2>📄개요</h2>

```
호두마켓은 누구나 자유롭게 상품을 게시하여 판매하고 구매할 수 있는 오픈마켓 서비스입니다.

회원은 판매자/구매자 유형으로 나뉘며 판매자는 상품 정보를 게시,수정,삭제 할 수 있습니다.

구매자는 원하는 상품을 원하는 수량만큼 장바구니에 담거나 바로 구매를 할 수 있습니다.
```

</br>
<br>
<h2>⚙기술 및 개발환경</h2>

#### [기술]

<div align=left>
<img src="https://img.shields.io/badge/Vite-%23646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/-React Query-%23FF4154?style=for-the-badge&logo=react query&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind-%2306B6D4?style=for-the-badge&logo=tailwind css&logoColor=white">
</div>
</br>
📌 BackEnd : 제공된 API 사용
<br/>
📌 Daum Postcode Service API 사용
<br/>
📌 Version :

```
react : "18.2.0"
react-router-dom : "6.3.0"
axios: "0.27.2",
react-daum-postcode: "3.1.1"
react-intersection-observer: "9.4.0"
react-query: "3.39.2"
tailwindcss: "3.1.8"
vite: "3.0.7"
```

</br>

#### [개발환경]

<div align=left>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">
</div>

<br>
<h2>🎨구현 기능</h2>

- 🔐 계정

  - 로그인/로그아웃
  - 구매자 / 판매자 회원가입
  - 유효성 검증
  - 토큰 검증

- 🏠 홈

  - 상품 검색
  - 상품 목록
  - 무한 스크롤

- 🎁 상품

  - 상품 상세 페이지
  - 상품 수량 선택
  - 장바구니 상품 담기
  - 상품 주문 및 결제
  - 상품 재고 유효 검사

- 🛒 장바구니

  - 장바구니에 담긴 상품 목록 확인
  - 상품 수량 수정 및 상품 삭제
  - 상품 개별 / 전체 선택
  - 선택된 상품의 총 할인 / 배송비 / 상품가격 확인
  - 선택된 상품 혹은 개별 주문

- 👨‍🌾 판매자 센터

  - 상품 등록 및 삭제
  - 등록된 상품 수정

- ETC
  - 모바일 유저를 위한 반응형 디자인 구현
  - api 데이터 로딩 중 로딩 스피너 화면 구현

</br>
<br>
<h2>✨코드 포인트</h2>

### ✔ svg sprite로 svg data를 css 파일에 묶어서 사용

---

### ✔ promise all을 react-query useQueries로 구현

https://github.com/doridori-samsam/hodu-open-market/blob/b53b800d54891a21ab5781b1cb09c83b3f45e09f/src/pages/myCart/MyCart.jsx#L26-L63

---

3. prefetch로 데이터불러오고 검색 시 data 사용
4. 구매하기/상품 디테일 페이지에서 cache된 data사용 하여 성능향상
5. useInfinite, useInview를 사용하여 무한 스크롤 구현
6. 다음 우편번호 API를 사용한 우편번호 검색 기능 구현

</br>
<br>
<h2>💣이슈</h2>
1. tailwind 동적으로 background url 설정시 보이지 않는 이슈.

</br>
<br>
<h2>📂폴더트리</h2>

```
📦 src
 ┣📂 assets
 ┣📂 components
 ┃ ┣📂 buttons
 ┃ ┣📂 footer
 ┃ ┣📂 modal
 ┃ ┣📂 navBar
 ┃ ┣ NotFound.jsx
 ┃ ┣ NowLoading.jsx
 ┃ ┗ SmNowLoading.jsx
 ┣📂 context
 ┣📂 pages
 ┃ ┣📂 auth
 ┃ ┣📂 home
 ┃ ┣📂 myCart
 ┃ ┣📂 payment
 ┃ ┣📂 productDetail
 ┃ ┣📂 productSearch
 ┃ ┣📂 sellerCenter
 ┃ ┗📂 sellerProductsUpload
 ┣📜 App.jsx
 ┣📜 main.jsx
 ┣📜 index.css
 ┗📜 style.js

```

</br>
