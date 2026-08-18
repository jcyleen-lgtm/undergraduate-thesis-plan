/* ═══ EFFECTS ═══ */
(function(){const c=document.getElementById('petals');function p(){const e=document.createElement('div');e.className='petal';const s=8+Math.random()*14;e.style.width=s+'px';e.style.height=s+'px';e.style.left=Math.random()*100+'vw';e.style.setProperty('--drift',(Math.random()-.5)*180+'px');e.style.setProperty('--spin',(Math.random()*720-360)+'deg');e.style.animationDuration=(6+Math.random()*8)+'s';e.style.animationDelay=Math.random()*2+'s';c.appendChild(e);e.addEventListener('animationend',()=>e.remove())}for(let i=0;i<4;i++)setTimeout(p,i*400);setInterval(p,2800)})();
(function(){const c=document.getElementById('glitter');for(let i=0;i<20;i++){const s=document.createElement('div');s.className='sparkle';s.style.left=Math.random()*100+'vw';s.style.top=Math.random()*100+'vh';const sz=2+Math.random()*3;s.style.width=sz+'px';s.style.height=sz+'px';s.style.animationDuration=(2+Math.random()*4)+'s';s.style.animationDelay=Math.random()*5+'s';s.style.background=['#d4a843','#e8ada7','#d4918a','#a3b48c','#f4ddd9'][Math.floor(Math.random()*5)];c.appendChild(s)}})();
function flowerBurst(x,y){const l=document.getElementById('flower-burst-layer');const c=['#d4918a','#e8ada7','#d4a843','#a3b48c','#f4ddd9'];for(let i=0;i<10;i++){const p=document.createElement('div');p.className='burst-petal';p.style.left=x+'px';p.style.top=y+'px';const a=(i/10)*Math.PI*2,d=40+Math.random()*50;p.style.setProperty('--bx',Math.cos(a)*d+'px');p.style.setProperty('--by',Math.sin(a)*d+'px');p.style.setProperty('--br',(Math.random()*360)+'deg');p.style.background=c[Math.floor(Math.random()*c.length)];const sz=6+Math.random()*7;p.style.width=sz+'px';p.style.height=sz+'px';l.appendChild(p);p.addEventListener('animationend',()=>p.remove())}}

const quotes=['"The secret of getting ahead is getting started." — Mark Twain','"Small daily improvements lead to stunning results."','"It always seems impossible until it\'s done." — Nelson Mandela','"Progress, not perfection."','"You are doing better than you think."','"Jangan track waktu belajar. Track OUTPUT."','"45 menit + 1 output = PROGRESS."','"Konsisten pelan > sprint brutal lalu tumbang."','"The flower that blooms in adversity is the rarest of all."','"One page at a time, one day at a time."','"Plant your seeds with patience. The bloom will come."'];
const $=id=>document.getElementById(id);
const today=new Date();today.setHours(0,0,0,0);
const DAYS_ID=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const todayDay=DAYS_ID[new Date().getDay()];

const K={s:'gdn-s-v6',k:'gdn-k-v3',w:'gdn-w-v3',n:'gdn-n-v5',sched:'gdn-sched-v2',sync:'gdn-sync-url'};
function LS(k){try{return JSON.parse(localStorage.getItem(k))}catch{return null}}
function SS(k,v){localStorage.setItem(k,JSON.stringify(v))}

let state=LS(K.s)||{};
let kuliahTasks=LS(K.k)||[];
let kerjaTasks=LS(K.w)||[];
let notes=LS(K.n)||{};
let schedule=LS(K.sched)||[
  {day:'Senin',name:'Statistika Bisnis',time:'18:30 - 20:00',room:'R.501'},
  {day:'Senin',name:'Metodologi Penelitian',time:'20:10 - 21:40',room:'R.501'},
  {day:'Selasa',name:'Sistem Informasi Manajemen',time:'18:30 - 20:00',room:'R.402'},
  {day:'Rabu',name:'Pemrograman Web Lanjut',time:'18:30 - 20:00',room:'R.Lab 3'},
  {day:'Rabu',name:'Basis Data Lanjut',time:'20:10 - 21:40',room:'R.Lab 3'},
  {day:'Kamis',name:'Kecerdasan Buatan',time:'18:30 - 20:00',room:'R.502'},
  {day:'Jumat',name:'Bimbingan Skripsi',time:'17:00 - 18:00',room:'R.Dosen'}
];
let syncUrl=localStorage.getItem(K.sync)||'';
let filters={skripsi:'all'};

