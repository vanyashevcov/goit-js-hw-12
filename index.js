import{a as A,S as h,i as a}from"./assets/vendor-Be8boZEL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const b=async(s,t,i)=>(await A.get("https://pixabay.com/api/",{params:{key:"47161865-40d939b38272e547a09e56cd8",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:t}})).data,v=s=>s.map(t=>`
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
    `).join(""),p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",w=document.querySelector(".form"),d=document.querySelector("ul.gallery"),n=document.querySelector(".loader"),r=document.querySelector(".button-search-more");let S=new h(".gallery a",{captionsData:"alt",captionDelay:250});a.settings({timeout:4e3,position:"topRight"});let c=1,m=15,u="",y=0;const g=async s=>{try{s&&(c=1);const{hits:t,totalHits:i}=await b(u,c,m);if(y=Math.ceil(i/m),s&&(d.innerHTML="",r.style.visibility="hidden"),t.length===0){a.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none";return}const l=v(t);if(d.insertAdjacentHTML(s?"afterbegin":"beforeend",l),c<y?r.style.visibility="visible":(r.style.visibility="hidden",a.info({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"We're sorry, but you've reached the end of search results."})),c+=1,!s){const e=document.querySelector(".gallery-item:last-child");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}S.refresh(),n.style.display="none"}catch(t){n.style.display="none",d.innerHTML="",a.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:t.message})}},C=s=>{if(s.preventDefault(),u=s.target.elements.search.value.trim(),!u){a.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"});return}n.style.display="block",r.style.visibility="hidden",g(!0)},I=()=>{n.style.display="block",r.style.visibility="hidden",g(!1)};w.addEventListener("submit",C);r.addEventListener("click",I);
//# sourceMappingURL=index.js.map
