import{a as A,S as h,i as a}from"./assets/vendor-Be8boZEL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const b=async(o,e,i)=>(await A.get("https://pixabay.com/api/",{params:{key:"47161865-40d939b38272e547a09e56cd8",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:e}})).data,w=o=>o.map(e=>`
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
    `).join(""),u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",S=document.querySelector(".form"),l=document.querySelector("ul.gallery"),r=document.querySelector(".loader"),p=document.querySelector(".button-search-more"),C=document.querySelector("section");let v=new h(".gallery a",{captionsData:"alt",captionDelay:250});a.settings({timeout:4e3,position:"topRight"});let c=1,m=15,f="",g=0;const I=()=>{const o=document.querySelector(".gallery-item").offsetHeight;window.scrollBy({top:o*2,behavior:"smooth"})},y=async o=>{try{o&&(c=1);const{hits:e,totalHits:i}=await b(f,c,m);if(g=Math.ceil(i/m),o&&(l.innerHTML="",p.style.visibility="hidden"),e.length===0){a.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),r.style.display="none",l.innerHTML="";return}const n=w(e);l.insertAdjacentHTML(o?"afterbegin":"beforeend",n),p.style.visibility=c<g?"visible":"hidden",c+=1,o||I(),v.refresh(),r.style.display="none"}catch(e){r.style.display="none",l.innerHTML="",a.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:e.message})}},P=o=>{o.preventDefault();const e=o.target.elements.search.value.trim();if(e===f&&f!==""){a.warning({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"You are already searching for this query."});return}if(e===""){a.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search."});return}f=e,r.style.display="block",y(!0)},B=()=>{p.style.display="none",r.style.display="block",C.insertAdjacentElement("beforeend",r),y()};S.addEventListener("submit",P);p.addEventListener("click",B);
//# sourceMappingURL=index.js.map
