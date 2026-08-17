/* ═══ EFFECTS ═══ */
(function(){const c=document.getElementById('petals');function p(){const e=document.createElement('div');e.className='petal';const s=8+Math.random()*14;e.style.width=s+'px';e.style.height=s+'px';e.style.left=Math.random()*100+'vw';e.style.setProperty('--drift',(Math.random()-.5)*180+'px');e.style.setProperty('--spin',(Math.random()*720-360)+'deg');e.style.animationDuration=(6+Math.random()*8)+'s';e.style.animationDelay=Math.random()*2+'s';c.appendChild(e);e.addEventListener('animationend',()=>e.remove())}for(let i=0;i<4;i++)setTimeout(p,i*400);setInterval(p,2800)})();
(function(){const c=document.getElementById('glitter');for(let i=0;i<20;i++){const s=document.createElement('div');s.className='sparkle';s.style.left=Math.random()*100+'vw';s.style.top=Math.random()*100+'vh';const sz=(2+Math.random()*3);s.style.width=sz+'px';s.style.height=sz+'px';s.style.animationDuration=(2+Math.random()*4)+'s';s.style.animationDelay=Math.random()*5+'s';s.style.background=['#d4a843','#e8ada7','#d4918a','#a3b48c','#f4ddd9'][Math.floor(Math.random()*5)];c.appendChild(s)}})();
function flowerBurst(x,y){const l=document.getElementById('flower-burst-layer');const c=['#d4918a','#e8ada7','#d4a843','#a3b48c','#f4ddd9'];for(let i=0;i<10;i++){const p=document.createElement('div');p.className='burst-petal';p.style.left=x+'px';p.style.top=y+'px';const a=(i/10)*Math.PI*2;const d=40+Math.random()*50;p.style.setProperty('--bx',Math.cos(a)*d+'px');p.style.setProperty('--by',Math.sin(a)*d+'px');p.style.setProperty('--br',(Math.random()*360)+'deg');p.style.background=c[Math.floor(Math.random()*c.length)];const sz=6+Math.random()*7;p.style.width=sz+'px';p.style.height=sz+'px';l.appendChild(p);p.addEventListener('animationend',()=>p.remove())}}

/* ═══ QUOTES ═══ */
const quotes=['"The secret of getting ahead is getting started." — Mark Twain','"Small daily improvements lead to stunning results." — Robin Sharma','"It always seems impossible until it\'s done." — Nelson Mandela','"Plant your seeds with patience. The bloom will come."','"One page at a time, one day at a time."','"Progress, not perfection."','"You are doing better than you think. Keep going."','"Discipline is choosing what you want most over what you want now."','"Don\'t watch the clock; do what it does — keep going."','"Jangan track waktu belajar. Track OUTPUT."','"45 menit + 1 output = PROGRESS."','"Konsisten pelan > sprint brutal 3 hari lalu tumbang."','"The flower that blooms in adversity is the rarest of all."','"Every expert was once a beginner."'];

/* ═══ DATA KEYS ═══ */
const KEYS={skripsi:'garden-skripsi-v4',kuliah:'garden-kuliah-v1',kerja:'garden-kerja-v1',notes:'garden-notes-v3'};
const $=id=>document.getElementById(id);
const today=new Date();today.setHours(0,0,0,0);