function save(k,v){SS(k,v);cloudSync()}
function isDone(id){return state[id]===true}
function fmtDate(d){return new Date(d+'T00:00:00').toLocaleDateString('id-ID',{day:'2-digit',month:'short'})}
function daysUntil(d){return Math.ceil((new Date(d+'T00:00:00')-today)/86400000)}

/* ═══ CLOUD SYNC ═══ */
let syncTimer=null;
function cloudSync(){if(!syncUrl)return;clearTimeout(syncTimer);syncTimer=setTimeout(async()=>{try{await fetch(syncUrl,{method:'POST',body:JSON.stringify({state,kuliahTasks,kerjaTasks,notes,schedule}),headers:{'Content-Type':'text/plain'}});$('syncIndicator').textContent='synced just now'}catch{$('syncIndicator').textContent='sync failed'}},1500)}
async function cloudLoad(){if(!syncUrl)return;$('syncIndicator').textContent='loading...';try{const r=await fetch(syncUrl);const d=await r.json();if(d&&d.state){state=d.state;SS(K.s,state);kuliahTasks=d.kuliahTasks||[];SS(K.k,kuliahTasks);kerjaTasks=d.kerjaTasks||[];SS(K.w,kerjaTasks);notes=d.notes||{};SS(K.n,notes);schedule=d.schedule||schedule;SS(K.sched,schedule)}$('syncIndicator').textContent='synced'}catch{$('syncIndicator').textContent='offline mode'}}

/* ═══ SETTINGS ═══ */
$('openSettings').addEventListener('click',()=>{$('syncUrl').value=syncUrl;$('settingsModal').classList.add('open')});
$('closeSettings').addEventListener('click',()=>$('settingsModal').classList.remove('open'));
$('saveSettings').addEventListener('click',()=>{syncUrl=$('syncUrl').value.trim();localStorage.setItem(K.sync,syncUrl);$('settingsModal').classList.remove('open');if(syncUrl){$('syncStatus').textContent='Loading...';cloudLoad().then(()=>{renderAll();$('syncStatus').textContent='Connected!'})}else $('syncStatus').textContent='Offline mode.'});

