## Summary of Bugs in FairShare Project

Here are all the bugs identified according to the `README.md` specifications:

### **Bug 1: Date Sort Broken After Page Reload**
- **How to reproduce:** Refresh the page after adding expenses
- **What is wrong:** When loading from localStorage, dates remain as strings instead of Date objects. The sort comparator tries to subtract strings, producing NaN
- **Files to fix:** `store.js`, `format.js`

### **Bug 2: Wrong Expense Deleted When Filters Active**
- **How to reproduce:** Apply a filter, then delete an expense. Check "All" - wrong expense was deleted
- **What is wrong:** Delete uses index from filtered list on the full state.expenses array
- **Files to fix:** `App.jsx`, `ExpenseList.jsx`

### **Bug 3: Wrong Expense Updated When Filters Active**
- **How to reproduce:** Apply a filter, then edit an expense amount. Remove filter - wrong expense was edited
- **What is wrong:** Update uses index from filtered list on the full state.expenses array
- **Files to fix:** `App.jsx`, `ExpenseList.jsx`

### **Bug 4: "Paid by" Filter Never Matches**
- **How to reproduce:** Select a person from "Paid by" dropdown - expenses don't filter
- **What is wrong:** HTML select converts member ID (number) to string, but expenses store it as number. String "1" !== Number 1
- **Files to fix:** `App.jsx`, `Filters.jsx`

### **Bug 5: Percent Split Doesn't Sum to Original Amount**
- **How to reproduce:** Split $16 with 33.33%, 33.33%, 33.34% - totals $15.99 instead of $16.00
- **What is wrong:** Each share rounded independently. Violates README requirement: "percentages should still cover the original amount"
- **Files to fix:** `src/lib/money.js` (splitByPercent function)

### **Bug 6: Equal Split Doesn't Sum to Original Amount**
- **How to reproduce:** Split $100 equally between 3 people - each gets $33.33, totaling $99.99
- **What is wrong:** Each share rounded independently. Violates README requirement: "portions together should make up the full bill"
- **Files to fix:** `money.js` (splitEqual function)

### **Bug 7: Balance Doesn't Sum to Zero**
- **How to reproduce:** Create expense paid by one person but split among others only. Balances won't sum to $0
- **What is wrong:** Logic incorrectly deducts extra amount from payer's balance
- **Files to fix:** `balances.js`

---

**Ready to fix these bugs?** Let me know when you want me to implement the solutions!

Made changes.