/* ═══ SKRIPSI TASKS (preloaded) ═══ */
const skripsiTasks=[
["17 Agst — Foundation","Week 1","2026-08-17","17 Agst","Freeze research specification","SPEC",1],
["17 Agst — Foundation","Week 1","2026-08-17","17 Agst","Tentukan periode data final","SPEC",1],
["17 Agst — Foundation","Week 1","2026-08-17","17 Agst","Tentukan metode forecasting final","SPEC",1],
["17 Agst — Foundation","Week 1","2026-08-17","17 Agst","Tentukan metode ABC final","SPEC",1],
["17 Agst — Foundation","Week 1","2026-08-17","17 Agst","Tentukan variabel penelitian","SPEC",0],
["17 Agst — Foundation","Week 1","2026-08-17","17 Agst","Tentukan metode evaluasi","SPEC",0],
["17 Agst — Foundation","Week 1","2026-08-17","17 Agst","Buat outline BAB 1-3","OUTLINE",1],
["17 Agst — Foundation","Week 1","2026-08-17","17 Agst","Mapping isi sinopsis ke BAB 1-3","OUTLINE",0],
["18 Agst — BAB 1","Week 1","2026-08-18","18 Agst","Draft Latar Belakang","BAB 1",0],
["18 Agst — BAB 1","Week 1","2026-08-18","18 Agst","Draft Identifikasi Masalah","BAB 1",0],
["18 Agst — BAB 1","Week 1","2026-08-18","18 Agst","Draft Rumusan Masalah","BAB 1",0],
["18 Agst — BAB 1","Week 1","2026-08-18","18 Agst","Cek kesesuaian dengan research spec","BAB 1",0],
["19 Agst — BAB 1","Week 1","2026-08-19","19 Agst","Draft Batasan Masalah","BAB 1",0],
["19 Agst — BAB 1","Week 1","2026-08-19","19 Agst","Draft Tujuan Penelitian","BAB 1",0],
["19 Agst — BAB 1","Week 1","2026-08-19","19 Agst","Draft Manfaat Penelitian","BAB 1",0],
["19 Agst — BAB 1","Week 1","2026-08-19","19 Agst","Rapikan BAB 1","BAB 1",0],
["19 Agst — BAB 1","Week 1","2026-08-19","19 Agst","Tandai bagian [VERIFY]","BAB 1",0],
["20 Agst — BAB 2 + Data","Week 1","2026-08-20","20 Agst","Draft teori Manajemen Persediaan","BAB 2",0],
["20 Agst — BAB 2 + Data","Week 1","2026-08-20","20 Agst","Draft Pengendalian Persediaan","BAB 2",0],
["20 Agst — BAB 2 + Data","Week 1","2026-08-20","20 Agst","Draft ABC Analysis","BAB 2",0],
["20 Agst — BAB 2 + Data","Week 1","2026-08-20","20 Agst","Export data Accurate","DATA",1],
["20 Agst — BAB 2 + Data","Week 1","2026-08-20","20 Agst","Cek struktur file, periode, jumlah SKU","DATA",0],
["21 Agst — BAB 2 + Data","Week 1","2026-08-21","21 Agst","Draft ABC Multi-Criteria, Sales Value, Margin Contribution","BAB 2",0],
["21 Agst — BAB 2 + Data","Week 1","2026-08-21","21 Agst","Cek missing value, duplicate, inkonsistensi","DATA",0],
["21 Agst — BAB 2 + Data","Week 1","2026-08-21","21 Agst","Dokumentasikan masalah data","DATA",0],
["22 Agst — BAB 2","Week 1","2026-08-22","22 Agst","Draft Forecasting + Holt DES + MAPE","BAB 2",0],
["22 Agst — BAB 2","Week 1","2026-08-22","22 Agst","Cek sumber teori","BAB 2",0],
["23 Agst — BAB 2","Week 1","2026-08-23","23 Agst","Draft BI, ETL, Power BI, Dashboard","BAB 2",0],
["23 Agst — BAB 2","Week 1","2026-08-23","23 Agst","Buat daftar penelitian terdahulu","BAB 2",0],
["24 Agst — BAB 2 Selesai","Week 2","2026-08-24","24 Agst","Selesaikan penelitian terdahulu + kerangka pemikiran","BAB 2",0],
["24 Agst — BAB 2 Selesai","Week 2","2026-08-24","24 Agst","Lengkapi citation, rapikan BAB 2","BAB 2",0],
["25 Agst — BAB 3","Week 2","2026-08-25","25 Agst","Draft Objek, Metode, Pengumpulan Data, Sumber Data","BAB 3",0],
["25 Agst — BAB 3","Week 2","2026-08-25","25 Agst","Tentukan alur penelitian","BAB 3",0],
["26 Agst — BAB 3 + ETL","Week 2","2026-08-26","26 Agst","Draft proses ETL (Extract, Transform, Load)","ETL",0],
["26 Agst — BAB 3 + ETL","Week 2","2026-08-26","26 Agst","Cleaning data awal + tentukan grain","ETL",0],
["26 Agst — BAB 3 + ETL","Week 2","2026-08-26","26 Agst","Dokumentasikan hasil cleaning","ETL",0],
["27 Agst — BAB 3 + ABC","Week 2","2026-08-27","27 Agst","Draft metode ABC dua kriteria + mekanisme klasifikasi","ABC",0],
["27 Agst — BAB 3 + ABC","Week 2","2026-08-27","27 Agst","Mulai implementasi ABC, simpan hasil sementara","ABC",0],
["28 Agst — BAB 3 + Forecast","Week 2","2026-08-28","28 Agst","Draft metode forecasting + Holt DES + MAPE","BAB 3",0],
["28 Agst — BAB 3 + Forecast","Week 2","2026-08-28","28 Agst","Mulai forecasting data, dokumentasikan proses","FORECAST",0],
["29 Agst — BAB 3","Week 2","2026-08-29","29 Agst","Draft Dashboard, Prototyping, Black Box Testing, UAT","BAB 3",0],
["30 Agst — Integration","Week 2","2026-08-30","30 Agst","Selesaikan BAB 3, satukan BAB 1-3","INTEGRASI",1],
["30 Agst — Integration","Week 2","2026-08-30","30 Agst","QC: Rumusan <> Tujuan <> Metode <> Output","QC",0],
["30 Agst — Integration","Week 2","2026-08-30","30 Agst","Cek citation + istilah konsisten + tandai [VERIFY]","QC",0],
["31 Agst — FREEZE","Week 2","2026-08-31","31 Agst","Baca ulang BAB 1, 2, 3 + perbaiki major error","FREEZE",1],
["31 Agst — FREEZE","Week 2","2026-08-31","31 Agst","Lengkapi kosong, rapikan format + daftar pustaka","FREEZE",0],
["31 Agst — FREEZE","Week 2","2026-08-31","31 Agst","Simpan Proposal_BAB1-3_v1 — RESMI FASE REVISI","FREEZE",1],
["September — Revisi","Sept","2026-09-12","Sept","Bimbingan + revisi BAB 1-3 berdasarkan feedback dosen","BIMBINGAN",0],
["September — Revisi","Sept","2026-09-25","Sept","Rapikan IEEE format, ekspor PDF, jilid proposal","FINALISASI",1],
["September — Revisi","Sept","2026-09-28","28 Sept","SUBMIT PROPOSAL BAB 1-3","DEADLINE",1],
["Oktober — Sidang","Okt","2026-10-05","5-16 Okt","SIDANG PROPOSAL","SIDANG",1],
["Oktober — Sidang","Okt","2026-10-17","Post-Sidang","Revisi dari penguji + mulai backend Power BI","REVISI",0],
["November — Build & Akhir","Nov","2026-11-01","1-8 Nov","Build dashboard Power BI (Star Schema, DAX, 6 fitur)","POWER BI",1],
["November — Build & Akhir","Nov","2026-11-09","9-20 Nov","UJI PROGRAM + demo ke responden PT X + UAT Likert","UJI",1],
["November — Build & Akhir","Nov","2026-11-21","21-22 Nov","Tulis BAB 4-5, gabung PDF utuh","BAB 4-5",1],
["November — Build & Akhir","Nov","2026-11-23","23 Nov","SUBMIT BUKU SKRIPSI BAB 1-5","DEADLINE",1],
["November — Build & Akhir","Nov","2026-11-30","30 Nov","SIDANG AKHIR — S.Kom!","FINAL",1]
].map((x,i)=>({id:'s'+i,section:x[0],phase:x[1],date:x[2],day:x[3],title:x[4],tag:x[5],urgent:x[6],cat:'skripsi'}));