/* ═══ SKRIPSI DATA ═══ */
const skripsiTasks=[
["17 Agst — Foundation","Wk1","2026-08-17","17 Agst","Freeze research specification","SPEC",1],
["17 Agst — Foundation","Wk1","2026-08-17","17 Agst","Tentukan periode data, metode forecasting, ABC, variabel, evaluasi","SPEC",1],
["17 Agst — Foundation","Wk1","2026-08-17","17 Agst","Buat outline BAB 1-3 + mapping sinopsis","OUTLINE",1],
["18 Agst — BAB 1","Wk1","2026-08-18","18 Agst","Draft Latar Belakang, Identifikasi & Rumusan Masalah","BAB 1",0],
["18 Agst — BAB 1","Wk1","2026-08-18","18 Agst","Cek kesesuaian dengan research spec","BAB 1",0],
["19 Agst — BAB 1","Wk1","2026-08-19","19 Agst","Draft Batasan, Tujuan, Manfaat Penelitian","BAB 1",0],
["19 Agst — BAB 1","Wk1","2026-08-19","19 Agst","Rapikan BAB 1 + tandai [VERIFY]","BAB 1",0],
["20 Agst — BAB 2 + Data","Wk1","2026-08-20","20 Agst","Draft teori Manajemen & Pengendalian Persediaan + ABC","BAB 2",0],
["20 Agst — BAB 2 + Data","Wk1","2026-08-20","20 Agst","Export data Accurate + cek struktur/periode/SKU","DATA",1],
["21 Agst — BAB 2 + Data","Wk1","2026-08-21","21 Agst","Draft ABC Multi-Criteria, Sales Value, Margin Contribution","BAB 2",0],
["21 Agst — BAB 2 + Data","Wk1","2026-08-21","21 Agst","Cek missing/duplicate/inkonsistensi + dokumentasikan","DATA",0],
["22 Agst — BAB 2","Wk1","2026-08-22","22 Agst","Draft Forecasting + Holt DES + MAPE + cek sumber","BAB 2",0],
["23 Agst — BAB 2","Wk1","2026-08-23","23 Agst","Draft BI, ETL, Power BI, Dashboard + penelitian terdahulu","BAB 2",0],
["24 Agst — BAB 2 Done","Wk2","2026-08-24","24 Agst","Selesaikan penelitian terdahulu + kerangka pemikiran","BAB 2",0],
["24 Agst — BAB 2 Done","Wk2","2026-08-24","24 Agst","Lengkapi citation, rapikan BAB 2, cek teori<>metode","BAB 2",0],
["25 Agst — BAB 3","Wk2","2026-08-25","25 Agst","Draft Objek/Metode/Pengumpulan/Sumber Data + alur","BAB 3",0],
["26 Agst — BAB 3 + ETL","Wk2","2026-08-26","26 Agst","Draft ETL + cleaning data + tentukan grain","ETL",0],
["27 Agst — BAB 3 + ABC","Wk2","2026-08-27","27 Agst","Draft metode ABC dua kriteria + mulai implementasi","ABC",0],
["28 Agst — BAB 3 + Forecast","Wk2","2026-08-28","28 Agst","Draft forecasting + mulai forecasting data","FORECAST",0],
["29 Agst — BAB 3","Wk2","2026-08-29","29 Agst","Draft Dashboard, Prototyping, Black Box, UAT","BAB 3",0],
["30 Agst — Integration","Wk2","2026-08-30","30 Agst","Satukan BAB 1-3 + QC semua kesesuaian + citation","INTEGRASI",1],
["31 Agst — FREEZE","Wk2","2026-08-31","31 Agst","Baca ulang semua, perbaiki, rapikan, simpan v1 — FREEZE","FREEZE",1],
["September — Revisi","Sept","2026-09-12","Sept","Bimbingan + revisi BAB 1-3","BIMBINGAN",0],
["September — Submit","Sept","2026-09-28","28 Sept","SUBMIT PROPOSAL BAB 1-3","DEADLINE",1],
["Oktober — Sidang","Okt","2026-10-05","5-16 Okt","SIDANG PROPOSAL","SIDANG",1],
["Oktober — Build","Okt","2026-10-25","Akhir Okt","Revisi + mulai Power BI backend","POWER BI",0],
["November — Dashboard","Nov","2026-11-01","1-8 Nov","Build dashboard Power BI lengkap","POWER BI",1],
["November — Uji","Nov","2026-11-09","9-20 Nov","UJI PROGRAM + UAT","UJI",1],
["November — Bab 4-5","Nov","2026-11-21","21-22 Nov","Tulis BAB 4-5","BAB 4-5",1],
["November — Submit","Nov","2026-11-23","23 Nov","SUBMIT BUKU SKRIPSI BAB 1-5","DEADLINE",1],
["November — Akhir","Nov","2026-11-30","30 Nov","SIDANG AKHIR — S.Kom!","FINAL",1]
].map((x,i)=>({id:'s'+i,section:x[0],phase:x[1],date:x[2],day:x[3],title:x[4],tag:x[5],urgent:x[6]}));

