import{a as w,S as E,i as g}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const M="43798487-cffd9f7a4f04e7c4b426bb2b8",P="https://pixabay.com/api/",y=async(t="",e=1,a=15)=>{try{return(await w.get(`${P}?key=${M}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${a}`)).data}catch(n){console.error(n)}},h=(t,e=[])=>{const a=e.map(({tags:n,likes:o,views:r,comments:i,downloads:$,webformatURL:q,largeImageURL:v})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${v}" >
            <img class="gallery-image" src="${q}" alt="${n}" />
            <ul class="stats-block">
              <li>
                <span>Likes</span>
                <span>${o}</span>
              </li>
              <li>
                <span>Views</span>
                <span>${r}</span>
              </li>
              <li>
                <span>Comments</span>
                <span>${i}</span>
              </li>
              <li>
                <span>Downloads</span>
                <span>${$}</span>
              </li>
            </ul>
          </a>
        </li>
        `).join("");t.insertAdjacentHTML("beforeend",a)},x=document.querySelector('input[class="search-input"]'),C=document.querySelector('form[class="search"]'),b=document.querySelector('section[class="gallery-section"]'),L='<div id="loader" class="loader"></div>',d=document.querySelector('ul[class="gallery"]'),m=document.getElementById("load-more");let l=[],c="",s=1,p=15,u;const O={captionsData:"alt",captionDelay:250},S=new E("ul.gallery a",O),I={position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15},f=t=>{g.error({...I,backgroundColor:"#FF2E2E",message:t})},T=t=>{g.info({...I,backgroundColor:"lightblue",message:t})},A=async t=>{if(t.preventDefault(),l=[],s=1,d.textContent="",m.classList.replace("load-more","none"),c=x.value.trim(),c===""){f("The request must not be empty!");return}try{b.insertAdjacentHTML("beforebegin",L);const e=await y(c,s,p),a=document.querySelector("#loader");a&&a.remove(),e!==null&&e.hits.length>0?(l=[...l,...e.hits],h(d,l),S.refresh(),u=Math.ceil(e.total/p),s+=1,s>1&&m.classList.replace("none","load-more")):f("Sorry, there are no images matching your search query. Please, try again again!")}catch(e){console.error("Error fetching images:",e)}t.target.reset()},B=t=>{const e=setTimeout(()=>{window.scrollBy({top:t*2,left:0,behavior:"smooth"}),clearTimeout(e)},1e3)},D=async()=>{try{if(s<=u){s===u&&(T("We're sorry, but you've reached the end of search results."),m.classList.replace("load-more","none")),b.insertAdjacentHTML("beforebegin",L);const t=await y(c,s,p),e=document.querySelector("#loader");e&&e.remove(),l=[...l,...t.hits],h(d,l),S.refresh(),s===u?s=1:s+=1;const n=document.querySelector(".gallery-item").getBoundingClientRect();B(n.height)}}catch(t){console.error(t)}};C.addEventListener("submit",A);m.addEventListener("click",D);
//# sourceMappingURL=commonHelpers.js.map
