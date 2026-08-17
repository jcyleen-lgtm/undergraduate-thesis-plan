/* ═══ PETALS ═══ */
(function(){
  const c=document.getElementById('petals');
  function p(){const e=document.createElement('div');e.className='petal';const s=8+Math.random()*14;e.style.width=s+'px';e.style.height=s+'px';e.style.left=Math.random()*100+'vw';e.style.setProperty('--drift',(Math.random()-.5)*180+'px');e.style.setProperty('--spin',(Math.random()*720-360)+'deg');e.style.animationDuration=(6+Math.random()*8)+'s';e.style.animationDelay=Math.random()*2+'s';c.appendChild(e);e.addEventListener('animationend',()=>e.remove())}
  for(let i=0;i<5;i++)setTimeout(p,i*400);setInterval(p,2500);
})();

/* ═══ GLITTER ═══ */
(function(){
  const c=document.getElementById('glitter');
  for(let i=0;i<25;i++){const s=document.createElement('div');s.className='sparkle';s.style.left=Math.random()*100+'vw';s.style.top=Math.random()*100+'vh';s.style.width=(2+Math.random()*3)+'px';s.style.height=s.style.width;s.style.animationDuration=(2+Math.random()*4)+'s';s.style.animationDelay=Math.random()*5+'s';const colors=['#d4a843','#e8ada7','#d4918a','#a3b48c','#f4ddd9'];s.style.background=colors[Math.floor(Math.random()*colors.length)];c.appendChild(s)}
})();

/* ═══ FLOWER BURST ═══ */
function flowerBurst(x,y){
  const layer=document.getElementById('flower-burst-layer');
  const colors=['#d4918a','#e8ada7','#d4a843','#a3b48c','#f4ddd9','#d5dfc8'];
  for(let i=0;i<12;i++){const p=document.createElement('div');p.className='burst-petal';p.style.left=x+'px';p.style.top=y+'px';const angle=(i/12)*Math.PI*2;const dist=40+Math.random()*60;p.style.setProperty('--bx',Math.cos(angle)*dist+'px');p.style.setProperty('--by',Math.sin(angle)*dist+'px');p.style.setProperty('--br',(Math.random()*360)+'deg');p.style.background=colors[Math.floor(Math.random()*colors.length)];const sz=6+Math.random()*8;p.style.width=sz+'px';p.style.height=sz+'px';layer.appendChild(p);p.addEventListener('animationend',()=>p.remove())}
}

/* ═══ GREETING & QUOTES ═══ */
const quotes=[
  '"The secret of getting ahead is getting started." — Mark Twain',
  '"Small daily improvements over time lead to stunning results." — Robin Sharma',
  '"A garden requires patient labor. So does a thesis."',
  '"You don\'t have to be great to start, but you have to start to be great." — Zig Ziglar',
  '"It always seems impossible until it\'s done." — Nelson Mandela',
  '"Plant your seeds with patience. The bloom will come."',
  '"One page at a time, one day at a time. You\'ll get there."',
  '"Discipline is choosing between what you want now and what you want most."',
  '"Every expert was once a beginner. Keep writing."',
  '"The best time to plant a tree was 20 years ago. The second best time is now."',
  '"Progress, not perfection."',
  '"A thesis is just a very long love letter to your curiosity."',
  '"You are doing better than you think. Keep going."',
  '"The flower that blooms in adversity is the rarest and most beautiful of all."',
  '"Don\'t watch the clock; do what it does — keep going." — Sam Levenson',
  '"Jangan track waktu belajar. Track OUTPUT."',
  '"45 menit + 1 output = PROGRESS."',
  '"Konsisten pelan lebih baik dari sprint brutal 3 hari lalu tumbang."'
];
(function setGreeting(){
  const h=new Date().getHours();
  let g='Good evening,';
  if(h<12)g='Good morning,';else if(h<17)g='Good afternoon,';
  document.getElementById('greeting').textContent=g;
  document.getElementById('quote').textContent=quotes[Math.floor(Math.random()*quotes.length)];
})();

