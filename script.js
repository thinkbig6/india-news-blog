const newsData = [
  ["PM Modi Launches 'Viksit Bharat Sankalp Yatra'", "Massive outreach campaign to empower rural India launched by PM Modi."],
  ["Chandrayaan-3 Moon Landing", "India makes history by successfully landing near the moon's south pole."],
  ["NEET 2025 Results Declared", "Lakhs of students receive their NEET UG results today. Toppers list is out."],
  ["India GDP Beats Forecasts", "India sees a record 7.8% GDP growth, overtaking China in economic momentum."],
  ["IPL 2025 Auctions", "Shocking bids and swaps seen in the latest IPL player auctions."]
];

let currentPage = 0;
const newsContainer = document.getElementById("news-container");
const timerSpan = document.getElementById("timer");

function loadNews(index) {
  const [title, content] = newsData[index];
  newsContainer.innerHTML = `
    <article>
      <h2>${title}</h2>
      <p>${content}</p>
    </article>
  `;
}

function startTimer(action) {
  let count = 3;
  timerSpan.textContent = count;
  const interval = setInterval(() => {
    count--;
    timerSpan.textContent = count;
    if (count === 0) {
      clearInterval(interval);
      if (action === "next" && currentPage < newsData.length - 1) currentPage++;
      if (action === "prev" && currentPage > 0) currentPage--;
      loadNews(currentPage);
      showPopupAd();
    }
  }, 1000);
}

document.getElementById("nextBtn").onclick = () => startTimer("next");
document.getElementById("prevBtn").onclick = () => startTimer("prev");

const popup = document.getElementById("popupAd");
const closeBtn = document.querySelector(".close");

function showPopupAd() {
  popup.style.display = "block";
}

closeBtn.onclick = () => popup.style.display = "none";
window.onclick = (e) => {
  if (e.target === popup) popup.style.display = "none";
};

loadNews(currentPage);
