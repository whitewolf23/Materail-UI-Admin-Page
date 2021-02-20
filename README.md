# 실행방법

```
// 터미널 명령어
yarn && yarn start
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

- person_id 를 기준으로 row onclick 시, conditoin_occurrence정보와 visit_occurrence row 를 lentgth 를 가져와 새로운 배열에 넣어 구현

2. 사명 여부 정보 미 표현

- filter 기능을 이용하여 death와 person을 대조하여 새로운 배열 생성

3. pie chart 배열 메소드를 이용하여 성별, 인종, 민족 별로 배열을 만들어, 각각의 차드에 넣는다 .
