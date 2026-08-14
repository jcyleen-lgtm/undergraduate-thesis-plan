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

/* ═══ FLOWER BURST ON DONE ═══ */
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
  '"Don\'t watch the clock; do what it does — keep going." — Sam Levenson'
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

/* ═══ TASK DATA (updated from master checklist) ═══ */
const STORAGE_KEY="thesis-garden-progress-v2";
const NOTES_KEY="thesis-garden-notes-v1";

const tasks=[
  // FASE 1 MINGGU 1
  ["Fase 1: Data Preparation","Minggu 1","2026-08-14","Kamis, 14 Agst",'Ekspor laporan transaksi "Sales by Item Detail" dari Accurate PT X periode Jan 2024 - Jun 2026.','DATA',1],
  ["Fase 1: Data Preparation","Minggu 1","2026-08-15","Jumat, 15 Agst",'Setup folder /Skripsi_San/Data/Raw/ dan kelompokkan file Excel bulanan ke dalamnya.','DATA',0],
  ["Fase 1: Data Preparation","Minggu 1","2026-08-16","Sabtu, 16 Agst",'Bikin draf Skripsi_San_Bab1.docx. Kopas Latar Belakang dari sinopsis.','BAB 1',0],
  ["Fase 1: Data Preparation","Minggu 1","2026-08-17","Minggu, 17 Agst",'Tulis script Python (pandas) untuk batch-merge seluruh file transaksi bulanan.','PYTHON',0],
  ["Fase 1: Data Preparation","Minggu 1","2026-08-18","Senin, 18 Agst",'Jalankan script Python dan simpan output: combined_raw_sales.csv.','PYTHON',0],
  ["Fase 1: Data Preparation","Minggu 1","2026-08-19","Selasa, 19 Agst",'Filter kolom HPP, temukan satu SKU dengan margin aneh ~98.8%.','ANALISIS',0],
  ["Fase 1: Data Preparation","Minggu 1","2026-08-20","Rabu, 20 Agst",'Temui tim accounting PT X. Validasi apakah margin 98.8% error input atau transaksi khusus.','VALIDASI',0],
  ["Fase 1: Data Preparation","Minggu 1","2026-08-21","Kamis, 21 Agst",'Koreksi data anomali, jalankan ulang script, ekspor cleaned_sales_data.csv.','DATA',0],
  // FASE 1 MINGGU 2
  ["Fase 1: Analisis & Desain Bab 3","Minggu 2","2026-08-22","Jumat, 22 Agst",'Tulis script Python untuk hitung Margin Kontribusi: (Harga Jual - HPP) x Kuantitas.','PYTHON',0],
  ["Fase 1: Analisis & Desain Bab 3","Minggu 2","2026-08-23","Sabtu, 23 Agst",'Urutkan produk berdasarkan Revenue dan Margin Kontribusi untuk Matriks 3x3 Flores & Whybark.','ABC',0],
  ["Fase 1: Analisis & Desain Bab 3","Minggu 2","2026-08-24","Minggu, 24 Agst",'Petakan produk ke Matriks 3x3. Identifikasi produk off-diagonal.','ABC',0],
  ["Fase 1: Analisis & Desain Bab 3","Minggu 2","2026-08-25","Senin, 25 Agst",'Bikin Skripsi_San_Bab3.docx. Tulis Metode Pengumpulan Data dan proses ETL Python.','BAB 3',0],
  ["Fase 1: Analisis & Desain Bab 3","Minggu 2","2026-08-26","Selasa, 26 Agst",'Rancang Kimball 9-Step: proses bisnis, grain, tabel dimensi, tabel fakta penjualan.','KIMBALL',0],
  ["Fase 1: Analisis & Desain Bab 3","Minggu 2","2026-08-27","Rabu, 27 Agst",'Buat diagram Star Schema di Word (fact sales + dimensi waktu, produk, kategori).','KIMBALL',0],
  ["Fase 1: Analisis & Desain Bab 3","Minggu 2","2026-08-28","Kamis, 28 Agst",'Rancang mockup visual dashboard Power BI (letak 6 fitur utama).','POWER BI',0],
  ["Fase 1: Analisis & Desain Bab 3","Minggu 2","2026-08-29","Jumat, 29 Agst",'Tulis draf kuesioner UAT (Likert) dan transkrip wawancara kebutuhan sistem untuk Bab 3.','METODOLOGI',0],
  ["Fase 1: Analisis & Desain Bab 3","Minggu 2","2026-08-30","Sabtu, 30 Agst",'Baca ulang dan rapikan format Bab 1 & Bab 3 bagian penyiapan data.','CHECKPOINT',1],
  // FASE 2 MINGGU 3
  ["Fase 2: Tinjauan Pustaka Bab 2","Minggu 3","2026-09-01","Senin, 1 Sept",'Bikin Skripsi_San_Bab2.docx. Tulis teori dasar Business Intelligence (BI) & Power BI.','BAB 2',0],
  ["Fase 2: Tinjauan Pustaka Bab 2","Minggu 3","2026-09-02","Selasa, 2 Sept",'Tulis teori Klasifikasi ABC Ganda, sitasi Flores & Whybark (1986).','BAB 2',0],
  ["Fase 2: Tinjauan Pustaka Bab 2","Minggu 3","2026-09-03","Rabu, 3 Sept",'Tulis teori peramalan Holt Double Exponential Smoothing (DES).','BAB 2',0],
  ["Fase 2: Tinjauan Pustaka Bab 2","Minggu 3","2026-09-04","Kamis, 4 Sept",'Tulis teori akurasi peramalan MAPE (Mean Absolute Percentage Error).','BAB 2',0],
  ["Fase 2: Tinjauan Pustaka Bab 2","Minggu 3","2026-09-07","Minggu, 7 Sept",'Tulis teori pemodelan dimensional Kimball 9-Step.','BAB 2',0],
  ["Fase 2: Tinjauan Pustaka Bab 2","Minggu 3","2026-09-08","Senin, 8 Sept",'Cari dan ulas 4 Jurnal Sejenis (UNTAR, UGM, ITERA, Chalmers).','BAB 2',0],
  ["Fase 2: Tinjauan Pustaka Bab 2","Minggu 3","2026-09-09","Selasa, 9 Sept",'Buat tabel ringkasan penelitian terdahulu di Bab 2.','BAB 2',0],
  ["Fase 2: Tinjauan Pustaka Bab 2","Minggu 3","2026-09-10","Rabu, 10 Sept",'Masukkan rumus margin kontribusi ke Bab 2. Integrasikan Bab 2 ke draf besar.','BAB 2',0],
  // FASE 2 MINGGU 4
  ["Fase 2: Finalisasi Proposal","Minggu 4","2026-09-12","Jumat, 12 Sept",'Tulis sub-bab Justifikasi Penolakan Metode: kenapa SES ditolak (data ada tren).','BAB 3',0],
  ["Fase 2: Finalisasi Proposal","Minggu 4","2026-09-15","Senin, 15 Sept",'Tulis justifikasi kenapa Holt-Winters ditolak (data non-musiman), rujuk paper Khedlekar.','BAB 3',0],
  ["Fase 2: Finalisasi Proposal","Minggu 4","2026-09-19","Jumat, 19 Sept",'Gabungkan Bab 1, 2, 3 menjadi satu berkas proposal. Rapikan daftar pustaka IEEE.','FINALISASI',1],
  ["Fase 2: Finalisasi Proposal","Minggu 4","2026-09-25","Kamis, 25 Sept",'Bimbingan kilat dosen pembimbing, perbaikan minor, ekspor PDF, jilid proposal.','FINALISASI',1],
  ["Fase 2: Finalisasi Proposal","Minggu 4","2026-09-28","Minggu, 28 Sept",'SUBMIT PROPOSAL LENGKAP BAB 1-3 KE KAMPUS.','DEADLINE',1],
  // FASE 3
  ["Fase 3: Sidang Proposal & Backend","Oktober","2026-10-04","4 Okt",'Rancang slide presentasi proposal. Latihan jawab pertanyaan kritis.','SIDANG',1],
  ["Fase 3: Sidang Proposal & Backend","Oktober","2026-10-05","5-16 Okt",'SIDANG PROPOSAL. Presentasikan rencana penelitian, skema Kimball, mockup dashboard.','SIDANG',1],
  ["Fase 3: Sidang Proposal & Backend","Oktober","2026-10-17","Pasca Sidang",'Selesaikan revisi dari dosen penguji. Minta tanda tangan persetujuan.','REVISI',0],
  ["Fase 3: Sidang Proposal & Backend","Oktober","2026-10-25","Akhir Okt",'Jalankan script Python Holt DES bulanan per produk. Hubungkan output ke Power BI.','POWER BI',0],
  // FASE 4 MINGGU 5
  ["Fase 4: Dashboard Build","Minggu 5","2026-11-01","Sabtu, 1 Nov",'Hubungkan tabel fakta dan dimensi (Star Schema) di Power BI Desktop.','POWER BI',1],
  ["Fase 4: Dashboard Build","Minggu 5","2026-11-02","Minggu, 2 Nov",'Buat formula DAX untuk klasifikasi ABC ganda Flores & Whybark.','POWER BI',0],
  ["Fase 4: Dashboard Build","Minggu 5","2026-11-03","Senin, 3 Nov",'Bangun halaman 1: Visualisasi Matriks ABC Ganda (3x3) dan Top 5 Produk.','POWER BI',0],
  ["Fase 4: Dashboard Build","Minggu 5","2026-11-04","Selasa, 4 Nov",'Bangun halaman 2: Grafik Forecast Holt DES bulanan per produk.','POWER BI',0],
  ["Fase 4: Dashboard Build","Minggu 5","2026-11-05","Rabu, 5 Nov",'Bangun halaman 3: Indikator Reorder Point dan rekomendasi Kuantitas Pemesanan.','POWER BI',0],
  ["Fase 4: Dashboard Build","Minggu 5","2026-11-06","Kamis, 6 Nov",'Tambahkan slicer/filter kategori produk dan periode waktu.','POWER BI',0],
  ["Fase 4: Dashboard Build","Minggu 5","2026-11-07","Jumat, 7 Nov",'Self-test: pastikan semua visualisasi dan filter Power BI tanpa error.','POWER BI',1],
  // FASE 4 MINGGU 6
  ["Fase 4: Uji Program & UAT","Minggu 6","2026-11-09","9-20 Nov",'UJI PROGRAM KAMPUS. Demokan dashboard ke lab/dosen penguji.','UJI PROGRAM',1],
  ["Fase 4: Uji Program & UAT","Minggu 6","2026-11-14","14-17 Nov",'Demo dashboard fungsional ke 3-5 responden internal PT X.','UAT',0],
  ["Fase 4: Uji Program & UAT","Minggu 6","2026-11-18","18-20 Nov",'Bagikan kuesioner Likert UAT, rekap ke Excel, hitung rata-rata skor.','UAT',0],
  // FASE 4 MINGGU 7
  ["Fase 4: Penulisan & Sidang Akhir","Minggu 7","2026-11-21","Jumat, 21 Nov",'Tulis Bab 4: Hasil UAT, nilai MAPE, analisis produk off-diagonal.','BAB 4-5',1],
  ["Fase 4: Penulisan & Sidang Akhir","Minggu 7","2026-11-22","Sabtu, 22 Nov",'Tulis Bab 5: Kesimpulan & Saran menjawab 4 rumusan masalah. Gabung PDF utuh.','BAB 4-5',1],
  ["Fase 4: Penulisan & Sidang Akhir","Minggu 7","2026-11-23","Minggu, 23 Nov",'SUBMIT BUKU SKRIPSI FINAL BAB 1-5 KE KAMPUS.','DEADLINE',1],
  ["Fase 4: Penulisan & Sidang Akhir","Minggu 7","2026-11-24","24-29 Nov",'Siapkan slide presentasi akhir. Simulasi presentasi. Latihan pertanyaan dosen.','SIDANG',1],
  ["Fase 4: Penulisan & Sidang Akhir","Minggu 7","2026-11-30","Minggu, 30 Nov",'SIDANG AKHIR SKRIPSI -- resmi lulus S.Kom!','FINAL',1]
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

      // Checkbox - smooth, no full re-render
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

      // Notes toggle
      const btn=art.querySelector(".note-toggle");
      const na=art.querySelector(".note-area");
      btn.addEventListener("click",()=>{na.classList.toggle("open");if(na.classList.contains("open"))na.querySelector("textarea").focus()});

      // Notes save
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
