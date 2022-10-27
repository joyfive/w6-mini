## 항해 99 미니프로젝트 : 프론트엔드

## 팀원

### FE

- [오기쁨](https://github.com/SunghwaSon) | **React**
- [손성화](https://github.com/joyfive) | **React**

### BE

- [장윤서](https://github.com/Younddo) | **Spring** _팀장_
- [정동훈](https://github.com/dhun0103?tab=repositories) | **Spring**
- [정성우](https://github.com/dhun0103?tab=repositories) | **Spring**

## 페이지별 기능요약

### 1. 홈(GET)

- d-day, 랜덤문구 api 조회

### 2. 회원가입/로그인 (POST 및 토큰 저장)

- Input text box 및 Select box 활용하여 data 전송
- 로그인 시 Response header 의 토큰을 쿠키에 저장 (setCookie)

### 3. 리스트 조회 (GET, 요청 시 header에 토큰 전달)

- 파라미터값으로 요청 기획하였으나, 시간부족으로 프론트는 기능 미구현, 백엔드는 구현완료
  (list (모두의 이야기) 페이지는 최신순, 모든 조, 모든 태그 기준으로 요청 / list/team (우리조 이야기) 페이지는 최신순, 3조, 모든 태그 기준으로 요청하도록 임의 처리했습니다.

### 4. 게시글 등록(POST)

- 이미지 file 타입과 일반 인풋 값 텍스트 밸류 form data로 취합하여 POST

### 5. 게시글 삭제(DELETE)

- postID로 삭제 요청

### 6. 댓글 등록(POST) - post ID prop

- postID로 특정 게시글 분류하여 댓글 등록 요청

### 7. 댓글 삭제(DELETE) - post ID 및 comment ID prop

- Comment ID로 특정 댓글 분류하여 댓글 삭제 요청

### 8. 그 외 게시글 수정, 게시글 좋아요, 댓글 좋아요, 상세페이지 조회, 마이페이지 내가쓴 게시글, 댓글 조회는

- 백엔드 개발 완료되었으나 시간관계상 프론트는 UI만 구현하였습니다.

### 9. 재사용성 고려

- Button, input, box UI 구현용 컴포넌트 분리 및 커스텀 훅 useInput 사용으로 재사용성을 높이고자 함
