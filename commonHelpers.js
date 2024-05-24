import{a as w,S as E,i as f}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const M="43798487-cffd9f7a4f04e7c4b426bb2b8",P="https://pixabay.com/api",g=async(t="",r=1,a=15)=>{try{return(await w.get(`${P}?key=${M}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${a}`)).data}catch(o){console.error(o)}},y=(t,r=[])=>{const a=r.map(({tags:o,likes:e,views:s,comments:c,downloads:$,webformatURL:q,largeImageURL:v})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${v}" >
            <img class="gallery-image" src="${q}" alt="${o}" />
            <ul class="stats-block">
              <li>
                <span>Likes</span>
                <span>${e}</span>
              </li>
              <li>
                <span>Views</span>
                <span>${s}</span>
              </li>
              <li>
                <span>Comments</span>
                <span>${c}</span>
              </li>
              <li>
                <span>Downloads</span>
                <span>${$}</span>
              </li>
            </ul>
          </a>
        </li>
        `).join("");t.insertAdjacentHTML("beforeend",a)},x=document.querySelector('input[class="search-input"]'),C=document.querySelector('form[class="search"]'),h=document.querySelector('section[class="gallery-section"]'),b='<div id="loader" class="loader"></div>',m=document.querySelector('ul[class="gallery"]'),u=document.getElementById("load-more");let l=[],L="",n=1,d=15,i;const O={captionsData:"alt",captionDelay:250},S=new E("ul.gallery a",O),I={position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15},p=t=>{f.error({...I,backgroundColor:"#FF2E2E",message:t})},T=t=>{f.info({...I,backgroundColor:"lightblue",message:t})},A=t=>{const r=setTimeout(()=>{window.scrollBy({top:t*2,left:0,behavior:"smooth"}),clearTimeout(r)},1e3)},B=async()=>{try{if(n<=i){n===i&&(T("We're sorry, but you've reached the end of search results."),u.classList.replace("load-more","none")),h.insertAdjacentHTML("beforebegin",b);const t=await g(L,n,d),r=document.querySelector("#loader");r&&r.remove(),l=[...l,...t.hits],y(m,l),S.refresh(),n===i?n=1:n+=1;const o=document.querySelector(".gallery-item").getBoundingClientRect();A(o.height)}}catch(t){console.error(t)}},D=async t=>{t.preventDefault(),l=[],n=1,m.textContent="",u.classList.replace("load-more","none");const r=t.target,a=x.value.trim();if(L=a,a===""){p("The request must not be empty!");return}try{h.insertAdjacentHTML("beforebegin",b);const o=await g(a,n,d),e=document.querySelector("#loader");e&&e.remove(),o!==null&&o.hits.length>0?(l=[...l,...o.hits],y(m,l),S.refresh(),i=Math.ceil(o.total/d),n+=1,n>1&&u.classList.replace("none","load-more")):p("Sorry, there are no images matching your search query. Please, try again again!")}catch(o){console.error("Error fetching images:",o)}r.reset()};C.addEventListener("submit",D);u.addEventListener("click",B);
//# sourceMappingURL=commonHelpers.js.map
