const posts = [
  { title: "AI와 함께 쓰는 법률 리서치 노트", topic: "Law Notes", date: "2026.05.18", read: "6 min", excerpt: "공식 법령 데이터와 생성형 AI를 함께 쓸 때 신뢰도를 끌어올리는 확인 루틴.", tags: ["law", "ai", "research"] },
  { title: "강의안을 블로그 시리즈로 바꾸는 방법", topic: "Learning Design", date: "2026.05.16", read: "5 min", excerpt: "수업 자료를 검색 가능한 포스트 묶음으로 재구성하는 편집 흐름.", tags: ["course", "writing"] },
  { title: "프롬프트보다 중요한 작업 설계", topic: "AI Practice", date: "2026.05.14", read: "7 min", excerpt: "좋은 답변은 좋은 요청보다 좋은 업무 구조에서 나온다는 간단한 원칙.", tags: ["prompt", "workflow"] },
  { title: "판례를 읽을 때 먼저 보는 네 가지", topic: "Law Notes", date: "2026.05.12", read: "8 min", excerpt: "쟁점, 사실관계, 판단 구조, 적용 가능성을 빠르게 분리하는 독해법.", tags: ["case", "method"] },
  { title: "지식 카드가 쌓일수록 강해지는 이유", topic: "Knowledge Systems", date: "2026.05.10", read: "4 min", excerpt: "메모가 아니라 재사용 가능한 작은 판단 단위를 축적하는 방식.", tags: ["notes", "system"] },
  { title: "블로그 홈 화면의 정보 밀도", topic: "Design", date: "2026.05.08", read: "5 min", excerpt: "예쁜 첫 화면과 빠른 탐색 사이에서 균형을 잡는 레이아웃 기준.", tags: ["ux", "blog"] },
  { title: "법령 인용 검증 체크리스트", topic: "Law Notes", date: "2026.05.06", read: "6 min", excerpt: "조문 번호, 시행일, 개정 이력, 하위법령을 순서대로 확인하는 법.", tags: ["citation", "check"] },
  { title: "AI 자동화의 실패 로그 읽기", topic: "AI Practice", date: "2026.05.04", read: "7 min", excerpt: "실패를 버그가 아니라 다음 설계를 알려주는 데이터로 다루기.", tags: ["automation", "debug"] },
  { title: "초보자를 위한 카드형 글쓰기", topic: "Learning Design", date: "2026.05.02", read: "5 min", excerpt: "긴 글을 작은 카드 단위로 나누면 독자의 진입 장벽이 낮아집니다.", tags: ["writing", "cards"] },
  { title: "계약서 검토 전에 해야 할 질문", topic: "Law Notes", date: "2026.04.30", read: "6 min", excerpt: "문구를 보기 전에 당사자, 목적, 돈의 흐름, 종료 조건을 먼저 묻기.", tags: ["contract", "risk"] },
  { title: "한 페이지 대시보드로 수업 운영하기", topic: "Learning Design", date: "2026.04.28", read: "4 min", excerpt: "자료, 과제, 질의응답을 한 화면에서 관리하는 작고 단단한 방법.", tags: ["teaching", "dashboard"] },
  { title: "AI 도구를 고르는 현실적인 기준", topic: "AI Practice", date: "2026.04.26", read: "5 min", excerpt: "모델 성능보다 반복 업무와 데이터 흐름에 맞는지를 먼저 봅니다.", tags: ["tools", "ops"] },
  { title: "검색 가능한 아카이브 만들기", topic: "Knowledge Systems", date: "2026.04.24", read: "6 min", excerpt: "폴더보다 태그와 요약, 그리고 좋은 제목이 오래 갑니다.", tags: ["archive", "search"] },
  { title: "히어로 섹션이 해야 하는 일", topic: "Design", date: "2026.04.22", read: "3 min", excerpt: "브랜드 이름, 정서, 다음 행동을 첫 화면에서 동시에 전달하기.", tags: ["hero", "visual"] },
  { title: "온라인 분쟁 상담 기록 정리법", topic: "Law Notes", date: "2026.04.20", read: "7 min", excerpt: "시간순 증거 정리는 상담과 신고의 속도를 크게 높입니다.", tags: ["evidence", "dispute"] },
  { title: "나만의 리서치 템플릿 만들기", topic: "Knowledge Systems", date: "2026.04.18", read: "5 min", excerpt: "질문, 출처, 판단, 후속 액션을 한 묶음으로 저장하는 구조.", tags: ["template", "research"] },
  { title: "생성형 AI 수업의 첫 15분", topic: "Learning Design", date: "2026.04.16", read: "4 min", excerpt: "기술 설명보다 학습자의 기대와 두려움을 먼저 정렬합니다.", tags: ["class", "ai"] },
  { title: "페이지네이션은 어디에 있어야 할까", topic: "Design", date: "2026.04.14", read: "4 min", excerpt: "목록 탐색의 끝에서 다음 행동을 자연스럽게 이어주는 배치.", tags: ["pagination", "ux"] },
  { title: "판단을 돕는 요약의 조건", topic: "AI Practice", date: "2026.04.12", read: "6 min", excerpt: "짧음보다 중요한 것은 누락된 위험과 불확실성을 드러내는 일.", tags: ["summary", "decision"] },
  { title: "법률 문서에서 날짜가 중요한 이유", topic: "Law Notes", date: "2026.04.10", read: "5 min", excerpt: "시행일, 공포일, 사건일이 엇갈리면 결론이 달라질 수 있습니다.", tags: ["date", "law"] },
  { title: "블로그 카드의 좋은 제목", topic: "Design", date: "2026.04.08", read: "3 min", excerpt: "멋진 문장보다 클릭 전 기대를 정확히 맞추는 제목이 오래 갑니다.", tags: ["title", "cards"] },
  { title: "AI 협업 기록을 남기는 방식", topic: "AI Practice", date: "2026.04.06", read: "5 min", excerpt: "결과물뿐 아니라 결정과 수정 이유를 함께 남기는 습관.", tags: ["collaboration", "log"] },
  { title: "강의 후 질문을 콘텐츠로 바꾸기", topic: "Learning Design", date: "2026.04.04", read: "4 min", excerpt: "반복 질문은 다음 글의 제목이 될 가능성이 큽니다.", tags: ["qa", "content"] },
  { title: "법률정보 안내와 법률자문의 경계", topic: "Law Notes", date: "2026.04.02", read: "8 min", excerpt: "일반 정보, 사안 적용, 대리 행위의 차이를 독자에게 투명하게 말하기.", tags: ["ethics", "law"] },
  { title: "나쁜 자동화를 고치는 법", topic: "AI Practice", date: "2026.03.31", read: "6 min", excerpt: "한 번에 크게 고치기보다 실패 지점을 좁혀 작은 루프로 안정화합니다.", tags: ["automation", "repair"] },
  { title: "태그 체계를 너무 빨리 만들지 않기", topic: "Knowledge Systems", date: "2026.03.29", read: "4 min", excerpt: "글이 어느 정도 쌓인 뒤 독자의 실제 탐색 언어로 태그를 정리합니다.", tags: ["tags", "archive"] },
  { title: "카드 그리드의 리듬", topic: "Design", date: "2026.03.27", read: "4 min", excerpt: "같은 크기 안에서 메타, 제목, 요약, 태그의 밀도를 일정하게 유지하기.", tags: ["grid", "layout"] },
  { title: "사례 기반 학습 자료 만들기", topic: "Learning Design", date: "2026.03.25", read: "5 min", excerpt: "개념 설명 전에 작은 사례를 주면 학습자가 훨씬 빨리 붙잡습니다.", tags: ["case", "learning"] },
  { title: "법령 검색이 빗나갈 때", topic: "Law Notes", date: "2026.03.23", read: "5 min", excerpt: "약칭, 부분검색, 시행령 혼동을 피하는 확인 절차.", tags: ["search", "law"] },
  { title: "지식 블로그의 운영 주기", topic: "Knowledge Systems", date: "2026.03.21", read: "4 min", excerpt: "쓰기, 갱신, 묶기, 버리기를 정기적으로 반복하는 편집 캘린더.", tags: ["operations", "blog"] },
  { title: "작은 CSS 규칙이 주는 안정감", topic: "Design", date: "2026.03.19", read: "3 min", excerpt: "간격, 테두리, 반응형 제약을 정하면 화면이 덜 흔들립니다.", tags: ["css", "polish"] },
  { title: "AI에게 맡기기 좋은 일과 아닌 일", topic: "AI Practice", date: "2026.03.17", read: "6 min", excerpt: "초안, 비교, 정리는 맡기고 책임 있는 판단은 사람이 붙잡습니다.", tags: ["judgment", "ai"] },
  { title: "수업 자료의 버전 관리", topic: "Learning Design", date: "2026.03.15", read: "5 min", excerpt: "수정된 슬라이드와 예제 코드를 다시 찾을 수 있게 이름 붙이기.", tags: ["version", "teaching"] },
  { title: "독자의 다음 클릭을 설계하기", topic: "Design", date: "2026.03.13", read: "4 min", excerpt: "목록 끝의 페이지네이션은 단순한 숫자가 아니라 읽기의 리듬입니다.", tags: ["navigation", "ux"] },
  { title: "법률 리서치 결과를 공유할 때", topic: "Law Notes", date: "2026.03.11", read: "6 min", excerpt: "출처, 기준일, 미확인 지점을 함께 적어야 오해가 줄어듭니다.", tags: ["source", "research"] },
  { title: "블로그를 오래 살리는 첫 구조", topic: "Knowledge Systems", date: "2026.03.09", read: "5 min", excerpt: "처음부터 완벽한 CMS보다 단순하고 명료한 정적 구조가 유리할 때.", tags: ["static", "pages"] }
];

