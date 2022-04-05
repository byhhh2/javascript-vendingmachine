<details>
<summary>자판기 STEP1 (민초🪥🧼 X 무비🎬)</summary>

## 기능 요구사항

### 1. 공통

- [x] Interface 또는 type을 이용하여, 주요 도메인 객체의 타입을 정의하고 설계한다.

### 2. 라우팅 기능

- [x] Browser History Api를 이용하여 SPA처럼 라우팅을 적용한다.
  - [x] 매번 페이지를 로드 하는 것이 아닌, 히스토리를 관리하고, 페이지를 url에 따라 동적으로 렌더링한다.
- [x] 상품 관리, 잔돈 충전, 상품 구매 페이지는 모두 동적으로 렌더링해야 한다.

### 3. 상품 관리 탭

#### UI

- [x] 상품 관리탭은 자판기가 보유하고 있는 상품을 추가하는 기능을 수행한다.
- [x] 최초 상품 목록은 비워진 상태이다.
- [x] 관리자가 상품을 추가하면 상품 현황이 업데이트된다.
- [x] 수정 시 상품명, 가격, 수량 정보 영역 자체가 인풋 영역으로 변경된다.
- [x] 관리자가 상품을 수정하면 상품 현황이 업데이트된다.
- [x] 삭제 시 confirm을 활용하여 사용자에게 다시 한 번 확인한다.
- [x] 관리자가 상품을 삭제하면 상품 현황이 업데이트된다.

#### Domain

- [x] 상품명은 최대 10글자까지 가능하다.
- [x] 상품 가격은 100원부터 시작하며, 최대 10,000원까지 가능하다. 그리고 10원으로 나누어 떨어져야 한다.
- [x] 한 제품당 수량은 최대 20개까지 넣을 수 있다.
- [x] 추가에 성공한 상품은 localStorage에 저장한다.
- [x] localStorage에 저장된 상품이 있을 경우 가져온다.

#### UI + Domain

- [x] 상품명, 가격, 수량을 입력해 상품을 추가할 수 있다.
- [x] 관리자는 추가한 상품을 수정, 삭제할 수 있다.

#### 예외

- [x] [예외] 상품명이 중복되는 경우
- [x] [예외] 상품명이 공백인 경우
- [x] [예외] 상품명이 10글자를 초과한 경우
- [x] [예외] 상품 가격이 100원 미만이거나 10,000원을 초과하는 경우
- [x] [예외] 상품 가격이 10원으로 나누어 떨어지지 않는 경우
- [x] [예외] 상품 가격이 공백인 경우
- [x] [예외] 상품 수량이 1개 미만이거나 20개를 초과한 경우
- [x] [예외] 상품 수량이 공백인 경우

### 4. 잔돈 충전 탭

#### UI

- [x] 잔돈 충전탭은 자판기가 보유할 금액을 충전하는 기능을 수행한다.

#### Domain

- [x] 잔돈 충전 탭에서 최초 자판기가 보유한 금액은 0원이며, 각 동전의 개수는 0개이다.
- [x] 잔돈은 10원으로 나누어 떨어지는 금액만 투입할 수 있다. 보유할 수 있는 최대 금액은 100,000원이다.
- [x] 자판기 보유 금액만큼의 동전이 무작위로 생성된다.
- [x] 자판기 보유 금액을 누적하여 충전할 수 있다. 추가 충전 금액만큼의 동전이 무작위로 생성되어 기존 동전들에 더해진다.
- [x] 잔돈은 localStorage에 저장한다.
- [x] localStorage에 저장된 잔돈이 있을 경우 가져온다.

#### UI + Domain

- [x] 잔돈 충전 입력 요소에 충전할 금액을 입력한 후, 충전하기 버튼을 눌러 자판기 보유 금액을 충전할 수 있다.

#### 예외

- [x] [예외] 충전할 금액이 공백인 경우
- [x] [예외] 금액이 0원 이하이거나 100,000원을 초과할 경우
- [x] [예외] (충전할 금액 + 현재 보유 금액)이 100,000원을 초과할 경우
- [x] [예외] 금액이 10원으로 나누어 떨어지지 않는 경우

### 테스트 요구사항

- [x] 비즈니스 로직에 대한 단위 테스트를 Jest로 작성한다.

</details>

<br>
<br>

# 자판기 STEP2 🍪

## 기능 요구사항

### 1. 상품 구매

> 상품 구매탭은 사용자가 금액을 투입할 수 있으며, 투입한 금액에 맞춰 상품을 구매하고, 남은 금액에 대해서는 잔돈을 반환하는 기능을 수행한다.

#### 잔돈 관련

- [ ] 상품 구매 페이지에서 최초 충전 금액은 0원이며, 반환된 각 동전의 개수는 0개이다.
- [ ] 사용자는 투입할 금액 입력 요소에 투입 금액을 입력한 후, `투입하기`버튼을 이용하여 금액을 투입한다.
  - 금액은 10원으로 나누어 떨어지는 금액만 투입할 수 있다.
  - 최대 투입 금액은 10,000원이다.
  - [예외] 10원으로 나누어 떨어지는 금액을 투입하지 않았을 경우
  - [예외] 투입할 금액 + 투입된 금액이 10,000원을 초과한 경우
  - [예외] 금액을 입력하지 않고 `투입하기`버튼을 눌렀을 경우