/* ═══ SCROLL FADE ═══ */
const fadeObs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.15});
document.querySelectorAll('.fade-in').forEach(el=>fadeObs.observe(el));

/* ═══ TASK DATA ═══ */
const STORAGE_KEY="thesis-garden-progress-v3";
const NOTES_KEY="thesis-garden-notes-v2";

const tasks=[
  // 17 AGUSTUS — FOUNDATION
  ["17 Agst — Foundation Day","Week 1","2026-08-17","Minggu, 17 Agst","Freeze research specification","SPEC",1],
  ["17 Agst — Foundation Day","Week 1","2026-08-17","Minggu, 17 Agst","Tentukan periode data final","SPEC",1],
  ["17 Agst — Foundation Day","Week 1","2026-08-17","Minggu, 17 Agst","Tentukan metode forecasting final","SPEC",1],
  ["17 Agst — Foundation Day","Week 1","2026-08-17","Minggu, 17 Agst","Tentukan metode ABC final","SPEC",1],
  ["17 Agst — Foundation Day","Week 1","2026-08-17","Minggu, 17 Agst","Tentukan variabel penelitian","SPEC",0],
  ["17 Agst — Foundation Day","Week 1","2026-08-17","Minggu, 17 Agst","Tentukan metode evaluasi","SPEC",0],
  ["17 Agst — Foundation Day","Week 1","2026-08-17","Minggu, 17 Agst","Buat outline BAB 1-3","OUTLINE",1],
  ["17 Agst — Foundation Day","Week 1","2026-08-17","Minggu, 17 Agst","Mapping isi sinopsis ke BAB 1-3","OUTLINE",0],

  // 18 AGUSTUS — BAB 1
  ["18 Agst — BAB 1","Week 1","2026-08-18","Senin, 18 Agst","Draft Latar Belakang","BAB 1",0],
  ["18 Agst — BAB 1","Week 1","2026-08-18","Senin, 18 Agst","Draft Identifikasi Masalah","BAB 1",0],
  ["18 Agst — BAB 1","Week 1","2026-08-18","Senin, 18 Agst","Draft Rumusan Masalah","BAB 1",0],
  ["18 Agst — BAB 1","Week 1","2026-08-18","Senin, 18 Agst","Cek kesesuaian dengan research specification","BAB 1",0],

  // 19 AGUSTUS — BAB 1
  ["19 Agst — BAB 1","Week 1","2026-08-19","Selasa, 19 Agst","Draft Batasan Masalah","BAB 1",0],
  ["19 Agst — BAB 1","Week 1","2026-08-19","Selasa, 19 Agst","Draft Tujuan Penelitian","BAB 1",0],
  ["19 Agst — BAB 1","Week 1","2026-08-19","Selasa, 19 Agst","Draft Manfaat Penelitian","BAB 1",0],
  ["19 Agst — BAB 1","Week 1","2026-08-19","Selasa, 19 Agst","Rapikan BAB 1","BAB 1",0],
  ["19 Agst — BAB 1","Week 1","2026-08-19","Selasa, 19 Agst","Tandai bagian [VERIFY]","BAB 1",0],

  // 20 AGUSTUS — BAB 2 + DATA
  ["20 Agst — BAB 2 + Data","Week 1","2026-08-20","Rabu, 20 Agst","Draft teori Manajemen Persediaan","BAB 2",0],
  ["20 Agst — BAB 2 + Data","Week 1","2026-08-20","Rabu, 20 Agst","Draft Pengendalian Persediaan","BAB 2",0],
  ["20 Agst — BAB 2 + Data","Week 1","2026-08-20","Rabu, 20 Agst","Draft ABC Analysis","BAB 2",0],
  ["20 Agst — BAB 2 + Data","Week 1","2026-08-20","Rabu, 20 Agst","Export data Accurate","DATA",1],
  ["20 Agst — BAB 2 + Data","Week 1","2026-08-20","Rabu, 20 Agst","Cek struktur file","DATA",0],
  ["20 Agst — BAB 2 + Data","Week 1","2026-08-20","Rabu, 20 Agst","Cek periode data","DATA",0],
  ["20 Agst — BAB 2 + Data","Week 1","2026-08-20","Rabu, 20 Agst","Cek jumlah SKU","DATA",0],

  // 21 AGUSTUS — BAB 2 + DATA
  ["21 Agst — BAB 2 + Data","Week 1","2026-08-21","Kamis, 21 Agst","Draft ABC Multi-Criteria","BAB 2",0],
  ["21 Agst — BAB 2 + Data","Week 1","2026-08-21","Kamis, 21 Agst","Draft Sales Value","BAB 2",0],
  ["21 Agst — BAB 2 + Data","Week 1","2026-08-21","Kamis, 21 Agst","Draft Margin Contribution","BAB 2",0],
  ["21 Agst — BAB 2 + Data","Week 1","2026-08-21","Kamis, 21 Agst","Cek missing value","DATA",0],
  ["21 Agst — BAB 2 + Data","Week 1","2026-08-21","Kamis, 21 Agst","Cek duplicate","DATA",0],
  ["21 Agst — BAB 2 + Data","Week 1","2026-08-21","Kamis, 21 Agst","Cek inkonsistensi data","DATA",0],
  ["21 Agst — BAB 2 + Data","Week 1","2026-08-21","Kamis, 21 Agst","Dokumentasikan masalah data","DATA",0],

  // 22 AGUSTUS — BAB 2
  ["22 Agst — BAB 2","Week 1","2026-08-22","Jumat, 22 Agst","Draft Forecasting","BAB 2",0],
  ["22 Agst — BAB 2","Week 1","2026-08-22","Jumat, 22 Agst","Draft Holt's Double Exponential Smoothing","BAB 2",0],
  ["22 Agst — BAB 2","Week 1","2026-08-22","Jumat, 22 Agst","Draft MAPE","BAB 2",0],
  ["22 Agst — BAB 2","Week 1","2026-08-22","Jumat, 22 Agst","Cek sumber teori","BAB 2",0],

  // 23 AGUSTUS — BAB 2
  ["23 Agst — BAB 2","Week 1","2026-08-23","Sabtu, 23 Agst","Draft Business Intelligence","BAB 2",0],
  ["23 Agst — BAB 2","Week 1","2026-08-23","Sabtu, 23 Agst","Draft ETL","BAB 2",0],
  ["23 Agst — BAB 2","Week 1","2026-08-23","Sabtu, 23 Agst","Draft Power BI","BAB 2",0],
  ["23 Agst — BAB 2","Week 1","2026-08-23","Sabtu, 23 Agst","Draft Dashboard","BAB 2",0],
  ["23 Agst — BAB 2","Week 1","2026-08-23","Sabtu, 23 Agst","Buat daftar penelitian terdahulu","BAB 2",0],

  // 24 AGUSTUS — BAB 2 SELESAI
  ["24 Agst — BAB 2 Selesai","Week 2","2026-08-24","Minggu, 24 Agst","Selesaikan penelitian terdahulu","BAB 2",0],
  ["24 Agst — BAB 2 Selesai","Week 2","2026-08-24","Minggu, 24 Agst","Buat kerangka pemikiran","BAB 2",0],
  ["24 Agst — BAB 2 Selesai","Week 2","2026-08-24","Minggu, 24 Agst","Lengkapi citation","BAB 2",0],
  ["24 Agst — BAB 2 Selesai","Week 2","2026-08-24","Minggu, 24 Agst","Rapikan BAB 2","BAB 2",0],
  ["24 Agst — BAB 2 Selesai","Week 2","2026-08-24","Minggu, 24 Agst","Cek teori <> metode penelitian","BAB 2",0],

  // 25 AGUSTUS — BAB 3
  ["25 Agst — BAB 3","Week 2","2026-08-25","Senin, 25 Agst","Draft Objek Penelitian","BAB 3",0],
  ["25 Agst — BAB 3","Week 2","2026-08-25","Senin, 25 Agst","Draft Metode Penelitian","BAB 3",0],
  ["25 Agst — BAB 3","Week 2","2026-08-25","Senin, 25 Agst","Draft Pengumpulan Data","BAB 3",0],
  ["25 Agst — BAB 3","Week 2","2026-08-25","Senin, 25 Agst","Draft Sumber Data","BAB 3",0],
  ["25 Agst — BAB 3","Week 2","2026-08-25","Senin, 25 Agst","Tentukan alur penelitian","BAB 3",0],

  // 26 AGUSTUS — BAB 3 + ETL
  ["26 Agst — BAB 3 + ETL","Week 2","2026-08-26","Selasa, 26 Agst","Draft proses ETL","BAB 3",0],
  ["26 Agst — BAB 3 + ETL","Week 2","2026-08-26","Selasa, 26 Agst","Dokumentasikan Extract","ETL",0],
  ["26 Agst — BAB 3 + ETL","Week 2","2026-08-26","Selasa, 26 Agst","Dokumentasikan Transform","ETL",0],
  ["26 Agst — BAB 3 + ETL","Week 2","2026-08-26","Selasa, 26 Agst","Dokumentasikan Load","ETL",0],
  ["26 Agst — BAB 3 + ETL","Week 2","2026-08-26","Selasa, 26 Agst","Cleaning data awal","ETL",0],
  ["26 Agst — BAB 3 + ETL","Week 2","2026-08-26","Selasa, 26 Agst","Tentukan grain data","ETL",0],
  ["26 Agst — BAB 3 + ETL","Week 2","2026-08-26","Selasa, 26 Agst","Dokumentasikan hasil cleaning","ETL",0],

  // 27 AGUSTUS — BAB 3 + ABC
  ["27 Agst — BAB 3 + ABC","Week 2","2026-08-27","Rabu, 27 Agst","Draft metode ABC dua kriteria","BAB 3",0],
  ["27 Agst — BAB 3 + ABC","Week 2","2026-08-27","Rabu, 27 Agst","Tentukan perhitungan Sales Value","ABC",0],
  ["27 Agst — BAB 3 + ABC","Week 2","2026-08-27","Rabu, 27 Agst","Tentukan perhitungan Margin Contribution","ABC",0],
  ["27 Agst — BAB 3 + ABC","Week 2","2026-08-27","Rabu, 27 Agst","Tentukan mekanisme klasifikasi","ABC",0],
  ["27 Agst — BAB 3 + ABC","Week 2","2026-08-27","Rabu, 27 Agst","Mulai implementasi/perhitungan ABC","ABC",0],
  ["27 Agst — BAB 3 + ABC","Week 2","2026-08-27","Rabu, 27 Agst","Simpan hasil sementara","ABC",0],

  // 28 AGUSTUS — BAB 3 + FORECAST
  ["28 Agst — BAB 3 + Forecast","Week 2","2026-08-28","Kamis, 28 Agst","Draft metode forecasting","BAB 3",0],
  ["28 Agst — BAB 3 + Forecast","Week 2","2026-08-28","Kamis, 28 Agst","Draft Holt's Double ES","BAB 3",0],
  ["28 Agst — BAB 3 + Forecast","Week 2","2026-08-28","Kamis, 28 Agst","Draft MAPE","BAB 3",0],
  ["28 Agst — BAB 3 + Forecast","Week 2","2026-08-28","Kamis, 28 Agst","Tentukan periode forecast","FORECAST",0],
  ["28 Agst — BAB 3 + Forecast","Week 2","2026-08-28","Kamis, 28 Agst","Mulai forecasting data","FORECAST",0],
  ["28 Agst — BAB 3 + Forecast","Week 2","2026-08-28","Kamis, 28 Agst","Dokumentasikan proses","FORECAST",0],

  // 29 AGUSTUS — BAB 3
  ["29 Agst — BAB 3","Week 2","2026-08-29","Jumat, 29 Agst","Draft pengembangan Dashboard","BAB 3",0],
  ["29 Agst — BAB 3","Week 2","2026-08-29","Jumat, 29 Agst","Draft metode Prototyping","BAB 3",0],
  ["29 Agst — BAB 3","Week 2","2026-08-29","Jumat, 29 Agst","Draft desain dashboard","BAB 3",0],
  ["29 Agst — BAB 3","Week 2","2026-08-29","Jumat, 29 Agst","Draft Black Box Testing","BAB 3",0],
  ["29 Agst — BAB 3","Week 2","2026-08-29","Jumat, 29 Agst","Draft UAT","BAB 3",0],

  // 30 AGUSTUS — INTEGRATION DAY
  ["30 Agst — Integration Day","Week 2","2026-08-30","Sabtu, 30 Agst","Selesaikan BAB 3","INTEGRASI",1],
  ["30 Agst — Integration Day","Week 2","2026-08-30","Sabtu, 30 Agst","Satukan BAB 1-3","INTEGRASI",1],
  ["30 Agst — Integration Day","Week 2","2026-08-30","Sabtu, 30 Agst","Cek Rumusan Masalah <> Tujuan","QC",0],
  ["30 Agst — Integration Day","Week 2","2026-08-30","Sabtu, 30 Agst","Cek Tujuan <> Metode","QC",0],
  ["30 Agst — Integration Day","Week 2","2026-08-30","Sabtu, 30 Agst","Cek Metode <> Output penelitian","QC",0],
  ["30 Agst — Integration Day","Week 2","2026-08-30","Sabtu, 30 Agst","Cek istilah yang tidak konsisten","QC",0],
  ["30 Agst — Integration Day","Week 2","2026-08-30","Sabtu, 30 Agst","Cek citation","QC",0],
  ["30 Agst — Integration Day","Week 2","2026-08-30","Sabtu, 30 Agst","Tandai semua bagian [VERIFY]","QC",0],
  ["30 Agst — Integration Day","Week 2","2026-08-30","Sabtu, 30 Agst","Backup draft","QC",0],

  // 31 AGUSTUS — FREEZE DAY
  ["31 Agst — FREEZE DAY","Week 2","2026-08-31","Minggu, 31 Agst","Baca BAB 1","FREEZE",1],
  ["31 Agst — FREEZE DAY","Week 2","2026-08-31","Minggu, 31 Agst","Baca BAB 2","FREEZE",1],
  ["31 Agst — FREEZE DAY","Week 2","2026-08-31","Minggu, 31 Agst","Baca BAB 3","FREEZE",1],
  ["31 Agst — FREEZE DAY","Week 2","2026-08-31","Minggu, 31 Agst","Perbaiki major error","FREEZE",1],
  ["31 Agst — FREEZE DAY","Week 2","2026-08-31","Minggu, 31 Agst","Lengkapi bagian yang kosong","FREEZE",0],
  ["31 Agst — FREEZE DAY","Week 2","2026-08-31","Minggu, 31 Agst","Rapikan format","FREEZE",0],
  ["31 Agst — FREEZE DAY","Week 2","2026-08-31","Minggu, 31 Agst","Rapikan daftar pustaka","FREEZE",0],
  ["31 Agst — FREEZE DAY","Week 2","2026-08-31","Minggu, 31 Agst","Pastikan tidak ada [TODO] yang kritis","FREEZE",0],
  ["31 Agst — FREEZE DAY","Week 2","2026-08-31","Minggu, 31 Agst","Simpan Proposal_BAB1-3_v1","FREEZE",1],
  ["31 Agst — FREEZE DAY","Week 2","2026-08-31","Minggu, 31 Agst","STOP — BAB 1-3 resmi masuk fase revisi","FREEZE",1],

  // SEPTEMBER — BIMBINGAN & REVISI
  ["September — Bimbingan & Revisi","September","2026-09-05","Minggu I","Bimbingan pertama dengan dosen pembimbing","BIMBINGAN",1],
  ["September — Bimbingan & Revisi","September","2026-09-12","Minggu II","Revisi BAB 1-3 berdasarkan feedback dosen","REVISI",0],
  ["September — Bimbingan & Revisi","September","2026-09-19","Minggu III","Bimbingan kedua, finalisasi perbaikan","BIMBINGAN",0],
  ["September — Bimbingan & Revisi","September","2026-09-25","Minggu IV","Rapikan IEEE format, ekspor PDF, jilid proposal","FINALISASI",1],
  ["September — Bimbingan & Revisi","September","2026-09-28","28 Sept","SUBMIT PROPOSAL LENGKAP BAB 1-3","DEADLINE",1],

  // OKTOBER
  ["Oktober — Sidang & Backend","Oktober","2026-10-04","Awal Okt","Rancang slide presentasi proposal, latihan","SIDANG",1],
  ["Oktober — Sidang & Backend","Oktober","2026-10-05","5-16 Okt","SIDANG PROPOSAL","SIDANG",1],
  ["Oktober — Sidang & Backend","Oktober","2026-10-17","Pasca Sidang","Revisi dari dosen penguji, tanda tangan persetujuan","REVISI",0],
  ["Oktober — Sidang & Backend","Oktober","2026-10-25","Akhir Okt","Script Python Holt DES, hubungkan output ke Power BI","POWER BI",0],

  // NOVEMBER
  ["November — Dashboard & Sidang Akhir","November","2026-11-01","1-8 Nov","Build dashboard Power BI: Star Schema, DAX, 6 fitur utama","POWER BI",1],
  ["November — Dashboard & Sidang Akhir","November","2026-11-07","7-8 Nov","Self-test semua visualisasi dan filter","POWER BI",1],
  ["November — Dashboard & Sidang Akhir","November","2026-11-09","9-20 Nov","UJI PROGRAM KAMPUS — demo dashboard","UJI PROGRAM",1],
  ["November — Dashboard & Sidang Akhir","November","2026-11-14","14-20 Nov","Demo ke 3-5 responden PT X, kuesioner Likert UAT","UAT",0],
  ["November — Dashboard & Sidang Akhir","November","2026-11-21","21-22 Nov","Tulis BAB 4 (Hasil UAT, MAPE, off-diagonal) dan BAB 5","BAB 4-5",1],
  ["November — Dashboard & Sidang Akhir","November","2026-11-23","23 Nov","SUBMIT BUKU SKRIPSI FINAL BAB 1-5","DEADLINE",1],
  ["November — Dashboard & Sidang Akhir","November","2026-11-24","24-29 Nov","Siapkan slide akhir, simulasi presentasi","SIDANG",1],
  ["November — Dashboard & Sidang Akhir","November","2026-11-30","30 Nov","SIDANG AKHIR SKRIPSI — S.Kom!","FINAL",1]
].map((x,i)=>({id:i+1,section:x[0],phase:x[1],date:x[2],day:x[3],title:x[4],tag:x[5],urgent:x[6]}));