/* ═══ STATE ═══ */
let state=JSON.parse(localStorage.getItem(KEYS.skripsi)||"{}");
let kuliahTasks=JSON.parse(localStorage.getItem(KEYS.kuliah)||"[]");
let kerjaTasks=JSON.parse(localStorage.getItem(KEYS.kerja)||"[]");
let notes=JSON.parse(localStorage.getItem(KEYS.notes)||"{}");
let activeTab='skripsi';
let filters={skripsi:'all',kuliah:'all',kerja:'all'};

function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function isDone(id){return state[id]===true}
function fmtDate(d){return new Date(d+'T00:00:00').toLocaleDateString('id-ID',{day:'2-digit',month:'short'})}
function daysUntil(d){const dt=new Date(d+'T00:00:00');return Math.ceil((dt-today)/86400000)}

/* ═══ JARVIS GREETING ═══ */
function initJarvis(){
  const h=new Date().getHours();
  let g='Good evening,';if(h<12)g='Good morning,';else if(h<17)g='Good afternoon,';
  $('greeting').textContent=g;
  $('todayDate').textContent=new Date().toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  $('quote').textContent=quotes[Math.floor(Math.random()*quotes.length)];
  updateBrief();
}

function updateBrief(){
  const brief=$('brief');brief.innerHTML='';
  const all=getAllTasks();
  const todayTasks=all.filter(t=>!t.done&&t.date&&daysUntil(t.date)===0);
  const upcoming=all.filter(t=>!t.done&&t.date&&daysUntil(t.date)>0&&daysUntil(t.date)<=3);
  const overdue=all.filter(t=>!t.done&&t.date&&daysUntil(t.date)<0);

  if(overdue.length){const c=document.createElement('div');c.className='brief-chip urgent';c.textContent=overdue.length+' overdue task'+(overdue.length>1?'s':'');brief.appendChild(c)}
  if(todayTasks.length){const c=document.createElement('div');c.className='brief-chip urgent';c.textContent=todayTasks.length+' task hari ini';brief.appendChild(c)}
  if(upcoming.length){const c=document.createElement('div');c.className='brief-chip ok';c.textContent=upcoming.length+' deadline dalam 3 hari';brief.appendChild(c)}

  const sLeft=skripsiTasks.filter(t=>!isDone(t.id)).length;
  const kLeft=kuliahTasks.filter(t=>!t.done).length;
  const wLeft=kerjaTasks.filter(t=>!t.done).length;
  if(sLeft){const c=document.createElement('div');c.className='brief-chip ok';c.textContent='Skripsi: '+sLeft+' remaining';brief.appendChild(c)}
  if(kLeft){const c=document.createElement('div');c.className='brief-chip ok';c.textContent='Kuliah: '+kLeft+' task';brief.appendChild(c)}
  if(wLeft){const c=document.createElement('div');c.className='brief-chip ok';c.textContent='Kerja: '+wLeft+' task';brief.appendChild(c)}
  if(!brief.children.length){const c=document.createElement('div');c.className='brief-chip ok';c.textContent='All clear! Nothing due today.';brief.appendChild(c)}
}

