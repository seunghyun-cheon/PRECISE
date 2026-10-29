# PRECISE Lab 홈페이지 관리 규칙

## 기본 작업 방식
- 사이트는 단일 index.html + images/ 폴더. GitHub Pages가 main 브랜치를 배포한다.
- 요청을 받으면 수정 → 브라우저(Playwright)로 데스크톱 1400px, 모바일 390px 화면 확인 → main에 바로 커밋·푸시한다. 결과가 달라지는 정보(저자 순서, 직위, 어느 사진을 바꿀지 등)가 모호할 때만 질문한다.
- 기존 마크업·클래스·들여쓰기 양식을 그대로 따른다. 새 양식을 만들지 않는다.
- 커밋 메시지는 영어 한 줄로 무엇을 바꿨는지 쓴다.
- 작업이 끝나면 무엇을 바꿨는지 한국어로 2~3줄 보고한다.

## Publications
- 연도별 <details class="publication-year"> 블록 안의 <div class="publication"> 항목. 최신 논문이 맨 위.
- 항목 구조: .pub-number(빈 div, 자동 번호) + .pub-title(저자. 제목.) + .pub-info(<em>저널</em>. 연도.) — 권·호·페이지·DOI 표기는 같은 연도의 기존 항목과 동일하게.
- 본인 이름은 <strong>Seunghyun Cheon</strong>, 공동 제1저자는 *.
- DOI, PMID, 제목만 주어져도 PubMed/Crossref에서 서지정보를 확인해 채운다. 확인되지 않는 정보는 지어내지 말고 묻는다.
- 해당 연도 블록이 없으면 기존 블록을 복제해 만들고, 최신 연도 블록만 open.

## People
- 기존 멤버 카드 마크업을 복제해 추가·수정한다. 졸업·퇴임은 기존에 Alumni 구역이 있으면 그쪽으로 옮기고, 없으면 어떻게 할지 묻는다.

## 이미지
- 사진은 긴 변 1200px 이하 JPG(품질 85 내외, 가능하면 300KB 이하)로 변환해 images/ 아래에 영문 소문자-하이픈 파일명으로 저장. 새 멤버 사진은 images/people/.
- "이 이미지로 바꿔줘"면 새 파일로 교체하고, 이전 파일은 다른 곳에서 참조하지 않는지 확인한 뒤 삭제한다.
- 모든 img에 alt를 단다.

## 연구 모식도·아이콘
- images/research-framework.svg (1400×620, Research 섹션 소개글 아래 <figure class="research-framework">), 분야별 아이콘 images/research-icon-{pe,pv,pgx,pk,practice}.svg.
- 스타일: 색을 채운 플랫 일러스트. 텍스트 박스 위주나 얇은 선 아이콘 위주는 피한다. 모바일용 별도 그림은 만들지 않고 같은 그림을 축소 표시한다.
- 색상: --main #174A45, --accent #B5844A, --gray #6F7774, --line #E3E7E5. 보조 틸 #2E6B64 #5E938B #A9C8C2 #DCEAE7 #F2F7F6, 보조 브론즈 #D9B98C #F3E7D6 #8C6334.

## News
- 논문 게재, 수상, 과제 선정, 멤버 합류 등은 요청 시 News 섹션에 기존 형식으로 추가한다.
