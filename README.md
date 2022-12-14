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

#### [개발환경]

<div align=left>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">
</div>

<br>
<br/>
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

#### ✔ react-query useQueries로 promise all 구현

https://github.com/doridori-samsam/hodu-open-market/blob/b53b800d54891a21ab5781b1cb09c83b3f45e09f/src/pages/myCart/MyCart.jsx#L26-L63
<br/>
구매자가 장바구니에 담은 상품목록을 불러온 후,
<br/>
상품 이름, 상품 가격, 배송비, 판매자 이름, 이미지 정보를 받아오기 위해 장바구니 상품목록의 상품 id로 다시 한번 상품 정보를 가져왔습니다.
<br/>
이 때 아래와 같이 promise all을 사용할 수 있습니다.

```javaScript
  async function getCartList() {
    try {
      const res = await axios.get(url + "cart/", {
        headers: { Authorization: `JWT ${token}` }
      });
      const items = res.data.results.map((item, idx) =>
        axios.get(url + "products/" + item.product_id + "/")
      );
      const itemsArr = await Promise.all(items);
    } catch (err) {
      console.errir(err);
    }
  }
```

이처럼 Promise.all을 구현하기 위해 react-query의 useQueries 훅을 동적으로 사용하였습니다.
<br/>

---

#### ✔ prefetch로 cached된 data 사용으로 성능 향상

https://github.com/doridori-samsam/hodu-open-market/blob/3d59cf8ae84b2b77337747ad735e76d4e59610b0/src/pages/home/Products.jsx#L27-L57
<br/>
홈페이지에서 first page 상품 api 데이터에서 상품의 총 개수를 한번에 불러와지는 상품목록 개수(15)로 나누고 올림해줍니다.
이를 dataLength에 할당합니다. 그리고 dataLength 만큼 for 반복문으로 queryClient.prefetchQuery훅을 사용합니다.
prefetch된 모든 상품의 데이터는 cached되어 상품 검색시에 사용됩니다.
<br/>

---

#### ✔ 장바구니에 상품 추가 시 cache된 data사용 하여 성능향상

https://github.com/doridori-samsam/hodu-open-market/blob/9786c51373c2f6bb1e91dddddd2d4488079a4d6d/src/pages/productDetail/ProductOverview.jsx#L23-L49
<br/>
구매자가 장바구니에 상품 추가 시, 장바구니에 해당 상품이 기존에 존재하는지 검증하기 위해 사용자 장바구니 데이터를 불러옵니다.
이 때, 사용자가 장바구니 페이지를 이미 방문한 적이 있으면 data를 fetch 하지 않고,
useQueryClient훅을 사용하여 getQueryData로 장바구니 페이지에서 cache된 데이터를 불러옵니다.

---

#### ✔ 무한 스크롤 구현

https://github.com/doridori-samsam/hodu-open-market/blob/a06f65b8e2fda480fb1db81091c6dfcc5c107c23/src/pages/home/Products.jsx#L15-L42

react-query의 useInfiniteQuery와 react-intersection-observer api를 사용하여 무한 스크롤 기능을 구현하였습니다.
<br/>
useInView의 'ref'는 각 페이지 마다 마지막 상품(15번째)에 지정하였습니다.

---

#### ✔ 다음 우편번호 API 서비스로 우편번호 검색 기능 구현

https://github.com/doridori-samsam/hodu-open-market/blob/af4603fd53fccb194a333f0b801bd2678e320d11/src/components/Modal/PostCodeModal.jsx#L1-L41

https://github.com/doridori-samsam/hodu-open-market/blob/af4603fd53fccb194a333f0b801bd2678e320d11/src/pages/payment/Payment.jsx#L81-L91

다음카카오에서 제공하는 우편번호 조회 API 서비스를 이용하여 우편 번호 검색 기능을 구현하였습니다.
<br/>
구매자가 상품 주문 시, 배송 주소 입력에서 우편번호찾기를 클릭하면 우편번호 검색 모달창이 나타납니다.
<br/>
사이트의 기본 컬러팔레트와 어울리도록 주소 검색창 색상을 수정하였습니다.

<br>
<br/>
<h2>💣이슈</h2>

#### - tailwind로 동적으로 background Image url설정시 보이지 않는 이슈.

https://github.com/doridori-samsam/hodu-open-market/blob/2ddbb1c8d2e0616f676e5dfa58b2668b0806c318/src/pages/home/ProductList.jsx#L4-L46
API로 불러온 데이터를 사용하여 동적으로 background Image의 url을 설정할 때, tailwind로 설정 시 이미지가 렌더링 되지 않는 이슈가 있었습니다.
<br/>
tailwind의 오류가 있는 것으로 보여, 인라인 속성으로 background Image url을 설정해 주었습니다.

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