function getAllTasks(){
  const s=skripsiTasks.map(t=>({...t,done:isDone(t.id)}));
  const k=kuliahTasks.map(t=>({...t}));
  const w=kerjaTasks.map(t=>({...t}));
  return[...s,...k,...w];
}

/* ═══ TAB SWITCHING ═══ */
document.querySelectorAll('.tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    activeTab=btn.dataset.tab;
    $('panel-'+activeTab).classList.add('active');
    renderTab(activeTab);
  });
});

/* ═══ BUILD TASK ELEMENT ═══ */
function buildTask(task,cat,container){
  const done=cat==='skripsi'?isDone(task.id):task.done;
  const noteText=notes[task.id]||'';
  const dl=task.date?daysUntil(task.date):-999;
  const dueSoon=!done&&dl>=0&&dl<=2;

  const art=document.createElement('article');
  art.className='task'+(done?' done':'')+(task.urgent?' urgent':'')+(dueSoon?' due-soon':'');

  let dateStr=task.day||'';
  if(task.date)dateStr+=' &middot; '+fmtDate(task.date);
  if(dueSoon&&dl===0)dateStr+=' <span class="due-badge">DUE TODAY</span>';
  else if(dueSoon)dateStr+=' <span class="due-badge">'+dl+' day'+(dl>1?'s':'')+' left</span>';

  const canDel=cat!=='skripsi';
  art.innerHTML=`
    <label class="check"><input type="checkbox" ${done?'checked':''}><span>&#10003;</span></label>
    <div>
      <div class="task-date">${dateStr}</div>
      <div class="title">${task.title}</div>
      <button class="note-toggle">${noteText?'[ notes ]':'+ note'}</button>
    </div>
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
      <div class="tag">${task.tag||''}</div>
      ${canDel?'<button class="btn-del" title="Delete">&#10005;</button>':''}
    </div>
    <div class="note-area${noteText?' open':''}">
      <textarea placeholder="Tulis catatan...">${noteText}</textarea>
    </div>`;

  const cb=art.querySelector('input');
  cb.addEventListener('change',e=>{
    if(cat==='skripsi'){state[task.id]=e.target.checked;save(KEYS.skripsi,state)}
    else{task.done=e.target.checked;save(cat==='kuliah'?KEYS.kuliah:KEYS.kerja,cat==='kuliah'?kuliahTasks:kerjaTasks)}
    if(e.target.checked){art.classList.add('done','just-done');art.querySelector('.title').style.textDecoration='line-through';const r=cb.getBoundingClientRect();flowerBurst(r.left+r.width/2,r.top+r.height/2);setTimeout(()=>art.classList.remove('just-done'),600)}
    else{art.classList.remove('done');art.querySelector('.title').style.textDecoration='none'}
    updatePanelStats(cat);updateBrief();
  });

  const nbtn=art.querySelector('.note-toggle');const na=art.querySelector('.note-area');
  nbtn.addEventListener('click',()=>{na.classList.toggle('open');if(na.classList.contains('open'))na.querySelector('textarea').focus()});
  const ta=art.querySelector('textarea');
  ta.addEventListener('input',()=>{notes[task.id]=ta.value;save(KEYS.notes,notes);nbtn.textContent=ta.value?'[ notes ]':'+ note'});

  if(canDel){art.querySelector('.btn-del').addEventListener('click',()=>{
    if(!confirm('Hapus task ini?'))return;
    if(cat==='kuliah'){kuliahTasks=kuliahTasks.filter(t=>t.id!==task.id);save(KEYS.kuliah,kuliahTasks)}
    else{kerjaTasks=kerjaTasks.filter(t=>t.id!==task.id);save(KEYS.kerja,kerjaTasks)}
    renderTab(cat);updateBrief();
  })}

  container.appendChild(art);
}

