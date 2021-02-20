# 실행방법

```
// 터미널 명령어
yarn && yarn start

// public폴더 내의 dummy라는 폴더를 생성하여 데이터를 넣어야 한다.
```

# 프로젝트 구조

- components : header, sidemenu, pageheader UI 구현
- hooks : custom한 react hook 메소드
  - useTable : tableheader 와 pagination 기능 구현
  - useFetch : public 에 dummy경로를 가지고 api 정보 불러오기
- page : dashboard page 단일로 구현

# 하지 못한 부분

1. TableRow 클릭 시, 확장 row 기능 구현
2. 사망 여부 정보 미 표현
3. pie chart 구현

# 구현 예정

1. TableRow 클릭 시, 확장 row 기능 구현

- 회원정보의 고유ID를 기준으로 row onclick 시, 조건 정보와 방문정보의 lentgth 를 가져와 새로운 배열에 넣어 구현

2. 사명 여부 정보 미 표현

- filter 기능을 이용하여 사망정보와 회원정보을 대조하여 새로운 배열 생성

3. Pie chart 배열 메소드를 이용하여 조건 별로 배열을 만들어, 각각의 차트에 넣는다 .