const postsPerPage = 9;
let currentPage = 1;
let currentTopic = "all";
let currentSearch = "";

const grid = document.querySelector("#post-grid");
const pagination = document.querySelector("#pagination");
const prevButton = document.querySelector("#prev-page");
const nextButton = document.querySelector("#next-page");
const count = document.querySelector("#post-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");
const topicFilter = document.querySelector("#topic-filter");

const topics = [...new Set(posts.map((post) => post.topic))].sort();
topics.forEach((topic) => {
  const option = document.createElement("option");
  option.value = topic;
  option.textContent = topic;
  topicFilter.append(option);
});

function getFilteredPosts() {
  const normalizedSearch = currentSearch.trim().toLowerCase();
  return posts.filter((post) => {
    const matchesTopic = currentTopic === "all" || post.topic === currentTopic;
    const searchable = `${post.title} ${post.topic} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase();
    const matchesSearch = !normalizedSearch || searchable.includes(normalizedSearch);
    return matchesTopic && matchesSearch;
  });
}

function createCard(post) {
  const article = document.createElement("article");
  article.className = "post-card";
  article.innerHTML = `
    <div>
      <div class="post-meta">
        <span class="topic-pill">${post.topic}</span>
        <span>${post.date}</span>
        <span>${post.read}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
    </div>
    <div class="post-tags">
      ${post.tags.map((tag) => `<span>#${tag}</span>`).join("")}
    </div>
  `;
  return article;
}

function renderPosts() {
  const filteredPosts = getFilteredPosts();
  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  currentPage = Math.min(currentPage, pageCount);
  const start = (currentPage - 1) * postsPerPage;
  const visiblePosts = filteredPosts.slice(start, start + postsPerPage);

  grid.replaceChildren(...visiblePosts.map(createCard));
  emptyState.hidden = filteredPosts.length !== 0;
  count.textContent = `${filteredPosts.length} posts`;
  renderPagination(pageCount, filteredPosts.length);
}

function renderPagination(pageCount, totalPosts) {
  pagination.replaceChildren();
  prevButton.disabled = currentPage === 1 || totalPosts === 0;
  nextButton.disabled = currentPage === pageCount || totalPosts === 0;

  for (let page = 1; page <= pageCount; page += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "page-number";
    button.textContent = page;
    button.setAttribute("aria-label", `Go to page ${page}`);
    if (page === currentPage) {
      button.setAttribute("aria-current", "page");
    }
    button.addEventListener("click", () => {
      currentPage = page;
      renderPosts();
      document.querySelector("#posts").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    pagination.append(button);
  }
}

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    renderPosts();
  }
});

nextButton.addEventListener("click", () => {
  currentPage += 1;
  renderPosts();
});

searchInput.addEventListener("input", (event) => {
  currentSearch = event.target.value;
  currentPage = 1;
  renderPosts();
});

topicFilter.addEventListener("change", (event) => {
  currentTopic = event.target.value;
  currentPage = 1;
  renderPosts();
});

renderPosts();