/* ═══ JARVIS ═══ */
function initJarvis(){
  const h=new Date().getHours();let g='Good evening,';if(h<12)g='Good morning,';else if(h<17)g='Good afternoon,';
  $('greeting').textContent=g;
  $('todayDate').textContent=new Date().toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  $('quote').textContent=quotes[Math.floor(Math.random()*quotes.length)];
  updateBrief();updateTodayAgenda();
}
function updateBrief(){
  const b=$('brief');b.innerHTML='';
  const all=[...skripsiTasks.map(t=>({...t,done:isDone(t.id)})),...kuliahTasks,...kerjaTasks];
  const ov=all.filter(t=>!t.done&&t.date&&daysUntil(t.date)<0);
  const td=all.filter(t=>!t.done&&t.date&&daysUntil(t.date)===0);
  const up=all.filter(t=>!t.done&&t.date&&daysUntil(t.date)>0&&daysUntil(t.date)<=3);
  const todayClasses=schedule.filter(c=>c.day===todayDay);
  if(ov.length)chip(b,ov.length+' overdue','urgent');
  if(td.length)chip(b,td.length+' due today','urgent');
  if(up.length)chip(b,up.length+' in 3 days','ok');
  if(todayClasses.length)chip(b,todayClasses.length+' class: '+todayClasses.map(c=>c.name.split(' ')[0]).join(', '),'ok');
  const sL=skripsiTasks.filter(t=>!isDone(t.id)).length;
  const kL=kuliahTasks.filter(t=>!t.done).length;
  const wL=kerjaTasks.filter(t=>!t.done).length;
  if(sL)chip(b,'Skripsi: '+sL+' left','ok');
  if(kL)chip(b,'Kuliah: '+kL+' tugas','ok');
  if(wL)chip(b,'Kerja: '+wL+' task','ok');
  if(!b.children.length)chip(b,'All clear!','ok');
}
function updateTodayAgenda(){
  const a=$('todayAgenda');a.innerHTML='<h4>TODAY\'S AGENDA</h4>';
  const items=[];
  // classes today
  schedule.filter(c=>c.day===todayDay).forEach(c=>items.push({text:c.time+' — '+c.name+(c.room?' ('+c.room+')':''),cat:'KELAS'}));
  // tasks due today
  skripsiTasks.filter(t=>!isDone(t.id)&&t.date&&daysUntil(t.date)===0).forEach(t=>items.push({text:t.title,cat:'SKRIPSI'}));
  kuliahTasks.filter(t=>!t.done&&t.date&&daysUntil(t.date)===0).forEach(t=>items.push({text:t.title,cat:'KULIAH'}));
  kerjaTasks.filter(t=>!t.done&&t.date&&daysUntil(t.date)===0).forEach(t=>items.push({text:t.title,cat:'KERJA'}));
  // overdue
  skripsiTasks.filter(t=>!isDone(t.id)&&t.date&&daysUntil(t.date)<0&&daysUntil(t.date)>=-2).forEach(t=>items.push({text:t.title+' (overdue)',cat:'SKRIPSI'}));
  kuliahTasks.filter(t=>!t.done&&t.date&&daysUntil(t.date)<0&&daysUntil(t.date)>=-2).forEach(t=>items.push({text:t.title+' (overdue)',cat:'KULIAH'}));
  kerjaTasks.filter(t=>!t.done&&t.date&&daysUntil(t.date)<0&&daysUntil(t.date)>=-2).forEach(t=>items.push({text:t.title+' (overdue)',cat:'KERJA'}));

  if(!items.length){a.innerHTML+='<div class="today-none">Nothing scheduled for today. Enjoy!</div>';return}
  items.forEach(i=>{const d=document.createElement('div');d.className='today-item';d.innerHTML=`<span class="today-cat">${i.cat}</span> ${i.text}`;a.appendChild(d)});
}
function chip(p,t,c){const d=document.createElement('div');d.className='brief-chip '+c;d.textContent=t;p.appendChild(d)}

/* ═══ TABS ═══ */
document.querySelectorAll('.tab').forEach(btn=>{btn.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');$('panel-'+btn.dataset.tab).classList.add('active');
  renderTab(btn.dataset.tab);
})});

