/* =========================================================
   OLD SINGLE-PAGE ADDRESS REDIRECT

   - index.html#research 등 예전 주소를 해당 페이지로 이동
========================================================= */

(function () {

  const page =
    window.location.pathname.split("/").pop();

  const hash =
    window.location.hash.replace("#", "");

  const pages =
    ["research", "people", "publications", "news", "contact"];


  if ((page === "" || page === "index.html") &&
      pages.indexOf(hash) !== -1) {

    window.location.replace(hash + ".html");

  }

})();




/* =========================================================
   PUBLICATION

   - Publication 번호 자동 생성
   - 연도별 publication 개수 자동 계산
========================================================= */


document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* =====================================================
       PUBLICATION NUMBER
    ===================================================== */

    const publications =
      document.querySelectorAll(".publication");


    publications.forEach(
      function (publication, index) {


        const number =
          publication.querySelector(".pub-number");


        if (number) {

          number.textContent =
            index + 1;

        }


      }
    );




    /* =====================================================
       PUBLICATION COUNT BY YEAR
    ===================================================== */

    const publicationYears =
      document.querySelectorAll(".publication-year");


    publicationYears.forEach(
      function (year) {


        const count =
          year.querySelectorAll(".publication").length;


        const countElement =
          year.querySelector(".publication-count");


        if (countElement) {


          countElement.textContent =
            count === 1
            ? "1 publication"
            : count + " publications";


        }


      }
    );


  }
);
