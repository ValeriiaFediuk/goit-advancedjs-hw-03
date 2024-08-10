import{i as a,S as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();async function f(s){try{const e=await fetch(`https://pixabay.com/api/?${s}`);if(!e.ok)throw new Error(e.status);return await e.json()}catch(e){throw console.log(e),a.error({title:"Error",message:`Failed to fetch data: ${e.message}`}),e}}const m=document.querySelector(".images-list");function p(s){const e=s.hits.map(o=>`
        <li class="images-item">
            <a href="${o.largeImageURL}">
                <img src="${o.webformatURL}" alt="${o.tags}" width="360" height="202">
            </a>

            <div class="images-titles">
                <p><b>Likes</b> ${o.likes}</p>
                <p><b>Views</b> ${o.views}</p>
                <p><b>Comments</b> ${o.comments}</p>
                <p><b>Downloads</b> ${o.downloads}</p>
            </div>
        </li>
        `).join("");m.insertAdjacentHTML("beforeend",e)}const h=document.querySelector(".search-form"),d=document.querySelector(".loader-container"),g=document.querySelector(".images-list"),y=new u(".images-list a",{captionsData:"alt",captionDelay:250});let n={key:"45237174-16156409efac0dde2d7dc0545",q:null,image_type:"photo",orientation:"horizontal",safesearch:!0};const b={message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"center",progressBar:!1},w={message:"Please fill the search field",color:"yellow",position:"center",progressBar:!1};function L(){d.style.display="flex"}function c(){d.style.display="none"}h.addEventListener("submit",s=>{if(s.preventDefault(),n.q=s.target.elements.search_key.value.trim(),s.target.elements.search_key.value="",g.innerHTML="",!n.q){a.warning(w);return}L(),f(new URLSearchParams(n)).then(e=>{if(e.total===0){a.error(b),c();return}p(e),c(),y.refresh()}).catch(e=>{console.log(e),c(),a.error({message:"An error occurred. Please try again later.",color:"red",position:"center",progressBar:!1})})});
//# sourceMappingURL=commonHelpers.js.map
