const quotes = [
  {
    quote: "눈물과 더불어 빵을 먹어 보지 않은 자는 인생의 참다운 맛을 모른다.",
    author: "-괴테-",
  },
  {
    quote: "자신을 내보여라. 그러면 재능이 드러날 것이다. ",
    author: "-발타사르 그라시안-",
  },
  {
    quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
    author: "-헬렌 켈러-",
  },
  {
    quote: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라.",
    author: "-마크 트웨인-",
  },
  {
    quote:
      "인생이란 학교에는 불행 이란 훌륭한 스승이 있다. 그 스승 때문에 우리는 더욱 단련되는 것이다",
    author: "-프리체-",
  },
  {
    quote:
      "용기있는 자로 살아라. 운이 따라주지 않는다면 용기 있는 가슴으로 불행에 맞서라.",
    author: "-키케로-",
  },
  {
    quote: "가난은 가난하다고 느끼는 곳에 존재한다.",
    author: "-에머슨-",
  },
  {
    quote:
      "문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다.",
    author: "-메이벨 뉴컴버-",
  },
  {
    quote:
      "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "-이드리스 샤흐-",
  },
  {
    quote:
      "먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다.",
    author: "-채근담-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
