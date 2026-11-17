(function(){
  var corner='<svg viewBox="0 0 52 52" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="1" y="1" width="50" height="50" fill="#fcf7ea" stroke="none"/><path d="M4 48V16C4 9 9 4 16 4h32"/><path d="M11 48V22c0-7 4-11 11-11h26" stroke-width="1"/><path d="M17 17c9 0 14 5 14 14-7 0-14-5-14-14z" fill="currentColor" stroke="none"/><path d="M17 17c-4-5-2-10 3-11M17 17c-5-4-10-2-11 3" /><circle cx="40" cy="12" r="2.6" fill="currentColor" stroke="none"/><circle cx="12" cy="40" r="2.6" fill="currentColor" stroke="none"/></svg>';
  document.querySelectorAll(".card").forEach(function(c){["a","b","c","d"].forEach(function(p){var s=document.createElement("span");s.className="cr "+p;s.innerHTML=corner;c.appendChild(s)})});
  var kh="០១២៣៤៥៦៧៨៩";
  function k(n,p){var s=String(n);while(s.length<(p||1))s="0"+s;return s.replace(/\d/g,function(c){return kh[c]})}
  var target=new Date("2026-12-11T17:30:00+07:00").getTime();
  function tick(){var t=Math.max(0,target-Date.now());
    d.textContent=k(Math.floor(t/864e5));h.textContent=k(Math.floor(t%864e5/36e5),2);
    m.textContent=k(Math.floor(t%36e5/6e4),2);s.textContent=k(Math.floor(t%6e4/1e3),2)}
  var d=document.getElementById("d"),h=document.getElementById("h"),m=document.getElementById("m"),s=document.getElementById("s");
  tick();setInterval(tick,1000);
  var url=location.href.split("#")[0];
  try{new QRCode(document.getElementById("qr"),{text:"00020101021130510016abaakhppxxx@abaa01151261028123750650208ABA Bank5204597753038405802KH5915PUTH CHANTHEARA6010PHNOM PENH626368590010PAYWAY@ABA01072631233020902248688604073558120050110801399130002026803mmp6304796B",width:176,height:176,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M})}catch(e){}
  var started=false;
  function startHearts(){
    if(started)return;started=true;
    var box=document.createElement("div");box.id="hearts";document.body.appendChild(box);
    var cols=["#e8a0a8","#d98a96","#f0c4a0","#c9985a","#f7d6d9","#e57f93"];
    function r(a,b){return a+Math.random()*(b-a)}
    function drop(){
      if(document.hidden||box.children.length>26)return;
      var e=document.createElement("span");e.className="hrt";e.textContent="\u2665";
      e.style.setProperty("--x",r(2,96)+"%");e.style.setProperty("--s",r(11,24)+"px");
      e.style.setProperty("--c",cols[Math.floor(Math.random()*cols.length)]);
      e.style.setProperty("--d",r(7,12)+"s");e.style.setProperty("--sw",r(-40,40)+"px");e.style.setProperty("--r",r(-35,35)+"deg");
      e.addEventListener("animationend",function(){e.remove()});
      box.appendChild(e);
    }
    drop();setInterval(drop,650);
  }
  var gate=document.getElementById("gate");
  document.getElementById("openBtn").addEventListener("click",function(){
    gate.classList.add("open");
    setTimeout(function(){gate.classList.add("gone");startHearts();document.body.classList.remove("lock");window.scrollTo(0,0)},1500)});
  var els=document.querySelectorAll(".fade");
  if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}
  else els.forEach(function(e){e.classList.add("in")});
})();
