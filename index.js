import{a as A,S as h,i as r}from"./assets/vendor-Be8boZEL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const b=async(s,e,l)=>(await A.get("https://pixabay.com/api/",{params:{key:"47161865-40d939b38272e547a09e56cd8",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:l,page:e}})).data,w=s=>s.map(e=>`
    <li class='gallery-item'>
      <a href=${e.largeImageURL}>
        <img alt=${e.tags} src=${e.webformatURL} class='gallery-image'/>
      </a>
      <ul class='list-info'>
        <li class='item-info'>
          <p class='title-info'>Likes</p>
          <p class='count-info'>${e.likes}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Views</p>
          <p class='count-info'>${e.views}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Comments</p>
          <p class='count-info'>${e.comments}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Downloads</p>
          <p class='count-info'>${e.downloads}</p>
        </li>
      </ul>
    </li>
    `).join(""),u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",S=document.querySelector(".form"),c=document.querySelector("ul.gallery"),i=document.querySelector(".loader"),n=document.querySelector(".button-search-more"),C=document.querySelector("section");let v=new h(".gallery a",{captionsData:"alt",captionDelay:250});r.settings({timeout:4e3,position:"topRight"});let p=1,m=15,f="",g=0;const I=()=>{const s=document.querySelector(".gallery-item").offsetHeight;window.scrollBy({top:s*2,behavior:"smooth"})},y=async s=>{try{s&&(p=1);const{hits:e,totalHits:l}=await b(f,p,m);if(g=Math.ceil(l/m),s&&(c.innerHTML="",n.style.visibility="hidden"),e.length===0){r.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),i.style.display="none",c.innerHTML="";return}const a=w(e);c.insertAdjacentHTML(s?"afterbegin":"beforeend",a),p<g?n.style.visibility="visible":(n.style.visibility="hidden",r.info({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"We're sorry, but you've reached the end of search results."})),s||I(),v.refresh(),i.style.display="none"}catch(e){i.style.display="none",c.innerHTML="",r.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:e.message})}},P=s=>{s.preventDefault();const e=s.target.elements.search.value.trim();if(e===f&&f!==""){r.warning({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"You are already searching for this query."});return}if(e===""){r.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search."});return}f=e,i.style.display="block",y(!0)},B=()=>{n.style.display="none",i.style.display="block",C.insertAdjacentElement("beforeend",i),y()};S.addEventListener("submit",P);n.addEventListener("click",B);
//# sourceMappingURL=index.js.map
