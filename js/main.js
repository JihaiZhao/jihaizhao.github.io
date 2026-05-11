(() => {
  const sections = ['about', 'experience', 'projects']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const links = new Map();
  document.querySelectorAll('.nav-link[data-target]').forEach(a => {
    links.set(a.dataset.target, a);
  });

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  let activeId = null;
  const setActive = id => {
    if (id === activeId) return;
    activeId = id;
    links.forEach(a => a.classList.remove('is-active'));
    const link = links.get(id);
    if (link) link.classList.add('is-active');
  };

  const visible = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
      else visible.delete(e.target.id);
    });
    if (visible.size === 0) return;
    let topId = null, topRatio = -1;
    for (const [id, ratio] of visible) {
      if (ratio > topRatio) { topRatio = ratio; topId = id; }
    }
    if (topId) setActive(topId);
  }, {
    rootMargin: '-30% 0px -55% 0px',
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  sections.forEach(s => observer.observe(s));
})();
