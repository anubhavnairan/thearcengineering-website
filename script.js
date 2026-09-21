const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(menu){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();if('IntersectionObserver'in window){const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.service-card,.gallery figure,.phases>div,.value-cards>div,.principles span').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .55s ease, transform .55s ease';observer.observe(el)})}

// Project image lightbox
const galleryImages=document.querySelectorAll('.gallery img');
if(galleryImages.length){
  const overlay=document.createElement('div');
  overlay.className='lightbox';
  overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-modal','true');
  overlay.setAttribute('aria-label','Project image preview');
  overlay.innerHTML='<button class="lightbox-close" aria-label="Close image preview">&times;</button><img alt="">';
  document.body.appendChild(overlay);
  const preview=overlay.querySelector('img');
  const close=()=>{overlay.classList.remove('open');document.body.classList.remove('lightbox-open')};
  galleryImages.forEach(img=>img.addEventListener('click',()=>{preview.src=img.src;preview.alt=img.alt;overlay.classList.add('open');document.body.classList.add('lightbox-open')}));
  overlay.querySelector('.lightbox-close').addEventListener('click',close);
  overlay.addEventListener('click',e=>{if(e.target===overlay)close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}