/* ═══ RENDER SKRIPSI ═══ */
function renderSkripsi(){
  const container=$('s-tasks');container.innerHTML='';
  const query=($('s-search')||{}).value?.trim().toLowerCase()||'';
  const f=filters.skripsi;
  const groups={};

  skripsiTasks.forEach(task=>{
    const done=isDone(task.id);
    if(f==='done'&&!done)return;if(f==='todo'&&done)return;
    if(query&&!`${task.title} ${task.tag} ${task.section}`.toLowerCase().includes(query))return;
    (groups[task.section]||=[]).push(task);
  });

  Object.entries(groups).forEach(([section,list])=>{
    const sec=document.createElement('section');sec.className='section';
    sec.innerHTML=`<div class="section-header"><small>${list[0].phase}</small><h3>${section}</h3></div><div class="timeline"></div>`;
    const tl=sec.querySelector('.timeline');
    list.forEach(task=>buildTask(task,'skripsi',tl));
    container.appendChild(sec);
  });

  const emp=container.closest('.panel').querySelector('.empty-msg');
  emp.style.display=container.children.length?'none':'block';
  updatePanelStats('skripsi');
}

/* ═══ RENDER KULIAH / KERJA ═══ */
function renderCustom(cat){
  const list=cat==='kuliah'?kuliahTasks:kerjaTasks;
  const container=$(cat==='kuliah'?'k-tasks':'w-tasks');
  container.innerHTML='';

  const sorted=[...list].sort((a,b)=>{if(a.done!==b.done)return a.done?1:-1;if(!a.date)return 1;if(!b.date)return-1;return new Date(a.date)-new Date(b.date)});
  if(sorted.length){
    const tl=document.createElement('div');tl.className='timeline';
    sorted.forEach(task=>buildTask(task,cat,tl));
    container.appendChild(tl);
  }

  const emp=container.closest('.panel').querySelector('.empty-msg');
  emp.style.display=sorted.length?'none':'block';
  updatePanelStats(cat);
}

