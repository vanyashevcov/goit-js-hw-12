import{a as h,S as b,i as c}from"./assets/vendor-Be8boZEL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const S=async(o,e,a)=>(await h.get("https://pixabay.com/api/",{params:{key:"47161865-40d939b38272e547a09e56cd8",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:a,page:e}})).data,w=o=>o.map(e=>`
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
    `).join(""),u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",g=document.querySelector(".form"),n=document.querySelector("ul.gallery"),r=document.querySelector(".loader"),l=document.querySelector(".button-search-more"),C=document.querySelector("section");let v=new b(".gallery a",{captionsData:"alt",captionDelay:250});c.settings({timeout:4e3,position:"topRight"});let f=1,y=15,m="",p=0;const A=o=>{o&&(f=1),S(m,f,y).then(({hits:e,totalHits:a})=>{p=Math.ceil(a/y),o&&(n.innerHTML="",l.style.visibility="hidden");const i=w(e);if(i&&(r.style.display="none"),e.length===0&&(c.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),r.style.display="none",n.innerHTML=""),f+=1,o?n.innerHTML=i:n.insertAdjacentHTML("beforeend",i),l.style.visibility="visible",l.style.display="block",f+1>p)return r.style.display="none",l.style.visibility="hidden",p===0?void 0:c.info({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"We're sorry, but you've reached the end of search results."});const t=document.querySelector(".gallery-item"),{y:s}=t.getBoundingClientRect();window.scrollBy({top:-s*2,behavior:"smooth"}),v.refresh(),g.reset()}).catch(e=>{r.style.display="none",n.innerHTML="",c.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:e.message})})},L=o=>{if(o.preventDefault(),n.innerHTML="",r.style.display="block",m=o.target.elements.search.value.trim(),m===""){c.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"}),n.innerHTML="",r.style.display="none";return}A("first")},T=()=>{l.style.display="none",r.style.display="block",C.insertAdjacentElement("beforeend",r),A()};g.addEventListener("submit",L);l.addEventListener("click",T);
//# sourceMappingURL=index.js.map
