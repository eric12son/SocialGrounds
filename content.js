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
 *   - Lines marked VERIFY came from public listings (Yelp,
 *     Toast, Instagram) — double-check them.
 * ============================================================
 */

window.SITE = {

  // ---------- BASICS ----------
  name: "Social Grounds",
  fullName: "Social Grounds Coffee & Tea on Pike",
  tagline: "Coffee & tea handcrafted steps from Pike Place Market.",
  phone: "(425) 455-5422",                    // VERIFY
  email: "",                                  // Add an email to turn on the contact form
  address: "1914 1st Ave, Seattle, WA 98101",

  // ---------- ANNOUNCEMENT BAR ----------
  // Shows at the very top of the site. Set show: false to hide it.
  // Change the id whenever you post a NEW announcement so visitors
  // who closed the old one will see the new one.
  announcement: {
    show: true,
    id: "welcome-1",
    text: "Try our signature Einspanner — classic, caramel, or matcha.",
  },

  // ---------- HOURS ----------
  // Use 24-hour time ("07:00", "18:30"). Use null for closed days.
  hours: {
    monday:    { open: "07:00", close: "18:00" },
    tuesday:   { open: "07:00", close: "18:00" },
    wednesday: { open: "07:00", close: "18:00" },
    thursday:  { open: "07:00", close: "18:00" },
    friday:    { open: "07:00", close: "19:00" },
    saturday:  { open: "07:00", close: "19:00" },
    sunday:    { open: "07:00", close: "18:00" }, // VERIFY — listings disagree on Sunday
  },

  // ---------- MENU ----------
  // price: "" hides the price. Add "tags" like "signature", "new", "vegan".
  // Set soldOut: true to show an item as temporarily unavailable.
  // NOTE: only a few items/prices could be found online — add the rest.
  menu: [
    {
      category: "Coffee",
      items: [
        { name: "Einspanner Latte",   price: "6.99", description: "Espresso topped with a thick layer of sweet cream.", tags: ["signature"] },
        { name: "Caramel Einspanner", price: "",     description: "Our Einspanner with caramel.", tags: ["signature"] }, // VERIFY price
        { name: "Latte",              price: "5.25+", description: "Espresso with steamed milk. Made with certified organic beans." },
      ],
    },
    {
      category: "Tea",
      items: [
        { name: "Matcha Einspanner", price: "7.99", description: "Matcha topped with sweet cream.", tags: ["signature"] },
        { name: "Tea",               price: "",     description: "Ask about today's selection." }, // VERIFY price
      ],
    },
    {
      category: "Food",
      items: [
        { name: "Bagel with Cream Cheese", price: "4.59", description: "Or with butter." },
        { name: "French Toast",            price: "5.99", description: "" },        // VERIFY description
        { name: "Start Fresh",             price: "6.99", description: "" },        // VERIFY description
        { name: "Pastries",                price: "",     description: "Fresh from Macrina Bakery." },
      ],
    },
  ],

  // ---------- NEWS & EVENTS ----------
  // Newest first. Dates as "YYYY-MM-DD". Example:
  //   { date: "2026-10-15", title: "Fall Menu", text: "Pumpkin lattes are back!" },
  news: [
  ],

  // ---------- ABOUT ----------
  // Each line in quotes is its own paragraph.
  about: [
    "At Social Grounds, we believe coffee is best enjoyed in great company. Our space is crafted to spark conversation and connection.",
    "We're a locally owned cafe on 1st Ave, just steps from Pike Place Market, serving coffee made with certified organic beans, tea, and pastries from Macrina Bakery.",
  ],

  // ---------- SOCIAL LINKS ----------
  // Leave a link as "" to hide it.
  social: {
    instagram: "https://www.instagram.com/socialgrounds_coffee_tea_pike/",
    facebook: "https://www.facebook.com/p/Social-Grounds-Coffee-and-Tea-Pike-Place-61580242275183/",
    tiktok: "",
  },
};
