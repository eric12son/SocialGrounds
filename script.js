// Renders the site from window.SITE (defined in content.js).
// You normally won't need to edit this file — change content.js instead.

(function () {
  const site = window.SITE;
  if (!site) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<p style="padding:16px;background:#a33a2c;color:#fff">Could not load content.js — check it for a missing comma or quote.</p>'
    );
    return;
  }

  const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  const $ = (sel) => document.querySelector(sel);
  const escapeHtml = (str) =>
    String(str ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- Basics ----------
  document.querySelectorAll("[data-name]").forEach((el) => (el.textContent = site.name));
  $("#tagline").textContent = site.tagline;
  $("#year").textContent = new Date().getFullYear();

  // ---------- Announcement ----------
  const ann = site.announcement;
  const dismissKey = "sg-dismissed-announcement";
  let dismissed = null;
  try { dismissed = localStorage.getItem(dismissKey); } catch (e) {}
  if (ann && ann.show && ann.text && dismissed !== ann.id) {
    $("#announcement-text").textContent = ann.text;
    $("#announcement").hidden = false;
    $("#announcement-close").addEventListener("click", () => {
      $("#announcement").hidden = true;
      try { localStorage.setItem(dismissKey, ann.id); } catch (e) {}
    });
  }

  // ---------- Mobile nav ----------
  const toggle = $(".menu-toggle");
  const nav = $("#nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // ---------- Hours ----------
  const toMinutes = (hhmm) => {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  };
  const formatTime = (hhmm) => {
    let [h, m] = hhmm.split(":").map(Number);
    const suffix = h >= 12 ? "pm" : "am";
    h = h % 12 || 12;
    return m ? `${h}:${String(m).padStart(2, "0")}${suffix}` : `${h}${suffix}`;
  };
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const now = new Date();
  const todayName = DAYS[now.getDay()];
  const order = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  $("#hours-table").innerHTML = order
    .map((day) => {
      const h = site.hours[day];
      const text = h ? `${formatTime(h.open)} – ${formatTime(h.close)}` : "Closed";
      return `<tr class="${day === todayName ? "today" : ""}"><td>${cap(day)}</td><td>${text}</td></tr>`;
    })
    .join("");

  // Open-now indicator (uses the visitor's local clock)
  const status = $("#open-status");
  const today = site.hours[todayName];
  const mins = now.getHours() * 60 + now.getMinutes();
  if (today && mins >= toMinutes(today.open) && mins < toMinutes(today.close)) {
    status.classList.add("is-open");
    status.textContent = `Open now · until ${formatTime(today.close)}`;
  } else {
    // Find the next opening time
    let next = "";
    for (let i = 0; i < 7; i++) {
      const dayName = DAYS[(now.getDay() + i) % 7];
      const h = site.hours[dayName];
      if (!h) continue;
      if (i === 0 && mins >= toMinutes(h.open)) continue;
      next = i === 0 ? `today at ${formatTime(h.open)}`
           : i === 1 ? `tomorrow at ${formatTime(h.open)}`
           : `${cap(dayName)} at ${formatTime(h.open)}`;
      break;
    }
    status.textContent = next ? `Closed · opens ${next}` : "Closed";
  }

  // ---------- Location & contact ----------
  $("#address").textContent = site.address;
  $("#map-link").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(site.address);
  const phoneLink = $("#phone-link");
  phoneLink.textContent = site.phone;
  phoneLink.href = "tel:" + site.phone.replace(/[^\d+]/g, "");

  // Contact form only works once an email is set in content.js
  if (!site.email) {
    $("#contact-form").hidden = true;
    const ig = site.social && site.social.instagram;
    $("#contact-alt").innerHTML =
      `Call us at <a href="tel:${site.phone.replace(/[^\d+]/g, "")}">${escapeHtml(site.phone)}</a>` +
      (ig ? ` or message us on <a href="${escapeHtml(ig)}" target="_blank" rel="noopener">Instagram</a>.` : ".");
  }
  $("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Placeholder email: show a notice instead of opening a mail app
    if (/example\.(com|org|net)$|\.example$/.test(site.email)) {
      $(".form-note").textContent = "The contact form isn't connected yet. Please call or message us on Instagram.";
      return;
    }
    const data = new FormData(e.target);
    const subject = `Message from ${data.get("name")} via website`;
    window.location.href =
      `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(data.get("message"))}`;
  });

  // ---------- About ----------
  $("#about-text").innerHTML = (site.about || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("");

  // ---------- News ----------
  const news = [...(site.news || [])].sort((a, b) => b.date.localeCompare(a.date));
  $("#news-list").innerHTML = news.length
    ? news
        .map((n) => {
          const d = new Date(n.date + "T12:00:00");
          const label = d.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
          return `<article class="news-card"><time datetime="${escapeHtml(n.date)}">${label}</time>
            <h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.text)}</p></article>`;
        })
        .join("")
    : `<p class="empty">No news right now — check back soon!</p>`;

  // ---------- Menu ----------
  const tabs = $("#menu-tabs");
  const list = $("#menu-items");
  const search = $("#menu-search");
  let activeCategory = "All";
  const categories = ["All", ...site.menu.map((c) => c.category)];

  tabs.innerHTML = categories
    .map((c) => `<button role="tab" aria-selected="${c === "All"}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`)
    .join("");

  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    tabs.querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
    renderMenu();
  });
  search.addEventListener("input", renderMenu);

  function renderMenu() {
    const q = search.value.trim().toLowerCase();
    const html = site.menu
      .filter((c) => activeCategory === "All" || c.category === activeCategory)
      .map((c) => {
        const items = c.items.filter(
          (i) => !q || `${i.name} ${i.description || ""} ${(i.tags || []).join(" ")}`.toLowerCase().includes(q)
        );
        if (!items.length) return "";
        const title = activeCategory === "All" ? `<h3 class="menu-category-title">${escapeHtml(c.category)}</h3>` : "";
        return title + items
          .map((i) => `
            <div class="menu-item${i.soldOut ? " sold-out" : ""}">
              <div>
                <h4>${escapeHtml(i.name)}</h4>
                ${i.description ? `<p>${escapeHtml(i.description)}</p>` : ""}
                ${(i.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
              </div>
              ${i.price ? `<span class="price">$${escapeHtml(i.price)}</span>` : ""}
            </div>`)
          .join("");
      })
      .join("");
    list.innerHTML = html || `<p class="empty">No items match “${escapeHtml(q)}”.</p>`;
  }
  renderMenu();

  // ---------- Social ----------
  const social = site.social || {};
  $("#social-links").innerHTML = Object.entries(social)
    .filter(([, url]) => url)
    .map(([name, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${cap(name)}</a>`)
    .join("");
})();
