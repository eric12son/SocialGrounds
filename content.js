/*
 * ============================================================
 *  SOCIAL GROUNDS — SITE CONTENT
 * ============================================================
 *  This is the ONLY file you need to edit to update the website.
 *
 *  Tips for editing (especially from your phone):
 *   - Only change the text INSIDE the quotes "like this".
 *   - Keep the commas at the end of lines — a missing comma
 *     will stop the site from loading.
 *   - To add an item, copy an existing one (from { to },)
 *     and paste it right below, then change the text.
 *   - Anything marked PLACEHOLDER is made-up — replace it
 *     with your real info.
 * ============================================================
 */

window.SITE = {

  // ---------- BASICS ----------
  name: "Social Grounds",
  tagline: "Coffee, tea & bagels — come as you are, stay a while.",
  phone: "(555) 123-4567",                       // PLACEHOLDER
  email: "hello@socialgrounds.example",          // PLACEHOLDER
  address: "123 Main Street, Your Town, ST 00000", // PLACEHOLDER

  // ---------- ANNOUNCEMENT BAR ----------
  // Shows at the very top of the site. Set show: false to hide it.
  // Change the id whenever you post a NEW announcement so visitors
  // who closed the old one will see the new one.
  announcement: {
    show: true,
    id: "grand-opening-1",
    text: "☕ Now open! Try our seasonal maple latte this week.", // PLACEHOLDER
  },

  // ---------- HOURS ----------
  // Use 24-hour time ("07:00", "18:30"). Use null for closed days.
  hours: {
    monday:    { open: "07:00", close: "17:00" },
    tuesday:   { open: "07:00", close: "17:00" },
    wednesday: { open: "07:00", close: "17:00" },
    thursday:  { open: "07:00", close: "17:00" },
    friday:    { open: "07:00", close: "19:00" },
    saturday:  { open: "08:00", close: "19:00" },
    sunday:    null,
  },

  // ---------- MENU ----------
  // Add "tags" like "vegan", "new", "seasonal", "gluten-free" (optional).
  // Set soldOut: true to show an item as temporarily unavailable.
  menu: [
    {
      category: "Coffee",
      items: [
        { name: "Drip Coffee",   price: "2.75", description: "Our house blend, freshly brewed." },
        { name: "Latte",         price: "4.50", description: "Espresso with steamed milk." },
        { name: "Maple Latte",   price: "5.25", description: "Real maple syrup, a hint of cinnamon.", tags: ["seasonal", "new"] },
        { name: "Cold Brew",     price: "4.25", description: "Steeped 18 hours, smooth and bold." },
      ],
    },
    {
      category: "Tea",
      items: [
        { name: "Chai Latte",     price: "4.75", description: "Spiced black tea with steamed milk." },
        { name: "Matcha Latte",   price: "5.00", description: "Ceremonial-grade matcha.", tags: ["vegan option"] },
        { name: "Loose Leaf Tea", price: "3.25", description: "Ask about today's selection." },
      ],
    },
    {
      category: "Bagels & Food",
      items: [
        { name: "Plain Bagel",        price: "2.50", description: "With butter or cream cheese." },
        { name: "Everything Bagel",   price: "2.75", description: "The classic, toasted to order." },
        { name: "Breakfast Sandwich", price: "7.50", description: "Egg, cheese & choice of bacon or avocado." },
        { name: "Blueberry Muffin",   price: "3.25", description: "Baked fresh every morning.", soldOut: false },
      ],
    },
  ],

  // ---------- NEWS & EVENTS ----------
  // Newest first. Dates as "YYYY-MM-DD".
  news: [
    {
      date: "2026-10-10",
      title: "Open Mic Night",                    // PLACEHOLDER
      text: "Bring your guitar, poems, or just your ears. 6–8pm.",
    },
    {
      date: "2026-10-01",
      title: "Fall Menu Is Here",                 // PLACEHOLDER
      text: "Maple lattes, pumpkin bagels, and more — available all season.",
    },
  ],

  // ---------- ABOUT ----------
  // Each line in quotes is its own paragraph.
  about: [
    "Social Grounds is a neighborhood cafe built around good coffee and good company.", // PLACEHOLDER
    "Whether you're grabbing a quick drip on the way to work or settling in with friends, there's a seat for you here.",
  ],

  // ---------- SOCIAL LINKS ----------
  // Leave a link as "" to hide that icon.
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },
};
