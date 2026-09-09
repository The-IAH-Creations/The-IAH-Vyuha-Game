const CACHE='iah-vyuha-v2-0';
const ASSETS=['./','./index.html','./The_IAH_Vyuha.html','./manifest.json','./README.md','./GENIE3_SCENE_BRIEF.md','./COMMERCIAL_READINESS.md','./LICENSE-THIRD-PARTY.md'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./index.html')))));
