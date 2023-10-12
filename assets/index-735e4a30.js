(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function p(s){try{const o=await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${s}&lang=fr&appid=${{}.VITE_KEY_WEATHERAPP}&units=metric`)).json();return console.log({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}),console.log(o),o}catch{console.log("Erreur : impossible de récupérer les données")}}class u{constructor(r,o){let a=new Date((r.dt+o)*1e3);this.day=a.toUTCString().split(",")[0],this.date=a.getUTCDate(),this.hour=a.getUTCHours(),this.humidity=r.main.humidity,this.icon=r.weather[0].icon,this.temp=Math.round(r.main.temp)}display(){return`<div class="wrapForecast__day__wrapHour">
                    <p class="wrapForecast__day__wrapHour__hour">${this.hour}h</p>
                    <p class="wrapForecast__day__wrapHour__humidity">${this.humidity}%</p>
                    <img class="wrapForecast__day__wrapHour__icon" src=" http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="icon of the forecast for the hour">
                    <p class="wrapForecast__day__wrapHour__temp">${this.temp}°</p>
                </div>`}}let h=document.querySelector(".header__input");h.addEventListener("keyup",s=>{if(s.key=="Enter"){document.querySelector(".header__place").textContent=`Meteo in ${s.target.value}`;let r=document.querySelector(".wrapForecast"),o=r.children;for(;o.length>0;)r.removeChild(o[0]);p(s.target.value).then(a=>{s.target.value="";let e=0,t=3;for(let i=1;i<6;i++){let n=document.createElement("div");n.classList.add("wrapForecast__day"),r.appendChild(n);let l=document.createElement("h2");l.classList.add("wrapForecast__day__title"),n.appendChild(l);for(let d=1;d<9;d++){let c=new u(a.list[e++],a.city.timezone);for(l.textContent=`${c.day} ${c.date}`,console.log(c.day);c.hour>=t;)n.innerHTML+='<div class="wrapForecast__day__wrapHour void"></div>',t+=3,d++;n.innerHTML+=c.display(),t+=3}}})}});