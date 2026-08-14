/* ═══════════════ FLOATING PETALS ═══════════════ */
(function spawnPetals() {
  const container = document.getElementById('petals');
  function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    const size = 8 + Math.random() * 14;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.setProperty('--drift', (Math.random() - 0.5) * 180 + 'px');
    petal.style.setProperty('--spin', (Math.random() * 720 - 360) + 'deg');
    petal.style.animationDuration = (6 + Math.random() * 8) + 's';
    petal.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(petal);
    petal.addEventListener('animationend', () => petal.remove());
  }
  // initial burst
  for (let i = 0; i < 6; i++) setTimeout(createPetal, i * 400);
  // steady stream
  setInterval(createPetal, 2200);
})();

/* ═══════════════ SCROLL FADE-IN ═══════════════ */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

/* ═══════════════ TASK DATA ═══════════════ */
const STORAGE_KEY = "thesis-garden-progress-v1";

const tasks = [
  ["Masa Orientasi & Data","Minggu 1","2026-08-15","Sabtu, 15 Agst",'Tarik/ekspor data transaksi "Sales by Item Detail" periode Januari 2024 – Juni 2026 dari Accurate PT X.','DATA',1],
  ["Masa Orientasi & Data","Minggu 1","2026-08-16","Minggu, 16 Agst",'Bikin folder /Skripsi-San/Data/Raw/ dan masukkan semua file ekspor bulanan Accurate.','DATA',0],
  ["Masa Orientasi & Data","Minggu 1","2026-08-17","Senin, 17 Agst",'Libur nasional 🇮🇩 — jalankan script Python untuk batch-merge menjadi combined_raw_sales.csv.','PYTHON',0],
  ["Masa Orientasi & Data","Minggu 1","2026-08-18","Selasa, 18 Agst",'Filter data di Excel/Python, temukan satu SKU dengan margin aneh sekitar 98,8%, lalu catat kodenya.','ANALISIS',0],
  ["Masa Orientasi & Data","Minggu 1","2026-08-19","Rabu, 19 Agst",'Temui tim accounting PT X untuk validasi apakah margin 98,8% adalah error input atau transaksi khusus.','VALIDASI',0],
  ["Masa Orientasi & Data","Minggu 1","2026-08-20","Kamis, 20 Agst",'Bereskan data berdasarkan feedback accounting dan simpan sebagai cleaned_sales_data.csv.','DATA',0],
  ["Masa Orientasi & Data","Minggu 1","2026-08-21","Jumat, 21 Agst",'Reward day! Istirahat karena data skripsi sudah berhasil diamankan.','REWARD',0],
  ["Masa Analisis & Desain Bab 3","Minggu 2","2026-08-22","Sabtu, 22 Agst",'Tulis rumus Python Margin Kontribusi: (Harga Jual − HPP) × Kuantitas.','PYTHON',0],
  ["Masa Analisis & Desain Bab 3","Minggu 2","2026-08-23","Minggu, 23 Agst",'Urutkan produk berdasarkan Revenue dan Margin Kontribusi untuk Matriks 3×3 Flores & Whybark (1986).','ABC',0],
  ["Masa Analisis & Desain Bab 3","Minggu 2","2026-08-24","Senin, 24 Agst",'Identifikasi produk off-diagonal dan catat untuk analisis Bab 3 & 4.','ABC',0],
  ["Masa Analisis & Desain Bab 3","Minggu 2","2026-08-25","Selasa, 25 Agst",'Rancang Dimensional Modeling Kimball 9-Step: fact sales + dimensi produk, waktu, kategori.','KIMBALL',0],
  ["Masa Analisis & Desain Bab 3","Minggu 2","2026-08-26","Rabu, 26 Agst",'Bikin mockup visual dashboard Power BI dan tunjukkan letak 6 fitur utama.','POWER BI',0],
  ["Masa Analisis & Desain Bab 3","Minggu 2","2026-08-27","Kamis, 27 Agst",'Kumpulkan sinopsis dan jadikan latar belakangnya sebagai pondasi Bab 1.','BAB 1',0],
  ["Masa Analisis & Desain Bab 3","Minggu 2","2026-08-28","Jumat, 28 Agst",'Checkpoint: data bersih, matriks ABC, skema Kimball, mockup dashboard, dan draf Bab 1 harus sudah ada.','CHECKPOINT',1],
  ["September · Proposal Bab 1–3","September","2026-08-29","Minggu I",'Tulis Bab 2 — ABC ganda Flores & Whybark, Holt DES, Kimball 9-step, dan 4 jurnal sejenis.','BAB 2',0],
  ["September · Proposal Bab 1–3","September","2026-09-05","Minggu II",'Tulis Bab 3 — margin kontribusi, Holt DES, Star Schema, dan mockup dashboard.','BAB 3',0],
  ["September · Proposal Bab 1–3","September","2026-09-12","Minggu III",'Susun brief interview untuk kebutuhan sistem dan masukkan ke Bab 3.','METODOLOGI',0],
  ["September · Proposal Bab 1–3","September","2026-09-19","Minggu IV",'Satukan Bab 1–3, rapikan IEEE sequential order, bimbingan, dan finalisasi proposal.','FINALISASI',1],
  ["September · Proposal Bab 1–3","September","2026-09-28","Senin, 28 Sept · 08.00",'🚨 SUBMIT PROPOSAL LENGKAP BAB 1–3.','DEADLINE',1],
  ["Oktober · Sidang Proposal & Build Dashboard","Oktober","2026-10-05","5–16 Okt",'SIDANG PROPOSAL 🛡️ — presentasikan penelitian, Kimball Star Schema, dan mockup dashboard.','SIDANG',1],
  ["Oktober · Sidang Proposal & Build Dashboard","Oktober","2026-10-17","Pasca Sidang",'Bereskan semua revisi dari penguji sebelum masuk tahap coding utama.','REVISI',0],
  ["Oktober · Sidang Proposal & Build Dashboard","Oktober","2026-10-24","Akhir Oktober",'Mulai backend coding/DAX Power BI: fact + dimension, ABC ganda, dan forecasting Holt DES.','POWER BI',0],
  ["November · Uji Program, UAT & Sidang Akhir","November","2026-11-01","1–8 Nov",'Selesaikan 6 fitur utama Power BI: filter, tren, rekomendasi order qty, ROP, dan indikator lainnya.','POWER BI',1],
  ["November · Uji Program, UAT & Sidang Akhir","November","2026-11-09","9–20 Nov",'UJI PROGRAM 💻 — demo dashboard 100% fungsional untuk mendapatkan sertifikat.','UJI PROGRAM',1],
  ["November · Uji Program, UAT & Sidang Akhir","November","2026-11-15","Pertengahan Nov",'Bagikan kuesioner skala Likert kepada 3–5 responden internal PT X untuk UAT.','UAT',0],
  ["November · Uji Program, UAT & Sidang Akhir","November","2026-11-21","21–23 Nov",'🔥 Final sprint: tulis Bab 4 (UAT, off-diagonal, MAPE) dan Bab 5.','BAB 4–5',1],
  ["November · Uji Program, UAT & Sidang Akhir","November","2026-11-23","Senin, 23 Nov",'🚨 SUBMIT BUKU SKRIPSI FINAL BAB 1–5.','DEADLINE',1],
  ["November · Uji Program, UAT & Sidang Akhir","November","2026-11-30","Senin, 30 Nov",'🎓 SIDANG AKHIR SKRIPSI — pertahankan hasil dashboard dan resmi mengejar gelar S.Kom!','FINAL',1]
].map((x, i) => ({ id: i + 1, section: x[0], phase: x[1], date: x[2], day: x[3], title: x[4], tag: x[5], urgent: x[6] }));