/* ═══ TASK BUILDER ═══ */
function buildTask(task,cat,container){
  const done=cat==='skripsi'?isDone(task.id):task.done;
  const nt=notes[task.id]||'';const dl=task.date?daysUntil(task.date):-999;const ds=!done&&dl>=0&&dl<=2;
  const art=document.createElement('article');
  art.className='task'+(done?' done':'')+(task.urgent?' urgent':'')+(ds?' due-soon':'');

  // FIX: no double date
  let dt='';
  if(task.day&&task.date){const fd=fmtDate(task.date);dt=task.day===fd?fd:task.day+' &middot; '+fd}
  else if(task.date)dt=fmtDate(task.date);
  else if(task.day)dt=task.day;
  if(ds&&dl===0)dt+=' <span class="due-badge">TODAY</span>';
  else if(ds)dt+=' <span class="due-badge">'+dl+'d left</span>';

  const canDel=cat!=='skripsi';
  const hasSubtasks=cat==='kerja';
  const subs=task.subtasks||[];

  art.innerHTML=`<label class="check"><input type="checkbox" ${done?'checked':''}><span>&#10003;</span></label>
    <div><div class="task-date">${dt}</div><div class="title">${task.title}</div><button class="note-toggle">${nt?'[ notes ]':'+ note'}</button></div>
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px"><div class="tag">${task.tag||''}</div>${canDel?'<button class="btn-del" title="Hapus">&#10005;</button>':''}</div>
    <div class="note-area${nt?' open':''}"><textarea placeholder="Tulis catatan...">${nt}</textarea></div>
    ${hasSubtasks?'<div class="subtask-area" id="st-'+task.id+'"></div>':''}`;

  // checkbox
  art.querySelector('input[type="checkbox"]').addEventListener('change',e=>{
    if(cat==='skripsi'){state[task.id]=e.target.checked;save(K.s,state)}else{task.done=e.target.checked;save(cat==='kuliah'?K.k:K.w,cat==='kuliah'?kuliahTasks:kerjaTasks)}
    if(e.target.checked){art.classList.add('done','just-done');art.querySelector('.title').style.textDecoration='line-through';const r=e.target.getBoundingClientRect();flowerBurst(r.left+r.width/2,r.top+r.height/2);setTimeout(()=>art.classList.remove('just-done'),600)}
    else{art.classList.remove('done');art.querySelector('.title').style.textDecoration='none'}
    updateStats(cat);updateBrief();updateTodayAgenda();
  });
  // notes
  const nb=art.querySelector('.note-toggle'),na=art.querySelector('.note-area');
  nb.addEventListener('click',()=>{na.classList.toggle('open');if(na.classList.contains('open'))na.querySelector('textarea').focus()});
  art.querySelector('textarea').addEventListener('input',function(){notes[task.id]=this.value;save(K.n,notes);nb.textContent=this.value?'[ notes ]':'+ note'});
  // delete
  if(canDel)art.querySelector('.btn-del')?.addEventListener('click',()=>{if(!confirm('Hapus task ini?'))return;if(cat==='kuliah'){kuliahTasks=kuliahTasks.filter(t=>t.id!==task.id);save(K.k,kuliahTasks)}else{kerjaTasks=kerjaTasks.filter(t=>t.id!==task.id);save(K.w,kerjaTasks)}renderTab(cat);updateBrief();updateTodayAgenda()});
  // subtasks (kerja only)
  if(hasSubtasks){
    const sa=art.querySelector('.subtask-area');
    function renderSubs(){
      sa.innerHTML='';
      (task.subtasks||[]).forEach((st,i)=>{
        const d=document.createElement('div');d.className='subtask'+(st.done?' st-done':'');
        d.innerHTML=`<label><input type="checkbox" ${st.done?'checked':''}><span>${st.text}</span></label><button class="btn-del">&#10005;</button>`;
        d.querySelector('input').addEventListener('change',e=>{task.subtasks[i].done=e.target.checked;save(K.w,kerjaTasks);renderSubs()});
        d.querySelector('.btn-del').addEventListener('click',()=>{task.subtasks.splice(i,1);save(K.w,kerjaTasks);renderSubs()});
        sa.appendChild(d);
      });
      const af=document.createElement('div');af.className='add-subtask';
      af.innerHTML='<input placeholder="Add subtask..." type="text"><button>+</button>';
      const addSub=()=>{const v=af.querySelector('input').value.trim();if(!v)return;task.subtasks=task.subtasks||[];task.subtasks.push({text:v,done:false});save(K.w,kerjaTasks);renderSubs()};
      af.querySelector('button').addEventListener('click',addSub);
      af.querySelector('input').addEventListener('keydown',e=>{if(e.key==='Enter')addSub()});
      sa.appendChild(af);
    }
    renderSubs();
  }
  container.appendChild(art);
}

