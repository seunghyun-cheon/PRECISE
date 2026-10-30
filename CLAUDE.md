# PRECISE Lab 홈페이지 관리 규칙

## 기본 작업 방식
- 사이트는 다중 페이지 구조: index.html(히어로 + About + Research Areas 요약 + Latest News), research.html, people.html, publications.html, news.html, contact.html + 공용 style.css, script.js + images/ 폴더. GitHub Pages가 main 브랜치를 배포한다.
- 헤더(로고 + 메뉴)와 푸터는 6개 HTML 파일에 같은 마크업이 각각 들어 있다. 메뉴·로고·푸터를 바꿀 때는 6개 파일을 모두 수정한다. 현재 페이지 메뉴에는 class="active" aria-current="page"를 붙인다.
- 스타일은 style.css, 스크립트(구 주소 index.html#research 등의 리다이렉트, 논문 번호·연도별 개수 자동 생성)는 script.js에서만 수정한다.
- 단일 페이지 시절 백업: 브랜치 backup/single-page-2026-10-30 (태그 backup-single-page-2026-10-30). "되돌려줘"라고 하면 이 시점의 index.html로 복원한다(git checkout backup/single-page-2026-10-30 -- index.html 후 research/people/publications/news/contact.html, style.css, script.js 삭제).
- 요청을 받으면 수정 → 브라우저(Playwright)로 바뀐 페이지를 데스크톱 1400px, 모바일 390px 화면 확인 → main에 바로 커밋·푸시한다. 결과가 달라지는 정보(저자 순서, 직위, 어느 사진을 바꿀지 등)가 모호할 때만 질문한다.
- 기존 마크업·클래스·들여쓰기 양식을 그대로 따른다. 새 양식을 만들지 않는다.
- 커밋 메시지는 영어 한 줄로 무엇을 바꿨는지 쓴다.
- 작업이 끝나면 무엇을 바꿨는지 한국어로 2~3줄 보고한다.

## Publications
- publications.html. 연도별 <details class="publication-year"> 블록 안의 <div class="publication"> 항목. 최신 논문이 맨 위.
- 항목 구조: .pub-number(빈 div, 자동 번호) + .pub-title(저자. 제목.) + .pub-info(<em>저널</em>. 연도.) — 권·호·페이지·DOI 표기는 같은 연도의 기존 항목과 동일하게.
- 본인 이름은 <strong>Seunghyun Cheon</strong>, 공동 제1저자는 *.
- DOI, PMID, 제목만 주어져도 PubMed/Crossref에서 서지정보를 확인해 채운다. 확인되지 않는 정보는 지어내지 말고 묻는다.
- 해당 연도 블록이 없으면 기존 블록을 복제해 만들고, 최신 연도 블록만 open.

## People
- people.html. 기존 멤버 카드 마크업을 복제해 추가·수정한다. 졸업·퇴임은 기존에 Alumni 구역이 있으면 그쪽으로 옮기고, 없으면 어떻게 할지 묻는다.

## 이미지
- 사진은 긴 변 1200px 이하 JPG(품질 85 내외, 가능하면 300KB 이하)로 변환해 images/ 아래에 영문 소문자-하이픈 파일명으로 저장. 새 멤버 사진은 images/people/.
- "이 이미지로 바꿔줘"면 새 파일로 교체하고, 이전 파일은 다른 곳에서 참조하지 않는지 확인한 뒤 삭제한다.
- 모든 img에 alt를 단다.

## 연구 모식도·일러스트
- images/research-framework.svg (1400×620, research.html 소개글 아래와 index.html Research Areas 요약 블록의 <figure class="research-framework">).
- 홈 상단 사진 images/home-hero.jpg (원본 1983×793 그대로 사용 — 히어로 전체 폭에 깔리므로 1200px 규칙의 예외). index.html의 .hero-wrap 안 <figure class="hero-image">. 데스크톱(1101px 이상)은 사진이 히어로 아래쪽 전체 폭에 깔리고, 흰색 그라데이션으로 왼쪽(글 영역)은 흐린 워터마크·오른쪽은 선명하게 보인다. 1100px 이하는 사진이 글 위 띠로 올라간다. "PRECISE stands for"는 글 아래 가로 배치.
- 분야별 그림 images/research-{pe,pv,pgx,pk,practice}.jpg (1200×800, research.html 각 .research-item의 <figure class="research-image">). 01~05는 세로 목록이며 짝수 항목은 그림이 왼쪽.
- 분야별 그림 스타일: 귀여운 3D 클레이 미니어처 일러스트(밝은 배경 위에 컴퓨터 화면의 분석 그래프 + 약 + 환자 안전 요소를 함께 배치). 사진 장면이나 추상 이미지는 쓰지 않는다. 사용자가 AI로 생성해 제공하며, 새로 필요하면 같은 스타일의 프롬프트를 작성해 준다.
- 모식도(research-framework.svg) 스타일: 색을 채운 플랫 일러스트. 텍스트 박스 위주나 얇은 선 아이콘 위주는 피한다. 모바일용 별도 그림은 만들지 않고 같은 그림을 축소 표시한다.
- 색상: --main #174A45, --accent #B5844A, --gray #6F7774, --line #E3E7E5. 보조 틸 #2E6B64 #5E938B #A9C8C2 #DCEAE7 #F2F7F6, 보조 브론즈 #D9B98C #F3E7D6 #8C6334.

## News
- news.html. 논문 게재, 수상, 과제 선정, 멤버 합류 등은 요청 시 news.html의 news-list에 기존 형식으로 추가한다.
- index.html의 Latest News 블록에도 같은 항목이 복사되어 있으므로 함께 수정한다.
