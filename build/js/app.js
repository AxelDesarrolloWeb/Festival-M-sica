function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival");document.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<1?e.classList.add("fixed"):e.classList.remove("fixed")}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=16;t++){const o=document.createElement("PICTURE");o.innerHTML=`\n    <source srcset="build/image/thumb/${t}.avif" type="image/avif">\n    <source srcset="build/image/thumb/${t}.webp" type="image/webp">\n    <img loading="lazy" width="200" height="300" src="build/image/thumb/${t}.jpg" alt="imagen galeria">\n`,o.onclick=function(){mostrarImagen(t)},e.appendChild(o)}}function mostrarImagen(e){const t=document.createElement("PICTURE");t.innerHTML=`\n  <source srcset="build/image/${e}.avif" type="image/avif">\n  <source srcset="build/image/${e}.webp" type="image/webp">\n  <img loading="lazy" width="200" height="300" src="build/image/${e}.jpg" alt="imagen galeria">\n`;const o=document.createElement("DIV");o.classList.add("modal"),o.onclick=cerrarModal;const n=document.createElement("BUTTON");n.textContent="X",n.classList.add("btn-cerrar"),n.onclick=cerrarModal,console.log(n),o.appendChild(t),o.appendChild(n);const c=document.querySelector("body");c.classList.add("overflow-hidden"),c.appendChild(o)}function cerrarModal(){const e=document.querySelector(".modal");e.classList.add("fade-out"),setTimeout((()=>{e?.remove();document.querySelector("body").classList.remove("overflow-hidden")}),500)}function resaltarEnlace(){document.addEventListener("scroll",(function(){console.log(window.scrollY);const e=document.querySelectorAll("section"),t=document.querySelectorAll(".navegacion-principal a");let o="";e.forEach((e=>{const t=e.offsetTop;console.log(`sectionTop de ${e.id}: ${t}`);const n=e.clientHeight;window.scrollY>=t-n/3&&(o=e.id)})),t.forEach((e=>{e.classList.remove("active"),e.getAttribute("href")==="#"+o&&e.classList.add("active")}))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"}),console.log(e.target.getAttribute("href"))}))}))}document.addEventListener("DOMContentLoaded",(function(){navegacionFija(),crearGaleria(),resaltarEnlace(),scrollNav()}));