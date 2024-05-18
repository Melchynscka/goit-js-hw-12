import{a as p,i as u,S as L}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const b="43798487-cffd9f7a4f04e7c4b426bb2b8",v="https://pixabay.com/api/",S=async(r,t)=>(await p(v,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data,E=r=>r.map(({largeImageURL:t,webformatURL:s,tags:a,likes:e,views:o,comments:n,downloads:g})=>`<li class="gallery-item zoom-on-hover">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${s}"
          alt="${a}"
        />
      </a>
      <ul class="image-info">
        <li class="info-item">Likes: ${e}</li>
        <li class="info-item">Views: ${o}</li>
        <li class="info-item">Comments: ${n}</li>
        <li class="info-item">Downloads: ${g}</li>
      </ul>
    </li>`).join(""),f=document.querySelector(".gallery"),w=document.querySelector(".myForm"),l=document.querySelector(".loader"),i=document.querySelector(".photo-btn");let c=1,P=15,h="";function q(){i.classList.remove("is-hidden-btn")}function m(){i.classList.add("is-hidden-btn")}async function y(r,t){l.classList.remove("is-hidden");try{const s=await S(r,t);s.hits.length===0?(u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),m(),i.removeEventListener("click",d)):(f.innerHTML+=E(s.hits),new L(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),t*P>=s.totalHits?(m(),i.removeEventListener("click",d),u.info({message:"We're sorry, but you've reached the end of search results."})):q())}catch(s){console.log(s)}finally{l.classList.add("is-hidden")}}async function d(){c++,await y(h,c),x()}i.addEventListener("click",d);async function $(r){r.preventDefault();const t=r.target.elements.textInput.value.trim();if(f.innerHTML="",t==="")return m(),i.removeEventListener("click",d),u.error({message:"Sorry, there are no images matching your search query. Please try again!"});h=t,l.classList.remove("is-hidden");try{c=1,await y(t,c)}catch(s){console.log(s)}finally{r.target.reset(),l.classList.add("is-hidden")}}w.addEventListener("submit",$);function x(){const{height:r}=document.querySelector(".gallery-item").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
