
const $ = s => document.querySelector(s);
const timeline = $("#timeline");
const modal = $("#eventModal");
const state = {category:"Todas", search:"", decade:"Todas", filtered:[...EVENTS], currentIndex:0, sound:true, autoplay:null};

const categories = [...new Set(EVENTS.map(e=>e.category))].sort();
categories.forEach(c => {
  const o=document.createElement("option"); o.value=c; o.textContent=c; $("#categorySelect").appendChild(o);
});

const decades = ["Todas", ...new Set(EVENTS.map(e => `${Math.floor(new Date(e.date+"T00:00:00").getFullYear()/10)*10}s`))];
decades.forEach(d=>{
  const b=document.createElement("button"); b.className="decade-btn"+(d==="Todas"?" active":""); b.textContent=d==="Todas"?"Todo":d; b.dataset.decade=d;
  b.onclick=()=>{state.decade=d; document.querySelectorAll(".decade-btn").forEach(x=>x.classList.toggle("active",x===b)); render();};
  $("#decadeNav").appendChild(b);
});

function beep(freq=420,duration=.045){
  if(!state.sound) return;
  try{
    const Ctx=window.AudioContext||window.webkitAudioContext, ctx=new Ctx(), osc=ctx.createOscillator(), gain=ctx.createGain();
    osc.type="sine"; osc.frequency.value=freq; gain.gain.value=.035; osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+duration); osc.stop(ctx.currentTime+duration);
  }catch(e){}
}

function short(text,n=112){return text.length>n?text.slice(0,n).trim()+"…":text}
function yearOf(e){return new Date(e.date+"T00:00:00").getFullYear()}

function render(){
  const q=state.search.trim().toLowerCase();
  state.filtered=EVENTS.filter(e=>{
    const matchesCat=state.category==="Todas"||e.category===state.category;
    const matchesDec=state.decade==="Todas"||`${Math.floor(yearOf(e)/10)*10}s`===state.decade;
    const hay=[e.title,e.desc,e.importance,e.display,e.category].join(" ").toLowerCase();
    return matchesCat&&matchesDec&&(!q||hay.includes(q));
  });

  timeline.innerHTML="";
  let lastYear=null;
  state.filtered.forEach((e,i)=>{
    const year=yearOf(e);
    if(year!==lastYear){
      const marker=document.createElement("div"); marker.className="year-marker"; marker.innerHTML=`<span>${year}</span>`; timeline.appendChild(marker); lastYear=year;
    }
    const card=document.createElement("article");
    card.className="event-card"+(e.future?" future":"");
    card.tabIndex=0; card.dataset.index=i;
    card.innerHTML=`
      <div class="event-icon">${e.icon}</div>
      <div>
        <div class="event-date">${e.display}</div>
        <div class="event-title">${e.title}</div>
        <div class="event-teaser">${short(e.desc)}</div>
      </div>
      <div class="event-category">${e.category}</div>`;
    card.onclick=()=>openEvent(i);
    card.onkeydown=ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();openEvent(i)}};
    timeline.appendChild(card);
  });

  $("#resultCount").textContent=`${state.filtered.length} ${state.filtered.length===1?"acontecimiento":"acontecimientos"}`;
  $("#emptyState").classList.toggle("hidden",state.filtered.length>0);
  requestAnimationFrame(observeCards);
}

let observer;
function observeCards(){
  observer?.disconnect();
  observer=new IntersectionObserver(entries=>{
    entries.forEach(en=>{if(en.isIntersecting) en.target.classList.add("visible")})
  },{threshold:.08});
  document.querySelectorAll(".event-card").forEach(c=>observer.observe(c));
}

function openEvent(i){
  if(!state.filtered.length) return;
  state.currentIndex=(i+state.filtered.length)%state.filtered.length;
  const e=state.filtered[state.currentIndex];
  $("#modalIcon").textContent=e.icon;
  $("#modalDate").textContent=e.display;
  $("#modalCategory").textContent=e.category;
  $("#modalTitle").textContent=e.title;
  $("#modalDesc").textContent=e.desc;
  $("#modalImportance").textContent=e.importance;
  $("#futureWarning").classList.toggle("hidden",!e.future);
  $("#modalPosition").textContent=`${state.currentIndex+1} / ${state.filtered.length}`;
  if(!modal.open) modal.showModal();
  beep(e.future?600:440,.08);
}
$("#closeModal").onclick=()=>modal.close();
$("#prevEvent").onclick=()=>openEvent(state.currentIndex-1);
$("#nextEvent").onclick=()=>openEvent(state.currentIndex+1);
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});
document.addEventListener("keydown",e=>{
  if(!modal.open)return;
  if(e.key==="ArrowRight")openEvent(state.currentIndex+1);
  if(e.key==="ArrowLeft")openEvent(state.currentIndex-1);
});

$("#searchInput").addEventListener("input",e=>{state.search=e.target.value;render()});
$("#categorySelect").addEventListener("change",e=>{state.category=e.target.value;render()});
$("#resetBtn").onclick=()=>{
  state.search="";state.category="Todas";state.decade="Todas";
  $("#searchInput").value="";$("#categorySelect").value="Todas";
  document.querySelectorAll(".decade-btn").forEach((x,i)=>x.classList.toggle("active",i===0)); render(); beep(330);
};

$("#soundBtn").onclick=()=>{
  state.sound=!state.sound; $("#soundBtn").innerHTML=`${state.sound?"🔊":"🔇"} <span>Sonido</span>`;
  showToast(state.sound?"Sonido activado":"Sonido desactivado"); if(state.sound)beep(520,.07);
};

function showToast(msg){
  const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove("show"),1600);
}

$("#playBtn").onclick=async()=>{
  if(state.autoplay){
    clearInterval(state.autoplay);state.autoplay=null;$("#playBtn").innerHTML="▶ <span>Recorrer</span>";showToast("Recorrido detenido");return;
  }
  state.search="";state.category="Todas";state.decade="Todas";$("#searchInput").value="";$("#categorySelect").value="Todas";
  document.querySelectorAll(".decade-btn").forEach((x,i)=>x.classList.toggle("active",i===0));render();
  let i=0; $("#playBtn").innerHTML="■ <span>Detener</span>"; showToast("Recorrido automático iniciado");
  setTimeout(()=>{ if(state.filtered.length){openEvent(0)} },250);
  state.autoplay=setInterval(()=>{
    if(!modal.open) modal.showModal();
    i++;
    if(i>=state.filtered.length){clearInterval(state.autoplay);state.autoplay=null;$("#playBtn").innerHTML="▶ <span>Recorrer</span>";modal.close();showToast("Fin del recorrido");return}
    openEvent(i);
  },4200);
};

window.addEventListener("scroll",()=>{
  const doc=document.documentElement, max=doc.scrollHeight-innerHeight, pct=max>0?scrollY/max*100:0;$("#progressBar").style.width=pct+"%";
  const y=scrollY/(doc.scrollHeight-innerHeight||1);
  $("#heroYear").textContent=Math.round(1950+y*(2028-1950));
},{passive:true});

render();