- [ ] 금액은 누적으로 투입할 수 있다.
- [ ] 사용자는 `반환하기` 버튼을 통해 잔돈을 반환 받을 수 있다.
  - [예외] 반환할 금액이 존재하지 않는 경우
- [ ] 잔돈 계산에 대해 아래의 규칙을 적용한다.
  - 잔돈을 돌려줄 때는 현재 보유한 최소 개수의 동전으로 잔돈을 돌려준다.
  - 지폐를 잔돈으로 반환하는 경우는 없다고 가정한다.
  - 잔돈을 반환할 수 없는 경우 잔돈으로 반환할 수 있는 금액만 반환한다.
- [ ] 사용자가 버튼을 클릭했을 때 해당 행위가 정상적으로 동작하거나, 실패하였음을 `snackbar`를 통해 보여준다.
  - 잔돈 충전에 성공했을 시 잔돈 충전에 성공했음을 `snackbar`를 통해 보여준다.
  - 잔돈 충전에 실패했을 시 잔돈 충전에 실패했음을 `snackbar`를 통해 보여준다.
  - 잔돈 반환에 성공했을 시 잔돈 반환에 성공했음을 `snackbar`를 통해 보여준다.
  - 잔돈 반환에 실패했을 시 잔돈 반환에 실패했음을 `snackbar`를 통해 보여준다.

#### 구매 관련

- [ ] 사용자는 금액을 투입 후, 상품을 구매할 수 있다.
  - 상품 가격에 알맞는 금액이 투입되면, 해당 상품을 구매할 수 있다.
  - [예외] 투입된 금액이 상품 가격보다 적다면 사용자는 상품을 구매할 수 없다.
- [ ] 상품의 개수가 0개 이하가 되면, `구매 가능 상품 현황`에서 해당 상품이 지워진다.
- [ ] 사용자가 특정 상품을 구매하면, 잔돈이 차감된다.
- [ ] 사용자가 특정 상품을 구매하면, 그 상품의 재고가 차감된다.
- [ ] 구매 관련 알림을 `snackbar`를 통해 보여준다.
  - 구매에 성공했을 시 구매에 성공했음을 `snackbar`를 통해 보여준다.
  - 구매에 실패했을 시 구매에 실패했음을 `snackbar`를 통해 보여준다.

<br>

### 2. 관리자 회원 기능

- [ ] 관리자의 회원 가입을 위한 기능은 `json-server-auth`를 이용한다.
- [ ] 관리자가 되고자 하는 유저는 회원 가입을 할 수 있다.
  - name은 2~6글자까지 가능하다.
  - password는 실 서비스를 참고해서 규칙을 정한다.
  - [예외] 이미 DB에 존재하는 이메일이면 회원가입할 수 없다.
  - [예외] name이 2글자 미만, 6글자 초과인 경우
  - [예외] 이메일, 이름, 비밀번호, 비밀번호 확인란 중 비어있는 곳이 존재하는 경우
- [ ] password 관련 규칙
  - password는 8자 이상이여야 한다.
  - 영문 + 숫자의 조합이여야 한다.
  - 회원가입 시 입력한 `비밀번호`와 `비밀번호 확인란`이 동일해야한다.
  - [예외] password가 8자 미만인 경우
  - [예외] password가 영문 + 숫자의 조합이 아닌 경우
  - [예외] `비밀번호`와 `비밀번호 확인란`이 동일하지 않은 경우
- [ ] 관리자는 로그인할 수 있다.
  - 로그인하고 나면 로그인 버튼은 로그아웃 버튼으로 변경되어야 한다.
  - 로그인한 유저만, 정보의 수정이 가능하다.
  - 로그인하지 않은 유저에게는 로그인 외 다른 관리 기능 버튼은 보이지 않는다.
  - [예외] 로그인 폼을 모두 채우지 않은 경우
  - [예외] 존재하지 않은 계정인 경우 로그인 실패
  - [예외] 비밀번호가 옳지 않은 경우 로그인 실패
- [ ] 로그인한 유저의 이름중 첫번째 글자를 썸네일처럼 만든다.
- [ ] 로그인한 유저의 썸네일을 클릭하면 select box로 `회원 정보 수정`과 `로그아웃` 메뉴를 만든다.
- [ ] 로그인한 유저는 회원 정보를 수정할 수 있다.
  - 가입 시 입력한 이메일은 수정할 수 없다.
  - [예외] 수정 폼을 모두 채우지 않은 경우
  - [예외] name이 2글자 미만, 6글자 초과인 경우
  - [예외] password가 8자 미만인 경우
  - [예외] password가 영문 + 숫자의 조합이 아닌 경우
  - [예외] `비밀번호`와 `비밀번호 확인란`이 동일하지 않은 경우
- [ ] 관리자는 로그아웃할 수 있다.
  - 로그아웃하고 나면 `로그인` 버튼으로 변경되어야 한다.
- [ ] 계정 관련 알림을 `snackbar`를 통해 보여준다.
  - 로그인에 성공했을 경우
  - 로그인에 실패했을 경우
  - 회원가입을 성공했을 경우
  - 회원가입을 실패했을 경우
  - 회원 정보 수정에 성공했을 경우
  - 회원 정보 수정이 실패했을 경우

<br>

### 테스트 요구사항

- [ ] 사용자 입장에 대한 테스트를 Cypress로 작성한다.