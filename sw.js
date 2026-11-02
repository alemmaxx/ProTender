// Pekerja servis ProTender: "Pasang app", guna luar talian & notifikasi.
const C='protender-v7';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./sounds/pt_chime.wav','./sounds/pt_bell.wav','./sounds/pt_alarm.wav'])).catch(()=>{}));});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  const cacheable=u.origin===location.origin||/fonts\.(googleapis|gstatic)\.com|gstatic\.com\/firebasejs/.test(u.href);
  if(!cacheable)return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok&&cacheable){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));}return r;})
    .catch(()=>caches.match(e.request,{ignoreSearch:true})));});
self.addEventListener('notificationclick',e=>{e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{for(const w of ws){if('focus' in w)return w.focus();}return self.clients.openWindow('./');}));});