/* ═══════════════ STATE ═══════════════ */
let state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
let filter = "all";
const $ = id => document.getElementById(id);

function formatDate(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
}
function isDone(id) { return state[id] === true; }
function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

/* ═══════════════ RENDER ═══════════════ */
function render() {
  const container = $("taskContainer");
  container.innerHTML = "";
  const query = $("search").value.trim().toLowerCase();
  const groups = {};

  tasks.forEach(task => {
    const done = isDone(task.id);
    const matchesFilter = filter === "all" || (filter === "done" && done) || (filter === "todo" && !done);
    const matchesSearch = !query || `${task.title} ${task.tag} ${task.section}`.toLowerCase().includes(query);
    if (!matchesFilter || !matchesSearch) return;
    (groups[task.section] ||= []).push(task);
  });

  Object.entries(groups).forEach(([section, list]) => {
    const sectionEl = document.createElement("section");
    sectionEl.className = "section fade-in";
    sectionEl.innerHTML = `<div class="section-header"><small>${list[0].phase}</small><h2>${section}</h2></div><div class="timeline"></div>`;
    const timeline = sectionEl.querySelector(".timeline");

    list.forEach(task => {
      const done = isDone(task.id);
      const article = document.createElement("article");
      article.className = `task ${done ? "done" : ""} ${task.urgent ? "urgent" : ""}`;
      article.innerHTML = `
        <label class="check" title="Mark as done">
          <input type="checkbox" ${done ? "checked" : ""}>
          <span>✓</span>
        </label>
        <div>
          <div class="task-date">${task.day} · ${formatDate(task.date)}</div>
          <div class="title">${task.title}</div>
        </div>
        <div class="tag">${task.tag}</div>`;
      article.querySelector("input").addEventListener("change", e => {
        state[task.id] = e.target.checked;
        save();
        render();
      });
      timeline.appendChild(article);
    });
    container.appendChild(sectionEl);

    // Observe new sections for fade-in
    fadeObserver.observe(sectionEl);
    // Trigger immediately if already in view
    requestAnimationFrame(() => {
      const rect = sectionEl.getBoundingClientRect();
      if (rect.top < window.innerHeight) sectionEl.classList.add('visible');
    });
  });

  $("empty").style.display = container.children.length ? "none" : "block";
  updateStats();
}

function updateStats() {
  const total = tasks.length;
  const done = tasks.filter(t => isDone(t.id)).length;
  $("total").textContent = total;
  $("completed").textContent = `${done}/${total}`;
  $("progressBar").style.width = (total ? Math.round(done / total * 100) : 0) + "%";

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const next = tasks
    .filter(t => !isDone(t.id))
    .map(t => ({ ...t, dt: new Date(t.date + "T00:00:00") }))
    .filter(t => t.dt >= today)
    .sort((a, b) => a.dt - b.dt)[0];

  if (!next) { $("deadline").textContent = "DONE"; $("days").textContent = "🌷"; return; }
  $("deadline").textContent = next.dt.toLocaleDateString("id-ID", { day: "2-digit", month: "short" });
  $("days").textContent = Math.ceil((next.dt - today) / 86400000) + " days";
}

/* ═══════════════ EVENTS ═══════════════ */
$("search").addEventListener("input", render);

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    render();
  });
});

$("reset").addEventListener("click", () => {
  if (confirm("Reset semua progress checklist?")) {
    state = {};
    save();
    render();
  }
});

render();
