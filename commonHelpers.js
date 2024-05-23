import{i as u,S as p}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const L="43798487-cffd9f7a4f04e7c4b426bb2b8",v="https://pixabay.com/api/",b=async(s="cat",t=1)=>{const r=new URLSearchParams({key:L,q:searchImage,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t}),e=await(await fetch(`${v}/everything?${r}`)).json();if(e.status==="error")throw new Error(e.code);return e},w=s=>s.map(({largeImageURL:t,webformatURL:r,tags:i,likes:e,views:o,comments:a,downloads:g})=>`<li class="gallery-item zoom-on-hover">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${r}"
          alt="${i}"
        />
      </a>
      <ul class="image-info">
        <li class="info-item">Likes: ${e}</li>
        <li class="info-item">Views: ${o}</li>
        <li class="info-item">Comments: ${a}</li>
        <li class="info-item">Downloads: ${g}</li>
      </ul>
    </li>`).join(""),h=document.querySelector(".gallery"),S=document.querySelector(".myForm"),c=document.querySelector(".loader"),n=document.querySelector(".photo-btn");let l=1,E=15,f="";function P(){n.classList.remove("is-hidden-btn")}function m(){n.classList.add("is-hidden-btn")}async function y(s,t){c.classList.remove("is-hidden");try{const r=await b(s,t);r.hits.length===0?(u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),m(),n.removeEventListener("click",d)):(h.innerHTML+=w(r.hits),new p(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),t*E>=r.totalHits?(m(),n.removeEventListener("click",d),u.info({message:"We're sorry, but you've reached the end of search results."})):P())}catch(r){console.log(r)}finally{c.classList.add("is-hidden")}}async function d(){l++,await y(f,l),$()}n.addEventListener("click",d);async function q(s){s.preventDefault();const t=s.target.elements.textInput.value.trim();if(h.innerHTML="",t==="")return m(),n.removeEventListener("click",d),u.error({message:"Sorry, there are no images matching your search query. Please try again!"});f=t,c.classList.remove("is-hidden");try{l=1,await y(t,l)}catch(r){console.log(r)}finally{s.target.reset(),c.classList.add("is-hidden")}}S.addEventListener("submit",q);function $(){const{height:s}=document.querySelector(".gallery-item").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
