const posts = [
  { title: "전세금이 안 돌아올 때, 제일 먼저 할 일", topic: "주거와 임대차", date: "2026.05.18", read: "6분", excerpt: "내용증명부터 임차권등기명령까지, 보증금을 지키는 순서를 사례로 정리합니다.", tags: ["전세금", "임대차", "내용증명"] },
  { title: "알바비를 못 받았을 때 신고 전 체크리스트", topic: "일과 노동", date: "2026.05.16", read: "5분", excerpt: "근로계약서가 없어도 임금체불을 주장할 수 있는 증거와 절차를 살펴봅니다.", tags: ["알바비", "임금체불", "노동청"] },
  { title: "오픈채팅에서 개인톡이 계속 올 때 대응법", topic: "디지털 생활", date: "2026.05.14", read: "7분", excerpt: "거절 의사 표시, 캡처 보관, 스토킹 신고까지 단계별로 차분히 정리합니다.", tags: ["오픈채팅", "스토킹", "증거"] },
  { title: "중고거래 사기, 환불 말고 무엇을 해야 할까", topic: "소비자와 거래", date: "2026.05.12", read: "6분", excerpt: "계좌, 대화 내역, 배송 정보로 민사와 형사 대응 가능성을 나눠봅니다.", tags: ["중고거래", "사기", "환불"] },
  { title: "월세 관리비가 갑자기 올랐을 때", topic: "주거와 임대차", date: "2026.05.10", read: "4분", excerpt: "계약서와 고지 내역을 기준으로 부당한 청구인지 확인하는 방법.", tags: ["월세", "관리비", "계약서"] },
  { title: "프리랜서 계약서에서 꼭 봐야 할 세 문장", topic: "일과 노동", date: "2026.05.08", read: "5분", excerpt: "대금 지급일, 수정 범위, 저작권 조항을 놓치면 일이 끝난 뒤 다툼이 커집니다.", tags: ["프리랜서", "계약서", "저작권"] },
  { title: "카톡 욕설, 모욕죄가 되는 경우와 안 되는 경우", topic: "디지털 생활", date: "2026.05.06", read: "6분", excerpt: "공연성, 특정성, 표현 수위를 중심으로 실제 판단 포인트를 풀어봅니다.", tags: ["카톡", "모욕", "명예훼손"] },
  { title: "헬스장 환불 규정, 약관보다 중요한 기준", topic: "소비자와 거래", date: "2026.05.04", read: "5분", excerpt: "이용 기간, 위약금, 환불 기준을 소비자분쟁해결기준과 함께 봅니다.", tags: ["헬스장", "환불", "약관"] },
  { title: "층간소음 항의, 선을 넘으면 역으로 불리합니다", topic: "이웃과 공동생활", date: "2026.05.02", read: "5분", excerpt: "항의 방법, 기록 방식, 관리사무소와 분쟁조정 절차를 정리합니다.", tags: ["층간소음", "이웃", "분쟁조정"] },
  { title: "가족에게 빌려준 돈, 차용증이 없으면 끝일까", topic: "가족과 상속", date: "2026.04.30", read: "6분", excerpt: "계좌이체 내역과 메시지로 빌려준 돈임을 설명하는 방법을 봅니다.", tags: ["차용증", "가족", "대여금"] },
  { title: "교통사고 합의서에 사인하기 전 확인할 것", topic: "사고와 배상", date: "2026.04.28", read: "7분", excerpt: "치료비, 향후 치료, 과실비율, 보험사 문구를 차례대로 확인합니다.", tags: ["교통사고", "합의", "보험"] },
  { title: "택배 분실, 판매자와 택배사 중 누구에게 말할까", topic: "소비자와 거래", date: "2026.04.26", read: "4분", excerpt: "구매 방식과 배송 상태에 따라 책임을 묻는 상대가 달라질 수 있습니다.", tags: ["택배", "분실", "온라인쇼핑"] },
  { title: "회사 단톡방에서 공개 망신을 당했다면", topic: "일과 노동", date: "2026.04.24", read: "6분", excerpt: "직장 내 괴롭힘, 모욕, 명예훼손 가능성을 분리해서 봅니다.", tags: ["직장", "괴롭힘", "단톡방"] },
  { title: "사진을 허락 없이 올렸을 때 생기는 문제", topic: "디지털 생활", date: "2026.04.22", read: "5분", excerpt: "초상권, 개인정보, 명예훼손이 각각 어떻게 다른지 쉽게 설명합니다.", tags: ["초상권", "개인정보", "사진"] },
  { title: "내용증명은 협박장이 아니라 기록 장치입니다", topic: "문서와 증거", date: "2026.04.20", read: "5분", excerpt: "내용증명을 보낼 때 넣을 말과 빼야 할 말을 생활 사례로 정리합니다.", tags: ["내용증명", "증거", "분쟁"] },
  { title: "계약 해지 문자를 보낼 때 조심할 표현", topic: "문서와 증거", date: "2026.04.18", read: "4분", excerpt: "감정적인 문장보다 날짜, 사유, 요구사항을 명확히 남기는 것이 중요합니다.", tags: ["계약해지", "문자", "증거"] },
  { title: "상속 포기와 한정승인, 이름은 어렵지만 차이는 단순합니다", topic: "가족과 상속", date: "2026.04.16", read: "7분", excerpt: "빚이 있는 상속에서 기한과 선택지를 놓치지 않는 법을 설명합니다.", tags: ["상속포기", "한정승인", "빚"] },
  { title: "주차 시비가 폭언으로 번졌을 때", topic: "이웃과 공동생활", date: "2026.04.14", read: "4분", excerpt: "현장 대응보다 녹음, 차량번호, 목격자 확보가 더 중요할 때가 많습니다.", tags: ["주차", "폭언", "증거"] },
  { title: "소액재판, 변호사 없이도 가능할까", topic: "문서와 증거", date: "2026.04.12", read: "6분", excerpt: "청구 금액, 증거, 관할 법원을 기준으로 소액사건 절차를 훑어봅니다.", tags: ["소액재판", "민사", "청구"] },
  { title: "배달 음식에서 이물질이 나왔을 때", topic: "소비자와 거래", date: "2026.04.10", read: "4분", excerpt: "사진, 영수증, 보관 상태를 남겨야 보상과 신고가 쉬워집니다.", tags: ["배달", "환불", "위생"] },
  { title: "퇴사할 때 연차수당을 놓치지 않는 법", topic: "일과 노동", date: "2026.04.08", read: "5분", excerpt: "남은 연차, 사용 촉진, 퇴사일을 기준으로 받을 수 있는 금액을 따져봅니다.", tags: ["퇴사", "연차", "수당"] },
  { title: "명예훼손 글을 발견했을 때 삭제 요청 순서", topic: "디지털 생활", date: "2026.04.06", read: "6분", excerpt: "플랫폼 신고, 캡처, 임시조치, 고소를 어떤 순서로 검토할지 정리합니다.", tags: ["명예훼손", "삭제", "플랫폼"] },
  { title: "임대인이 집을 보여달라고 할 때 거절할 수 있나", topic: "주거와 임대차", date: "2026.04.04", read: "4분", excerpt: "매매나 새 임차인 모집 상황에서 임차인의 주거 평온과 협조 의무를 봅니다.", tags: ["임대차", "집보기", "거절"] },
  { title: "학교폭력 기록, 부모가 먼저 알아야 할 절차", topic: "가족과 상속", date: "2026.04.02", read: "8분", excerpt: "신고, 조사, 심의, 조치 결정까지 가족이 준비할 자료를 정리합니다.", tags: ["학교폭력", "절차", "가족"] },
  { title: "온라인 리뷰를 썼다가 고소당할 수 있을까", topic: "디지털 생활", date: "2026.03.31", read: "6분", excerpt: "사실 적시, 의견 표현, 공익성의 차이를 음식점 리뷰 사례로 풀어봅니다.", tags: ["리뷰", "명예훼손", "후기"] },
  { title: "보증을 서기 전, 가족이라도 멈춰야 하는 이유", topic: "가족과 상속", date: "2026.03.29", read: "5분", excerpt: "연대보증의 무게와 사후 다툼을 줄이는 확인 문장을 소개합니다.", tags: ["보증", "가족", "채무"] },
  { title: "렌터카 흠집 비용을 요구받았을 때", topic: "소비자와 거래", date: "2026.03.27", read: "5분", excerpt: "인수 전 사진, 반납 확인서, 수리 견적을 기준으로 대응합니다.", tags: ["렌터카", "수리비", "증거"] },
  { title: "반려동물 소음과 손해배상 이야기", topic: "이웃과 공동생활", date: "2026.03.25", read: "4분", excerpt: "참을 수 있는 생활소음과 법적 책임이 생기는 상황을 구분합니다.", tags: ["반려동물", "소음", "손해배상"] },
  { title: "합의금 이야기를 꺼낼 때 절대 하면 안 되는 말", topic: "사고와 배상", date: "2026.03.23", read: "6분", excerpt: "합의와 협박의 경계, 문서로 남길 표현을 조심스럽게 살펴봅니다.", tags: ["합의", "협박", "배상"] },
  { title: "계좌이체 메모 한 줄이 증거가 되는 순간", topic: "문서와 증거", date: "2026.03.21", read: "4분", excerpt: "돈을 보낼 때 남기는 메모가 훗날 다툼을 줄이는 방법이 될 수 있습니다.", tags: ["계좌이체", "증거", "대여금"] },
  { title: "보이스피싱 계좌로 돈을 보냈다면", topic: "사고와 배상", date: "2026.03.19", read: "5분", excerpt: "지체 없이 해야 할 신고와 지급정지 요청, 이후 절차를 정리합니다.", tags: ["보이스피싱", "신고", "지급정지"] },
  { title: "공유숙박 예약 취소, 환불 기준은 어디서 볼까", topic: "소비자와 거래", date: "2026.03.17", read: "4분", excerpt: "플랫폼 약관과 소비자 기준이 충돌할 때 확인할 지점을 봅니다.", tags: ["숙박", "예약취소", "환불"] },
  { title: "동업을 시작할 때 말로만 정하면 위험한 것들", topic: "일과 노동", date: "2026.03.15", read: "6분", excerpt: "지분, 역할, 비용, 탈퇴 조건을 동업계약서에 남겨야 하는 이유.", tags: ["동업", "계약", "사업"] },
  { title: "아파트 게시판 글, 어디까지 써도 될까", topic: "이웃과 공동생활", date: "2026.03.13", read: "5분", excerpt: "공익 제보와 명예훼손 사이에서 안전한 문장 작성법을 살펴봅니다.", tags: ["아파트", "게시판", "명예훼손"] },
  { title: "병원 진료 기록을 받아야 하는 이유", topic: "사고와 배상", date: "2026.03.11", read: "5분", excerpt: "상해, 보험, 손해배상 사건에서 진료 기록이 어떤 역할을 하는지 봅니다.", tags: ["진료기록", "보험", "상해"] },
  { title: "처음 법률상담을 받을 때 가져갈 자료", topic: "문서와 증거", date: "2026.03.09", read: "5분", excerpt: "상담 시간을 아끼는 사건 정리표와 증거 묶음 만드는 법을 소개합니다.", tags: ["상담", "증거정리", "체크리스트"] }
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
  count.textContent = `총 ${filteredPosts.length}개 글`;
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
    button.setAttribute("aria-label", `${page}페이지로 이동`);
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
