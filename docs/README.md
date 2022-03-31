# 자판기 STEP1 (민초🪥🧼 X 무비🎬)

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