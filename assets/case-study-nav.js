(() => {
  const cases = [
    { id: "bento", title: "Bento Design System", href: "/bento-foundation.html" },
    { id: "app-consolidation", title: "App Consolidation", href: "/app-consolidation.html" },
    { id: "centralised-assets", title: "Centralised Asset Management", href: "/centralised-assets.html" },
    { id: "bewotec", title: "Bewotec", href: "/bewotec.html" }
  ];

  document.querySelectorAll("[data-case-study-cycle]").forEach((root) => {
    const currentId = root.getAttribute("data-case-study-cycle");
    const index = cases.findIndex((item) => item.id === currentId);
    if (index < 0 || cases.length < 2) return;

    const prev = cases[(index - 1 + cases.length) % cases.length];
    const current = cases[index];
    const next = cases[(index + 1) % cases.length];

    root.className = "case-study-cycle";
    root.setAttribute("aria-label", "Case study navigation");
    root.innerHTML = [
      '<a class="case-study-cycle__side case-study-cycle__prev" href="' + prev.href + '" aria-label="Previous case study: ' + prev.title + '"><span class="case-study-cycle__arrow">←</span><span class="case-study-cycle__word"> Prev</span></a>',
      '<div class="case-study-cycle__current"><span class="case-study-cycle__label">Case study</span><span class="case-study-cycle__title" aria-current="page">' + current.title + '</span></div>',
      '<a class="case-study-cycle__side case-study-cycle__next" href="' + next.href + '" aria-label="Next case study: ' + next.title + '"><span class="case-study-cycle__word">Next </span><span class="case-study-cycle__arrow">→</span></a>'
    ].join("");
  });
})();