/* ═══ STATE ═══ */
let state=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");
let notes=JSON.parse(localStorage.getItem(NOTES_KEY)||"{}");
let filter="all";
const $=id=>document.getElementById(id);

function formatDate(d){return new Date(d+"T00:00:00").toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})}
function isDone(id){return state[id]===true}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function saveNotes(){localStorage.setItem(NOTES_KEY,JSON.stringify(notes))}

/* ═══ RENDER ═══ */
function render(){
  const container=$("taskContainer");
  container.innerHTML="";
  const query=$("search").value.trim().toLowerCase();
  const groups={};

  tasks.forEach(task=>{
    const done=isDone(task.id);
    const mf=filter==="all"||(filter==="done"&&done)||(filter==="todo"&&!done);
    const ms=!query||`${task.title} ${task.tag} ${task.section}`.toLowerCase().includes(query);
    if(!mf||!ms)return;
    (groups[task.section]||=[]).push(task);
  });

  Object.entries(groups).forEach(([section,list])=>{
    const sec=document.createElement("section");
    sec.className="section fade-in";
    sec.innerHTML=`<div class="section-header"><small>${list[0].phase}</small><h2>${section}</h2></div><div class="timeline"></div>`;
    const tl=sec.querySelector(".timeline");

    list.forEach(task=>{
      const done=isDone(task.id);
      const noteText=notes[task.id]||"";
      const art=document.createElement("article");
      art.className=`task ${done?"done":""} ${task.urgent?"urgent":""}`;
      art.innerHTML=`
        <label class="check" title="Mark as done">
          <input type="checkbox" ${done?"checked":""}>
          <span>&#10003;</span>
        </label>
        <div>
          <div class="task-date">${task.day} &middot; ${formatDate(task.date)}</div>
          <div class="title">${task.title}</div>
          <button class="note-toggle">${noteText?"[ notes ]":"+ add note"}</button>
        </div>
        <div class="tag">${task.tag}</div>
        <div class="note-area${noteText?" open":""}">
          <textarea placeholder="Write your notes here...">${noteText}</textarea>
        </div>`;

      const cb=art.querySelector("input");
      cb.addEventListener("change",e=>{
        state[task.id]=e.target.checked;save();
        if(e.target.checked){
          art.classList.add("done","just-done");
          art.querySelector(".title").style.textDecoration="line-through";
          const rect=cb.getBoundingClientRect();
          flowerBurst(rect.left+rect.width/2,rect.top+rect.height/2);
          setTimeout(()=>art.classList.remove("just-done"),600);
        }else{
          art.classList.remove("done");
          art.querySelector(".title").style.textDecoration="none";
        }
        updateStats();
      });

      const btn=art.querySelector(".note-toggle");
      const na=art.querySelector(".note-area");
      btn.addEventListener("click",()=>{na.classList.toggle("open");if(na.classList.contains("open"))na.querySelector("textarea").focus()});

      const ta=art.querySelector("textarea");
      ta.addEventListener("input",()=>{notes[task.id]=ta.value;saveNotes();btn.textContent=ta.value?"[ notes ]":"+ add note"});

      tl.appendChild(art);
    });
    container.appendChild(sec);
    fadeObs.observe(sec);
    requestAnimationFrame(()=>{if(sec.getBoundingClientRect().top<window.innerHeight)sec.classList.add('visible')});
  });

  $("empty").style.display=container.children.length?"none":"block";
  updateStats();
}

function updateStats(){
  const total=tasks.length;
  const done=tasks.filter(t=>isDone(t.id)).length;
  $("total").textContent=total;
  $("completed").textContent=`${done}/${total}`;
  $("progressBar").style.width=(total?Math.round(done/total*100):0)+"%";
  const today=new Date();today.setHours(0,0,0,0);
  const next=tasks.filter(t=>!isDone(t.id)).map(t=>({...t,dt:new Date(t.date+"T00:00:00")})).filter(t=>t.dt>=today).sort((a,b)=>a.dt-b.dt)[0];
  if(!next){$("deadline").textContent="DONE";$("days").textContent="~";return}
  $("deadline").textContent=next.dt.toLocaleDateString("id-ID",{day:"2-digit",month:"short"});
  $("days").textContent=Math.ceil((next.dt-today)/86400000)+" days";
}

/* ═══ EVENTS ═══ */
$("search").addEventListener("input",render);
document.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");filter=btn.dataset.filter;render();
  });
});
$("reset").addEventListener("click",()=>{if(confirm("Reset semua progress checklist?")){state={};save();render()}});

render();
