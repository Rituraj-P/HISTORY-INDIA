const app = document.querySelector("#app");
const page = document.body.dataset.page || "all";
const class6 = window.HISTORY_DATA.class6;
const lessons = window.LESSON_DATA;
const standards = [
  { id: "all", label: "All", href: "index.html" },
  { id: "std-6", label: "Std 6", href: "class-6.html" },
  { id: "std-7", label: "Std 7", href: "class-7.html" },
  { id: "std-8", label: "Std 8", href: "class-8.html" },
  { id: "std-9", label: "Std 9", href: "class-9.html" },
  { id: "std-10", label: "Std 10", href: "class-10.html" },
  { id: "advanced", label: "Advanced", href: "advanced.html" },
];

const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[char]));

function siteHeader() {
  const active = page.startsWith("chapter-") ? "std-6" : page;
  const nav = standards.map((standard) => {
    const selected = active === standard.id;
    return `<a class="grade-link ${selected ? "is-active" : ""}" href="${standard.href}"${selected ? ' aria-current="page"' : ""}>${standard.label}</a>`;
  }).join("");
  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="History India home"><span class="brand-mark" aria-hidden="true">HI</span><span class="brand-name">History <b>India</b></span></a>
        <nav class="grade-nav" aria-label="Choose a school standard">${nav}</nav>
      </div>
    </header>`;
}

function heroArt() {
  return `
    <div class="hero-art" aria-hidden="true">
      <div class="art-caption">A journey through time</div>
      <svg viewBox="0 0 440 410" role="presentation">
        <circle cx="219" cy="204" r="150" fill="none" stroke="#d9a34e" stroke-opacity=".17" />
        <circle cx="219" cy="204" r="122" fill="none" stroke="#d9a34e" stroke-opacity=".3" stroke-dasharray="3 9" />
        <path d="M63 227c53-29 64-20 97-39 36-21 32-51 67-69 26-14 49-3 69 11 18 13 32 17 75 8" fill="none" stroke="#d99e54" stroke-width="9" stroke-linecap="round" opacity=".84" />
        <path d="M68 248c45-20 70-13 105-35 34-22 45-51 77-61 29-10 48 1 69 15 16 11 31 14 51 10" fill="none" stroke="#f4e8d0" stroke-opacity=".18" />
        <g fill="#17232a" stroke="#e2b35e" stroke-width="2"><circle cx="103" cy="209" r="12"/><circle cx="160" cy="186" r="12"/><circle cx="229" cy="119" r="14"/><circle cx="294" cy="143" r="12"/><circle cx="362" cy="136" r="12"/></g>
        <g fill="#f1dfbd"><circle cx="103" cy="209" r="5"/><circle cx="160" cy="186" r="5"/><circle cx="229" cy="119" r="6"/><circle cx="294" cy="143" r="5"/><circle cx="362" cy="136" r="5"/></g>
        <path d="M139 284h153v49H139z" fill="#9b6042" opacity=".93"/><path d="M151 272h129v12H151zM151 296h129v12H151zM151 320h129v12H151z" fill="#d69b61" opacity=".82"/><path d="M166 272v60m39-60v60m39-60v60m38-60v60" stroke="#6e473a" stroke-width="3" opacity=".75"/>
        <path d="M183 262l32-24 34 24" fill="none" stroke="#edca8c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="art-note"><span class="note-dot"></span> People · Places · Ideas</div>
    </div>`;
}

function standardCards() {
  return standards.filter((standard) => standard.id !== "all").map((standard) => {
    const available = standard.id === "std-6";
    return `<a class="standard-card ${available ? "available" : "upcoming"}" href="${standard.href}"><span class="standard-number">${standard.label}</span><span class="standard-subtitle">${available ? "3 detailed chapters ready" : "Syllabus page ready to fill"}</span><span class="standard-arrow" aria-hidden="true">↗</span></a>`;
  }).join("");
}

function chapterCards() {
  return Object.entries(lessons).map(([number, lesson]) => {
    const chapter = Number(number);
    const href = `chapter-${chapter}.html`;
    const descriptions = {
      4: "Learn how historians build evidence, read dates and trace early human life.",
      5: "Follow the names India has carried through rivers, literature and travel.",
      6: "Explore Harappan cities, water systems, farms, crafts and trade.",
    };
    const feature = chapter === 5 ? "Interactive regional map" : chapter === 6 ? "City map + map quiz" : "Date guide + source skills";
    return `
      <a class="chapter-card chapter-${chapter}" href="${href}">
        <div class="chapter-card-top"><span class="chapter-index">Chapter ${lesson.number}</span><span class="chapter-arrow" aria-hidden="true">↗</span></div>
        <h3>${esc(lesson.title)}</h3>
        <p>${descriptions[chapter]}</p>
        <div class="chapter-card-bottom"><span>${esc(lesson.pages)} · ${esc(lesson.readingTime)}</span><span class="chapter-feature">${feature}</span></div>
      </a>`;
  }).join("");
}

function homePage() {
  return `
    <main id="main">
      <section class="hero wrap">
        <div class="hero-copy">
          <p class="eyebrow"><span></span> A student’s guide to the past</p>
          <h1>India’s history,<br /><em>made clear.</em></h1>
          <p class="hero-lede">Detailed chapter notes, maps, timelines and quizzes—organised by school standard, so each learner can study one step at a time.</p>
          <div class="hero-actions"><a class="button button-primary" href="class-6.html">Open Std 6 study guide <span aria-hidden="true">→</span></a><a class="text-link" href="#standards">Choose a standard <span aria-hidden="true">↓</span></a></div>
          <div class="hero-proof"><span class="proof-rule"></span><span>Std 6 chapters 4–6 are ready to study</span></div>
        </div>
        ${heroArt()}
      </section>
      <section class="wrap home-study" id="study-guide">
        <div class="section-heading compact-heading"><div><p class="eyebrow">Start learning</p><h2>Class 6 · Chapters 4–6</h2></div><p>Written notes are the main guide. Maps, revision tools and the timeline support each chapter.</p></div>
        <div class="chapter-grid">${chapterCards()}</div>
        <div class="study-tools-row"><a href="class-6.html" class="tool-link"><span class="tool-icon">✦</span><span><b>All Std 6 chapters</b><small>Open the chapter library</small></span><span class="tool-arrow">→</span></a><a href="timeline.html" class="tool-link"><span class="tool-icon">⌁</span><span><b>Timeline view</b><small>Review the events in order</small></span><span class="tool-arrow">→</span></a></div>
      </section>
      <section class="classroom wrap" id="standards">
        <div class="section-heading compact-heading"><div><p class="eyebrow">Choose your journey</p><h2>Explore by standard</h2></div><p>Every grade and advanced study level has its own page.</p></div>
        <div class="standard-grid">${standardCards()}</div>
      </section>
    </main>`;
}

function class6Page() {
  return `
    <main id="main">
      <section class="grade-hero wrap">
        <div class="grade-hero-copy">
          <p class="eyebrow"><a href="index.html">History India</a><span class="crumb">/</span> Std 6</p>
          <div class="grade-heading-row"><span class="grade-stamp">06</span><div><p class="eyebrow">Your chapter library</p><h1>Std 6 <em>History</em></h1></div></div>
          <p class="hero-lede">Study the chapters in detail with clear notes, key terms, maps and a quiz for each lesson. The timeline is here as a revision tool, not the whole course.</p>
        </div>
        <div class="grade-summary"><span class="summary-label">Available now</span><strong>3 chapters</strong><span>Chapters 4, 5 and 6</span><span class="summary-divider"></span><span class="summary-label">Study tools</span><span>Notes · maps · quizzes · timeline</span></div>
      </section>
      <section class="wrap chapter-library">
        <div class="section-heading"><div><p class="eyebrow">Choose a chapter</p><h2>Read, explore, practise</h2></div><p>Each chapter opens its own detailed study page with sections linked in the table of contents.</p></div>
        <div class="chapter-grid">${chapterCards()}</div>
      </section>
      <section class="wrap revision-band">
        <div><p class="eyebrow">A quick revision path</p><h2>Need the big picture?</h2><p>Review key events in chronological order, then return to the chapter notes for detail.</p></div>
        <a class="button button-primary" href="timeline.html">Open the timeline <span aria-hidden="true">→</span></a>
      </section>
    </main>`;
}

function comingSoonPage() {
  const standard = standards.find((item) => item.id === page) || standards[1];
  const number = standard.label === "Advanced" ? "✦" : standard.label.replace("Std ", "");
  return `
    <main id="main">
      <section class="coming-hero wrap">
        <p class="eyebrow"><a href="index.html">History India</a><span class="crumb">/</span> ${standard.label}</p>
        <span class="grade-stamp">${number}</span><p class="eyebrow">A page for your next chapter</p>
        <h1>${standard.label} <em>History</em></h1>
        <p class="hero-lede">This standard has its own page. Share its history syllabus and I can build the chapter notes, maps and quizzes here.</p>
        <div class="coming-actions"><a class="button button-primary" href="class-6.html">Explore the Std 6 study guide <span aria-hidden="true">→</span></a><a class="text-link" href="index.html">Back to all standards</a></div>
        <div class="coming-line"><span></span><span>Notes · maps · quizzes · chapter by chapter</span><span></span></div>
      </section>
    </main>`;
}

function lessonHero(chapter, lesson) {
  return `
    <section class="lesson-hero wrap">
      <p class="eyebrow"><a href="index.html">History India</a><span class="crumb">/</span><a href="class-6.html">Std 6</a><span class="crumb">/</span> Chapter ${lesson.number}</p>
      <div class="lesson-title-row"><span class="grade-stamp">${lesson.number}</span><div><p class="eyebrow">Class 6 · ${esc(lesson.pages)} in your book</p><h1>${esc(lesson.title)}</h1></div></div>
      <p class="lesson-lede">${esc(lesson.subtitle)}</p>
      <div class="lesson-meta-row"><span>${esc(lesson.readingTime)}</span><span class="meta-dot">·</span><span>Written notes</span><span class="meta-dot">·</span><span>Map and quiz</span></div>
      <nav class="chapter-switcher" aria-label="Class 6 chapters">${Object.entries(lessons).map(([id, item]) => `<a class="${Number(id) === chapter ? "is-current" : ""}" href="chapter-${id}.html"${Number(id) === chapter ? ' aria-current="page"' : ""}>Ch. ${item.number}<span>${esc(item.title)}</span></a>`).join("")}</nav>
    </section>`;
}

function mapBlock(lesson) {
  const map = lesson.map;
  const images = map.images || [];
  const firstImage = images[0];
  const pointButtons = map.points.map((point) => `<button type="button" class="map-marker" style="left:${point.x}%;top:${point.y}%" data-map-site="${esc(point.id)}" aria-label="${esc(point.name)} on map">${esc(point.label)}</button>`).join("");
  const pointList = map.points.map((point) => `<button type="button" class="map-list-item" data-map-site="${esc(point.id)}"><span>${esc(point.label)}</span><b>${esc(point.name)}</b><small>${esc(point.location)}</small></button>`).join("");
  const imageTabs = images.length > 1 ? `<div class="map-image-tabs" role="group" aria-label="Choose a textbook map">${images.map((image, index) => `<button type="button" class="map-image-tab ${index === 0 ? "is-selected" : ""}" data-map-image="${index}" aria-pressed="${index === 0}">${esc(image.label)}</button>`).join("")}</div>` : "";
  const mapQuiz = map.mapQuiz ? `
    <div class="map-quiz" data-map-quiz>
      <div><span class="quiz-kicker">Map challenge</span><p data-map-question>Ready to locate a Harappan city?</p><span class="map-quiz-feedback" data-map-quiz-feedback aria-live="polite"></span></div>
      <div class="map-quiz-controls"><span data-map-quiz-score>0 / ${map.mapQuiz.length} found</span><button class="small-button" type="button" data-map-start>Start</button><button class="small-button" type="button" data-map-next hidden>Next place</button></div>
    </div>` : "";
  return `
    <div class="map-explorer" data-map-explorer>
      <div class="map-explorer-heading"><div><span class="quiz-kicker">Explore the map</span><h3>${esc(map.title)}</h3></div><span class="map-instruction">Select a marker</span></div>
      <p class="map-description">${esc(map.description)}</p>
      <div class="map-layout">
        <div class="map-image-column">${imageTabs}<div class="map-stage" data-map-stage style="aspect-ratio:${firstImage.width}/${firstImage.height}"><img class="map-textbook-image" data-map-image-display src="${esc(firstImage.src)}" alt="${esc(firstImage.alt)}" /><div class="map-markers">${pointButtons}</div></div><p class="map-image-caption" data-map-caption>${esc(firstImage.caption)}</p></div>
        <div class="map-side-panel">
          <div class="map-detail" data-map-info aria-live="polite"><span class="map-detail-label">Selected place</span><h4>${esc(map.points[0].name)}</h4><span class="map-location">${esc(map.points[0].location)}</span><p>${esc(map.points[0].text)}</p></div>
          <div class="map-key"><span class="map-detail-label">Places in this map</span>${pointList}</div>
        </div>
      </div>
      <p class="map-source">${esc(map.source)} · Original textbook map shown; letter markers are study overlays.</p>
      ${mapQuiz}
    </div>`;
}

function bulletList(items) {
  return `<ul class="lesson-bullets">${items.map(([term, detail]) => `<li><b>${esc(term)}</b><span>${esc(detail)}</span></li>`).join("")}</ul>`;
}

function renderSection(section, lesson) {
  if (section.type === "map") return `<section class="lesson-section map-lesson-section" id="${esc(section.id)}"><div class="lesson-section-heading"><span class="section-index">${String(lesson.sections.indexOf(section) + 1).padStart(2, "0")}</span><div><p class="eyebrow">Explore</p><h2>${esc(section.title)}</h2></div></div>${mapBlock(lesson)}</section>`;
  const paragraphs = (section.paragraphs || []).map((paragraph) => `<p>${esc(paragraph)}</p>`).join("");
  const bullets = section.bullets ? bulletList(section.bullets) : "";
  const callout = section.callout ? `<div class="lesson-callout"><span>Try it</span><p>${esc(section.callout)}</p></div>` : "";
  return `
    <section class="lesson-section" id="${esc(section.id)}">
      <div class="lesson-section-heading"><span class="section-index">${String(lesson.sections.indexOf(section) + 1).padStart(2, "0")}</span><div><p class="eyebrow">Chapter notes</p><h2>${esc(section.title)}</h2></div></div>
      <div class="lesson-section-body"><p class="section-intro">${esc(section.intro || "")}</p>${paragraphs}${bullets}${callout}${section.takeaway ? `<div class="remember-box"><span>Remember</span><p>${esc(section.takeaway)}</p></div>` : ""}<p class="section-source">${esc(section.source || "")}</p></div>
    </section>`;
}

function quizBlock(lesson, chapter) {
  return `
    <section class="lesson-section quiz-section" id="quiz">
      <div class="lesson-section-heading"><span class="section-index">✦</span><div><p class="eyebrow">Check your understanding</p><h2>Chapter ${lesson.number} quiz</h2></div></div>
      <div class="quiz-card" data-quiz="${chapter}">
        <div class="quiz-topline"><span data-quiz-count>Question 1 of ${lesson.quiz.length}</span><span data-quiz-score>Score 0 / ${lesson.quiz.length}</span></div>
        <h3 data-quiz-question></h3>
        <div class="quiz-options" data-quiz-options></div>
        <p class="quiz-feedback" data-quiz-feedback aria-live="polite">Choose an answer to see an explanation.</p>
        <div class="quiz-actions"><button class="small-button" type="button" data-quiz-next disabled>Next question</button><button class="quiet-button" type="button" data-quiz-restart>Start again</button></div>
        <div class="quiz-finish" data-quiz-finish hidden></div>
      </div>
    </section>`;
}

function glossaryBlock(lesson) {
  return `
    <section class="lesson-section glossary-section" id="key-terms">
      <div class="lesson-section-heading"><span class="section-index">Aa</span><div><p class="eyebrow">Revision</p><h2>Key terms</h2></div></div>
      <dl class="glossary-grid">${lesson.terms.map(([term, definition]) => `<div><dt>${esc(term)}</dt><dd>${esc(definition)}</dd></div>`).join("")}</dl>
    </section>`;
}

function lessonPage(chapter) {
  const lesson = lessons[chapter];
  const toc = [...lesson.sections.map((section) => `<a href="#${esc(section.id)}">${esc(section.title)}</a>`), `<a href="#key-terms">Key terms</a>`, `<a href="#quiz">Chapter quiz</a>`].join("");
  const goals = lesson.goals.map((goal) => `<li><span aria-hidden="true">✓</span>${esc(goal)}</li>`).join("");
  const sections = lesson.sections.map((section) => renderSection(section, lesson)).join("");
  return `
    <main id="main">${lessonHero(chapter, lesson)}
      <div class="lesson-layout wrap">
        <aside class="lesson-sidebar">
          <div class="lesson-toc"><p class="toc-title">In this chapter</p>${toc}<a href="class-6.html" class="back-chapters">← All Std 6 chapters</a></div>
        </aside>
        <article class="lesson-content" id="notes">
          <section class="learning-goals"><p class="eyebrow">Learning goals</p><ul>${goals}</ul></section>
          ${sections}
          ${glossaryBlock(lesson)}
          ${quizBlock(lesson, chapter)}
          <div class="end-of-lesson"><span>Chapter ${lesson.number} complete</span><p>Review the key terms, take the quiz, or continue to another chapter.</p><div class="end-links"><a href="${chapter < 6 ? `chapter-${chapter + 1}.html` : "timeline.html"}">${chapter < 6 ? `Continue to Chapter ${chapter + 1}` : "Review the timeline"} →</a><a href="class-6.html">Chapter library</a></div></div>
        </article>
      </div>
    </main>`;
}

function timelineSection() {
  return `
    <main id="main">
      <section class="timeline-hero wrap"><p class="eyebrow"><a href="class-6.html">Std 6</a><span class="crumb">/</span> Revision tool</p><h1>Class 6 <em>timeline</em></h1><p class="hero-lede">Use this view to revise the sequence of events. For full explanations, maps and quizzes, open a chapter note page.</p><a href="class-6.html" class="text-link">← Back to chapter notes</a></section>
      <section class="timeline-section wrap" id="timeline">
        <div class="section-heading timeline-heading"><div><p class="eyebrow">Revision view</p><h2>Events in order</h2></div><p>Dates and summaries follow the three supplied Class 6 chapters. Broad dates are marked as approximate or unspecified.</p></div>
        <div class="timeline-tools"><div class="chapter-filters" role="group" aria-label="Filter timeline by chapter"><button type="button" class="filter-chip is-selected" data-chapter="all" aria-pressed="true">All chapters</button>${class6.chapters.map((chapter) => `<button type="button" class="filter-chip" data-chapter="${chapter.id}" aria-pressed="false">Ch. ${chapter.id} · ${esc(chapter.short)}</button>`).join("")}</div><label class="search-box"><span class="search-icon" aria-hidden="true">⌕</span><span class="visually-hidden">Search timeline</span><input type="search" data-search placeholder="Search events" autocomplete="off" /></label></div>
        <p class="result-count" data-result-count aria-live="polite"></p><ol class="timeline-list" data-timeline-list></ol>
        <div class="timeline-footnote"><span class="footnote-star">✳</span><p><strong>Reading the dates:</strong> “c.” means “about.” Where the chapter gives a broad period or no exact date, the event says so. The timeline is not to scale.</p></div>
      </section>
    </main>`;
}

function eventCard(event, index) {
  const chapter = class6.chapters.find((item) => item.id === event.chapter);
  const side = index % 2 === 0 ? "left" : "right";
  return `<li class="timeline-row side-${side}"><div class="timeline-card-slot"><article class="event-card"><div class="event-meta"><time>${esc(event.year)}</time><span class="era-tag">${esc(event.era)}</span></div><p class="event-chapter">Chapter ${event.chapter} · ${esc(chapter.full)}</p><h3>${esc(event.title)}</h3><p class="event-summary">${esc(event.summary)}</p><p class="why-it-matters"><span>Why it matters</span>${esc(event.why)}</p><details class="event-details"><summary>Key details <span aria-hidden="true">+</span></summary><ul>${event.details.map((detail) => `<li>${esc(detail)}</li>`).join("")}</ul></details><div class="event-source"><span class="source-mark" aria-hidden="true">§</span><span>Class 6 History · Ch. ${event.chapter} · pp. ${esc(event.pages)}</span></div></article></div><span class="timeline-node" aria-hidden="true"><span></span></span><div class="timeline-spacer" aria-hidden="true"></div></li>`;
}

function renderEvents() {
  const list = document.querySelector("[data-timeline-list]");
  if (!list) return;
  const selectedChapter = document.querySelector(".filter-chip.is-selected")?.dataset.chapter || "all";
  const query = document.querySelector("[data-search]")?.value.trim().toLocaleLowerCase() || "";
  const events = class6.events.filter((event) => {
    const chapterMatches = selectedChapter === "all" || String(event.chapter) === selectedChapter;
    const haystack = [event.year, event.title, event.era, event.summary, event.why, ...event.details].join(" ").toLocaleLowerCase();
    return chapterMatches && (!query || haystack.includes(query));
  });
  list.innerHTML = events.length ? events.map(eventCard).join("") : `<li class="no-results">No events match that search. Try a different word or chapter.</li>`;
  const count = document.querySelector("[data-result-count]");
  if (count) count.textContent = `${events.length} ${events.length === 1 ? "event" : "events"} shown`;
}

function bindTimeline() {
  document.querySelectorAll(".filter-chip").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((chip) => {
      const selected = chip === button;
      chip.classList.toggle("is-selected", selected);
      chip.setAttribute("aria-pressed", String(selected));
    });
    renderEvents();
  }));
  document.querySelector("[data-search]")?.addEventListener("input", renderEvents);
  renderEvents();
}

function bindMap() {
  const explorer = document.querySelector("[data-map-explorer]");
  if (!explorer) return;
  const chapter = Number(page.replace("chapter-", ""));
  const map = lessons[chapter]?.map;
  if (!map) return;
  let quizIndex = -1;
  let found = 0;
  let answered = false;
  const quizQuestion = explorer.querySelector("[data-map-question]");
  const quizFeedback = explorer.querySelector("[data-map-quiz-feedback]");
  const quizScore = explorer.querySelector("[data-map-quiz-score]");
  const nextButton = explorer.querySelector("[data-map-next]");
  const startButton = explorer.querySelector("[data-map-start]");

  function choosePoint(pointId) {
    const point = map.points.find((item) => item.id === pointId);
    if (!point) return;
    explorer.querySelectorAll("[data-map-site]").forEach((button) => button.classList.toggle("is-current", button.dataset.mapSite === pointId));
    const info = explorer.querySelector("[data-map-info]");
    info.innerHTML = `<span class="map-detail-label">${esc(point.location)}</span><h4>${esc(point.name)}</h4><p>${esc(point.text)}</p>`;
    if (quizIndex >= 0 && map.mapQuiz && !answered) {
      const target = map.mapQuiz[quizIndex];
      if (pointId === target.target) {
        answered = true;
        found += 1;
        quizFeedback.textContent = `Correct — ${point.name} is marked ${point.label} on this map.`;
        quizFeedback.className = "map-quiz-feedback is-correct";
        quizScore.textContent = `${found} / ${map.mapQuiz.length} found`;
        nextButton.hidden = false;
      } else {
        quizFeedback.textContent = `That is ${point.name}. Check the map notes and try another marker.`;
        quizFeedback.className = "map-quiz-feedback is-try-again";
      }
    }
  }

  explorer.addEventListener("click", (event) => {
    const imageTab = event.target.closest("[data-map-image]");
    if (imageTab) {
      const image = map.images[Number(imageTab.dataset.mapImage)];
      if (!image) return;
      explorer.querySelectorAll("[data-map-image]").forEach((tab) => {
        const selected = tab === imageTab;
        tab.classList.toggle("is-selected", selected);
        tab.setAttribute("aria-pressed", String(selected));
      });
      const mapImage = explorer.querySelector("[data-map-image-display]");
      mapImage.src = image.src;
      mapImage.alt = image.alt;
      explorer.querySelector("[data-map-stage]").style.aspectRatio = `${image.width} / ${image.height}`;
      explorer.querySelector("[data-map-caption]").textContent = image.caption;
      return;
    }
    const pointButton = event.target.closest("[data-map-site]");
    if (pointButton) choosePoint(pointButton.dataset.mapSite);
  });
  explorer.addEventListener("keydown", (event) => {
    const pointButton = event.target.closest(".map-marker");
    if (pointButton && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      choosePoint(pointButton.dataset.mapSite);
    }
  });
  map.points[0] && choosePoint(map.points[0].id);

  startButton?.addEventListener("click", () => {
    quizIndex = 0;
    found = 0;
    answered = false;
    startButton.hidden = true;
    quizQuestion.textContent = map.mapQuiz[quizIndex].prompt;
    quizFeedback.textContent = "Select a marker on the map.";
    quizFeedback.className = "map-quiz-feedback";
    quizScore.textContent = `0 / ${map.mapQuiz.length} found`;
  });
  nextButton?.addEventListener("click", () => {
    quizIndex += 1;
    answered = false;
    nextButton.hidden = true;
    if (quizIndex >= map.mapQuiz.length) {
      quizQuestion.textContent = "Map challenge complete.";
      quizFeedback.textContent = `You found ${found} of ${map.mapQuiz.length} places. Select Start to try the map again.`;
      quizFeedback.className = "map-quiz-feedback is-correct";
      startButton.hidden = false;
      startButton.textContent = "Try again";
      quizIndex = -1;
      return;
    }
    quizQuestion.textContent = map.mapQuiz[quizIndex].prompt;
    quizFeedback.textContent = "Select a marker on the map.";
    quizFeedback.className = "map-quiz-feedback";
  });
}

function bindQuiz() {
  const box = document.querySelector("[data-quiz]");
  if (!box) return;
  const chapter = Number(box.dataset.quiz);
  const questions = lessons[chapter].quiz;
  const questionText = box.querySelector("[data-quiz-question]");
  const optionsRoot = box.querySelector("[data-quiz-options]");
  const feedback = box.querySelector("[data-quiz-feedback]");
  const count = box.querySelector("[data-quiz-count]");
  const scoreText = box.querySelector("[data-quiz-score]");
  const nextButton = box.querySelector("[data-quiz-next]");
  const restartButton = box.querySelector("[data-quiz-restart]");
  const finish = box.querySelector("[data-quiz-finish]");
  let index = 0;
  let score = 0;
  let answered = false;

  function drawQuestion() {
    answered = false;
    finish.hidden = true;
    questionText.hidden = false;
    optionsRoot.hidden = false;
    feedback.hidden = false;
    questionText.textContent = questions[index].q;
    count.textContent = `Question ${index + 1} of ${questions.length}`;
    scoreText.textContent = `Score ${score} / ${questions.length}`;
    feedback.textContent = "Choose an answer to see an explanation.";
    feedback.className = "quiz-feedback";
    nextButton.disabled = true;
    nextButton.textContent = index === questions.length - 1 ? "See my score" : "Next question";
    optionsRoot.innerHTML = questions[index].options.map((option, optionIndex) => `<button type="button" class="quiz-option" data-answer="${optionIndex}"><span>${String.fromCharCode(65 + optionIndex)}</span>${esc(option)}</button>`).join("");
  }

  optionsRoot.addEventListener("click", (event) => {
    const button = event.target.closest("[data-answer]");
    if (!button || answered) return;
    answered = true;
    const correct = Number(button.dataset.answer) === questions[index].answer;
    if (correct) score += 1;
    optionsRoot.querySelectorAll("[data-answer]").forEach((option) => {
      option.disabled = true;
      const correctOption = Number(option.dataset.answer) === questions[index].answer;
      option.classList.toggle("is-correct", correctOption);
      option.classList.toggle("is-incorrect", option === button && !correct);
    });
    feedback.textContent = `${correct ? "That’s right." : "Not quite."} ${questions[index].why}`;
    feedback.classList.add(correct ? "is-correct" : "is-incorrect");
    scoreText.textContent = `Score ${score} / ${questions.length}`;
    nextButton.disabled = false;
  });

  nextButton.addEventListener("click", () => {
    if (!answered) return;
    index += 1;
    if (index < questions.length) {
      drawQuestion();
      return;
    }
    questionText.hidden = true;
    optionsRoot.hidden = true;
    feedback.hidden = true;
    nextButton.disabled = true;
    nextButton.hidden = true;
    finish.hidden = false;
    const message = score === questions.length ? "Excellent recall." : score >= Math.ceil(questions.length / 2) ? "Good work. Review any answer you missed." : "Read the notes once more, then try again.";
    finish.innerHTML = `<span class="finish-score">${score}<small> / ${questions.length}</small></span><h4>${message}</h4><p>Your score is saved on this page while it stays open.</p>`;
  });

  restartButton.addEventListener("click", () => {
    index = 0;
    score = 0;
    nextButton.hidden = false;
    drawQuestion();
  });
  drawQuestion();
}

function footer() {
  return `<footer class="site-footer wrap"><a class="footer-brand" href="index.html">History <b>India</b></a><span>Made for curious minds.</span><a href="#main" class="back-top">Back to top ↑</a></footer>`;
}

if (page === "all") app.innerHTML = `${siteHeader()}${homePage()}${footer()}`;
else if (page === "std-6") app.innerHTML = `${siteHeader()}${class6Page()}${footer()}`;
else if (page.startsWith("chapter-")) {
  const chapter = Number(page.replace("chapter-", ""));
  app.innerHTML = `${siteHeader()}${lessons[chapter] ? lessonPage(chapter) : comingSoonPage()}${footer()}`;
  bindMap();
  bindQuiz();
} else if (page === "timeline") {
  app.innerHTML = `${siteHeader()}${timelineSection()}${footer()}`;
  bindTimeline();
} else app.innerHTML = `${siteHeader()}${comingSoonPage()}${footer()}`;