/* ═══ RENDERS ═══ */
function renderSkripsi(){
  const c=$('s-tasks');c.innerHTML='';const q=($('s-search')||{}).value?.trim().toLowerCase()||'';const f=filters.skripsi;const g={};
  skripsiTasks.forEach(t=>{const d=isDone(t.id);if(f==='done'&&!d||f==='todo'&&d)return;if(q&&!`${t.title} ${t.tag} ${t.section}`.toLowerCase().includes(q))return;(g[t.section]||=[]).push(t)});
  Object.entries(g).forEach(([s,list])=>{const sec=document.createElement('section');sec.className='section';sec.innerHTML=`<div class="section-header"><small>${list[0].phase}</small><h3>${s}</h3></div><div class="timeline"></div>`;list.forEach(t=>buildTask(t,'skripsi',sec.querySelector('.timeline')));c.appendChild(sec)});
  c.closest('.panel').querySelector('.empty-msg').style.display=c.children.length?'none':'block';updateStats('skripsi');
}
function renderCustom(cat){
  const list=cat==='kuliah'?kuliahTasks:kerjaTasks;const c=$(cat==='kuliah'?'k-tasks':'w-tasks');c.innerHTML='';
  const sorted=[...list].sort((a,b)=>{if(a.done!==b.done)return a.done?1:-1;if(!a.date)return 1;if(!b.date)return-1;return new Date(a.date)-new Date(b.date)});
  if(sorted.length){const tl=document.createElement('div');tl.className='timeline';sorted.forEach(t=>buildTask(t,cat,tl));c.appendChild(tl)}
  c.closest('.panel').querySelector('.empty-msg').style.display=sorted.length?'none':'block';updateStats(cat);
}
function renderSchedule(){
  const g=$('scheduleGrid');g.innerHTML='';
  const dayOrder=['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
  [...schedule].sort((a,b)=>dayOrder.indexOf(a.day)-dayOrder.indexOf(b.day)).forEach(c=>{
    const card=document.createElement('div');card.className='sched-card'+(c.day===todayDay?' today':'');
    card.innerHTML=`<div class="sched-day">${c.day}${c.day===todayDay?' — HARI INI':''}</div><div class="sched-name">${c.name}</div><div class="sched-time">${c.time}</div><div class="sched-room">${c.room||''}</div>`;
    g.appendChild(card);
  });
}
function renderTab(cat){if(cat==='skripsi')renderSkripsi();else{if(cat==='kuliah')renderSchedule();renderCustom(cat)}}
function renderAll(){renderSchedule();renderSkripsi();renderCustom('kuliah');renderCustom('kerja');updateBrief();updateTodayAgenda()}

/* ═══ STATS ═══ */
function updateStats(cat){
  let total,done,list;
  if(cat==='skripsi'){total=skripsiTasks.length;done=skripsiTasks.filter(t=>isDone(t.id)).length;list=skripsiTasks.map(t=>({...t,done:isDone(t.id)}))}
  else{list=cat==='kuliah'?kuliahTasks:kerjaTasks;total=list.length;done=list.filter(t=>t.done).length}
  const p=cat==='skripsi'?'s':cat==='kuliah'?'k':'w';
  $(p+'-total').textContent=total;$(p+'-done').textContent=done;
  const bar=document.querySelector('#'+p+'-bar');if(bar)bar.style.width=(total?Math.round(done/total*100):0)+'%';
  const next=list.filter(t=>!t.done&&t.date).map(t=>({...t,dt:new Date(t.date+'T00:00:00')})).filter(t=>t.dt>=today).sort((a,b)=>a.dt-b.dt)[0];
  if(!next){$(p+'-next').textContent=total&&done===total?'DONE':'--';$(p+'-days').textContent='--';return}
  $(p+'-next').textContent=fmtDate(next.date);$(p+'-days').textContent=daysUntil(next.date)+'d';
}

/* ═══ SCHEDULE EDITOR ═══ */
$('editSchedule').addEventListener('click',openSchedEditor);
function openSchedEditor(){
  const f=$('scheduleForm');f.innerHTML='';
  schedule.forEach((c,i)=>{const r=document.createElement('div');r.className='sched-form-row';r.innerHTML=`<select data-i="${i}"><option>Senin</option><option>Selasa</option><option>Rabu</option><option>Kamis</option><option>Jumat</option><option>Sabtu</option><option>Minggu</option></select><input data-f="name" value="${c.name}" placeholder="Matkul"><input data-f="time" value="${c.time}" placeholder="18:30 - 20:00"><input data-f="room" value="${c.room||''}" placeholder="Ruang" style="max-width:100px"><button class="btn-del" data-del="${i}">&#10005;</button>`;r.querySelector('select').value=c.day;f.appendChild(r)});
  $('scheduleModal').classList.add('open');
}
$('addClassBtn').addEventListener('click',()=>{schedule.push({day:'Senin',name:'',time:'',room:''});openSchedEditor()});
$('closeSchedule').addEventListener('click',()=>$('scheduleModal').classList.remove('open'));
$('saveSchedule').addEventListener('click',()=>{
  const ns=[];$('scheduleForm').querySelectorAll('.sched-form-row').forEach(r=>{const name=r.querySelector('[data-f="name"]').value.trim();if(name)ns.push({day:r.querySelector('select').value,name,time:r.querySelector('[data-f="time"]').value.trim(),room:r.querySelector('[data-f="room"]').value.trim()})});
  schedule=ns;save(K.sched,schedule);renderSchedule();updateBrief();updateTodayAgenda();$('scheduleModal').classList.remove('open');
});
$('scheduleForm').addEventListener('click',e=>{if(e.target.dataset.del!==undefined){schedule.splice(+e.target.dataset.del,1);openSchedEditor()}});

/* ═══ ADD TASKS ═══ */
function addTask(cat){
  const p=cat==='kuliah'?'k':'w';const title=$(p+'-title').value.trim();if(!title)return;
  const tag=$(p+'-tag').value.trim().toUpperCase()||'TASK';const date=$(p+'-date').value||'';
  const task={id:cat[0]+Date.now(),title,tag,date,done:false};
  if(cat==='kerja')task.subtasks=[];
  if(cat==='kuliah'){kuliahTasks.push(task);save(K.k,kuliahTasks)}else{kerjaTasks.push(task);save(K.w,kerjaTasks)}
  $(p+'-title').value='';$(p+'-tag').value='';$(p+'-date').value='';renderTab(cat);updateBrief();updateTodayAgenda();
}
$('k-add').addEventListener('click',()=>addTask('kuliah'));$('w-add').addEventListener('click',()=>addTask('kerja'));
$('k-title').addEventListener('keydown',e=>{if(e.key==='Enter')addTask('kuliah')});
$('w-title').addEventListener('keydown',e=>{if(e.key==='Enter')addTask('kerja')});

/* ═══ FILTERS ═══ */
document.querySelectorAll('[data-cat="skripsi"]').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('[data-cat="skripsi"]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');filters.skripsi=btn.dataset.filter;renderSkripsi()})});
$('s-search')?.addEventListener('input',renderSkripsi);

/* ═══ FADE ═══ */
const fadeObs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.15});
document.querySelectorAll('.fade-in').forEach(el=>fadeObs.observe(el));

/* ═══ INIT ═══ */
initJarvis();renderAll();if(syncUrl)cloudLoad().then(renderAll);