/* ═══ RENDER TAB ═══ */
function renderTab(cat){
  if(cat==='skripsi')renderSkripsi();else renderCustom(cat);
}

/* ═══ STATS ═══ */
function updatePanelStats(cat){
  let total,done,list;
  if(cat==='skripsi'){total=skripsiTasks.length;done=skripsiTasks.filter(t=>isDone(t.id)).length;list=skripsiTasks.map(t=>({...t,done:isDone(t.id)}))}
  else if(cat==='kuliah'){list=kuliahTasks;total=list.length;done=list.filter(t=>t.done).length}
  else{list=kerjaTasks;total=list.length;done=list.filter(t=>t.done).length}

  const p=cat==='skripsi'?'s':cat==='kuliah'?'k':'w';
  $(p+'-total').textContent=total;$(p+'-done').textContent=done;
  const bar=document.querySelector('#'+p+'-bar');if(bar)bar.style.width=(total?Math.round(done/total*100):0)+'%';

  const next=list.filter(t=>!t.done&&t.date).map(t=>({...t,dt:new Date(t.date+'T00:00:00')})).filter(t=>t.dt>=today).sort((a,b)=>a.dt-b.dt)[0];
  if(!next){$(p+'-next').textContent=total&&done===total?'DONE':'--';$(p+'-days').textContent=total&&done===total?'~':'--';return}
  $(p+'-next').textContent=fmtDate(next.date);
  $(p+'-days').textContent=daysUntil(next.date)+' d';
}

/* ═══ ADD TASKS ═══ */
function addTask(cat){
  const p=cat==='kuliah'?'k':'w';
  const title=$(p+'-title').value.trim();if(!title)return;
  const tag=$(p+'-tag').value.trim().toUpperCase()||'TASK';
  const date=$(p+'-date').value||'';
  const task={id:cat[0]+Date.now(),title,tag,date,day:date?fmtDate(date):'',done:false};
  if(cat==='kuliah'){kuliahTasks.push(task);save(KEYS.kuliah,kuliahTasks)}
  else{kerjaTasks.push(task);save(KEYS.kerja,kerjaTasks)}
  $(p+'-title').value='';$(p+'-tag').value='';$(p+'-date').value='';
  renderTab(cat);updateBrief();
}

$('k-add').addEventListener('click',()=>addTask('kuliah'));
$('w-add').addEventListener('click',()=>addTask('kerja'));
$('k-title').addEventListener('keydown',e=>{if(e.key==='Enter')addTask('kuliah')});
$('w-title').addEventListener('keydown',e=>{if(e.key==='Enter')addTask('kerja')});

/* ═══ SKRIPSI FILTERS ═══ */
document.querySelectorAll('[data-cat="skripsi"]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-cat="skripsi"]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');filters.skripsi=btn.dataset.filter;renderSkripsi();
  });
});
const sSearch=$('s-search');if(sSearch)sSearch.addEventListener('input',renderSkripsi);

/* ═══ FADE OBSERVER ═══ */
const fadeObs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.15});
document.querySelectorAll('.fade-in').forEach(el=>fadeObs.observe(el));

/* ═══ INIT ═══ */
initJarvis();
renderTab('skripsi');
