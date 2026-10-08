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
 *   - Anything marked PLACEHOLDER is filler — replace it later.
 * ============================================================
 */

window.SITE = {

  // ---------- BASICS ----------
  name: "Social Grounds",
  fullName: "Social Grounds Coffee & Tea on Pike",
  tagline: "Coffee & tea handcrafted steps from Pike Place Market.",
  phone: "(425) 455-5422",
  email: "hello@example.com",                 // PLACEHOLDER — replace with your real email
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
    friday:    { open: "07:00", close: "18:30" },
    saturday:  { open: "07:00", close: "18:30" },
    sunday:    { open: "07:00", close: "17:00" },
  },

  // ---------- MENU ----------
  // price: "" hides the price (e.g. price: "6.50" shows $6.50).
  // Add "tags" like "signature", "new", "vegan".
  // Set soldOut: true to show an item as temporarily unavailable.
  menu: [
    {
      category: "Signatures",
      items: [
        { name: "Einspanner Latte",   price: "", description: "Espresso topped with sweet cream.", tags: ["signature"] },
        { name: "Caramel Einspanner", price: "", description: "Our Einspanner with caramel.", tags: ["signature"] },
        { name: "Matcha Einspanner",  price: "", description: "Matcha topped with sweet cream.", tags: ["signature"] },
        { name: "Mango Matcha",       price: "", description: "Mango and matcha with creamy foam and tapioca pearls.", tags: ["signature"] },
      ],
    },
    {
      category: "Coffee & Tea",
      items: [
        { name: "House Brew",         price: "", description: "Our drip coffee, brewed fresh." },
        { name: "Americano",          price: "", description: "Two shots of our house espresso over hot water." },
        { name: "Latte",              price: "", description: "Espresso with steamed milk." },
        { name: "Espresso Macchiato", price: "", description: "Espresso marked with a little milk foam." },
        { name: "Tea",                price: "", description: "Choose from nine Smith Tea options." },
        { name: "Steamer",            price: "", description: "Steamed milk of your choice." },
      ],
    },
    {
      category: "Breakfast",
      items: [
        { name: "Egg Sandwich",  price: "", description: "" },
        { name: "Protein Start", price: "", description: "An egg sandwich with a 12 oz drip coffee." },
        { name: "Bagels",        price: "", description: "With cream cheese or butter. Also available by the dozen." },
      ],
    },
    {
      category: "Bakery",
      items: [
        { name: "Macrina Pastries", price: "", description: "Fresh from Seattle's Macrina Bakery." },
        { name: "Morning Roll",     price: "", description: "" },
        { name: "Croffle",          price: "", description: "A croissant pressed in a waffle iron." },
        { name: "Raisin Cookie",    price: "", description: "" },
      ],
    },
  ],

  // ---------- NEWS & EVENTS ----------
  // Newest first. Dates as "YYYY-MM-DD". Example:
  //   { date: "2026-10-15", title: "Fall Menu", text: "Pumpkin lattes are back!" },
  // The two entries below are SAMPLES to show the layout — replace or delete them.
  news: [
    {
      date: "2026-10-15",
      title: "Sample Event: Latte Art Night",
      text: "This is placeholder text. Use News & Events for specials, events, and updates.",
    },
    {
      date: "2026-10-01",
      title: "Sample Update: Fall Drinks",
      text: "This is placeholder text. Your newest post shows first.",
    },
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
    facebook: "",
    tiktok: "",
  },
};
