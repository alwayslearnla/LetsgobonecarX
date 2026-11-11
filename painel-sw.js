// Service worker do Painel Let's Go Bonecar.
// Só guarda a "casca" do painel (página, manifesto e ícones) para abrir como app.
// Nunca guarda a API do GitHub, o produtos.json nem as fotos: isso sempre vem da internet.
const CACHE = 'painel-bonecar-v2';
const CASCA = ['./painel.html', './painel.webmanifest', './app/icone-192.png', './app/icone-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CASCA)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(nomes => Promise.all(nomes.filter(n => n !== CACHE).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;           // API do GitHub, fotos, fontes: direto da internet
  if (url.pathname.endsWith('/produtos.json')) return;        // catálogo: nunca do cache
  const ehCasca = req.mode === 'navigate' || CASCA.some(c => url.pathname.endsWith(c.slice(1)));
  if (!ehCasca) return;
  // Internet primeiro (sempre a versão mais nova); sem internet, abre a última versão guardada.
  e.respondWith(
    fetch(req).then(r => {
      if (r.ok) { const copia = r.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
      return r;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./painel.html')))
  );
});
