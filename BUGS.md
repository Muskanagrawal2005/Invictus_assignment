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

**How to reproduce:** Add a $100 expense split equally between three people.

**What is wrong:** The rounded shares total $99.99, so the group balance does not conserve the bill.

**What I changed:** In money.js, distributed the leftover cents across equal shares so their total always equals the expense amount.

---

## Bug 3

**How to reproduce:** Open the seeded expenses and inspect the Wine percentage split.

**What is wrong:** Independently rounded percentage shares total $20.01 for a $20.00 bill.

**What I changed:** In money.js, assigned the final percentage share the remaining cents and added tolerant percentage validation.

---

## Bug 4

**How to reproduce:** Open the app and delete the newest expense, or filter to one expense and edit its amount.

**What is wrong:** Sorted and filtered list indexes point to different records in the original expense array.

**What I changed:** In ExpenseList.jsx, App.jsx, and store.js, passed expense IDs through delete and update actions and located records by ID.

---

## Bug 5

**How to reproduce:** Begin editing an amount, then change the list through sorting or filtering.

**What is wrong:** Index-based row keys can reuse an editor draft for a different expense.

**What I changed:** In ExpenseList.jsx, keyed rows by expense ID and synchronized the draft when the expense amount changes.

---

## Bug 6

**How to reproduce:** Choose a member in the Paid by filter.

**What is wrong:** The select provides a string ID while expenses store numeric IDs, so matching expenses are hidden.

**What I changed:** In App.jsx, converted the selected filter ID to a number before comparing it.

---

## Bug 7

**How to reproduce:** Reload the app after it has saved the demo data in local storage.

**What is wrong:** Dates display as ISO strings after reload instead of the formatted dates shown initially.

**What I changed:** In store.js, rehydrated parsed local-storage data so expense dates are Date objects on every load.

---

## Bug 8

**How to reproduce:** Add a new member and inspect the Paid so far list before adding another expense.

**What is wrong:** The memoized per-person summary does not react to member changes.

**What I changed:** In SummaryCards.jsx, included members in the per-person summary dependencies.

---

## Bug 9

**How to reproduce:** Add an expense where the payer is not included in the split.

**What is wrong:** The payer is incorrectly charged an extra split share, and group balances no longer cancel out.

**What I changed:** In balances.js, removed the extra payer deduction so only listed participants are debited while the payer receives the full reimbursement.

---
