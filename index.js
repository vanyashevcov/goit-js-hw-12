import{a as h,S as A,i as a}from"./assets/vendor-Be8boZEL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const b=async(o,t,r)=>(await h.get("https://pixabay.com/api/",{params:{key:"47161865-40d939b38272e547a09e56cd8",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r,page:t}})).data,w=o=>o.map(t=>`
    <li class='gallery-item'>
      <a href=${t.largeImageURL}>
        <img alt=${t.tags} src=${t.webformatURL} class='gallery-image'/>
      </a>
      <ul class='list-info'>
        <li class='item-info'>
          <p class='title-info'>Likes</p>
          <p class='count-info'>${t.likes}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Views</p>
          <p class='count-info'>${t.views}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Comments</p>
          <p class='count-info'>${t.comments}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Downloads</p>
          <p class='count-info'>${t.downloads}</p>
        </li>
      </ul>
    </li>
    `).join(""),p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",C=document.querySelector(".form"),d=document.querySelector("ul.gallery"),n=document.querySelector(".loader"),i=document.querySelector(".button-search-more");let v=new A(".gallery a",{captionsData:"alt",captionDelay:250});a.settings({timeout:4e3,position:"topRight"});let c=1,u=15,g="",m=0;const y=async o=>{try{o&&(c=1);const{hits:t,totalHits:r}=await b(g,c,u);if(m=Math.ceil(r/u),o&&(d.innerHTML="",i.style.visibility="hidden"),t.length===0){a.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none";return}const l=w(t);if(d.insertAdjacentHTML(o?"afterbegin":"beforeend",l),c<m?i.style.visibility="visible":(i.style.visibility="hidden",a.info({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"We're sorry, but you've reached the end of search results."})),c+=1,!o){const e=document.querySelectorAll(".gallery-item");if(e.length>=2){const s=e[0].getBoundingClientRect().height+e[1].getBoundingClientRect().height;window.scrollBy({top:s,behavior:"smooth"})}}v.refresh(),n.style.display="none"}catch(t){n.style.display="none",d.innerHTML="",a.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:t.message})}},S=o=>{if(o.preventDefault(),g=o.target.elements.search.value.trim(),!g){a.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"});return}n.style.display="block",i.style.visibility="hidden",y(!0)},B=()=>{n.style.display="block",i.style.visibility="hidden",y(!1)};C.addEventListener("submit",S);i.addEventListener("click",B);
//# sourceMappingURL=index.js.map
