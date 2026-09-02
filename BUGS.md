# Bugs found

Add one section per issue. Bug 1 is filled in to show the format — fix it, then write what you changed. Copy the blank template for the rest.

Keep this file in the repo and **commit it** with your fixes.

---

## Bug 1

**How to reproduce:** Open the app. The expense list says “Newest first”. The first row is Wine (7 Mar). Board game (15 Mar) is further down.

**What is wrong:** The list is showing oldest expenses first. Newest should be at the top.

**What I changed:** In ExpenseList.jsx, line 63, changed the sort comparator from `dateValue(a.date) - dateValue(b.date)` to `dateValue(b.date) - dateValue(a.date)` to reverse the sort order and display newest expenses first. Also converted the date from string to date in `lib/format.js` inside `dateValue()` function.

---

## Bug 2

**How to reproduce:**

**What is wrong:**

**What I changed:**

---
