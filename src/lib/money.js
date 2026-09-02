export function formatMoney(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n)) return "$0.00";
  const sign = n < 0 ? "-" : "";
  return `${sign}$${Math.abs(n).toFixed(2)}`;
}

export function splitEqual(amount, ids) {
  const n = ids.length || 1;
  const totalCents = Math.round(Number(amount) * 100);
  const baseCents = Math.floor(totalCents / n);
  const remainder = totalCents - baseCents * n;
  const shares = {};
  ids.forEach((id, index) => {
    // Distribute leftover cents so equal shares conserve the bill total.
    shares[id] = (baseCents + (index < remainder ? 1 : 0)) / 100;
  });
  return shares;
}

export function percentsSumTo100(percents) {
  const values = Object.values(percents).map(Number);
  return Math.abs(values.reduce((a, b) => a + b, 0) - 100) < 0.001;
}

export function splitByPercent(amount, percents) {
  const entries = Object.entries(percents);
  const totalCents = Math.round(Number(amount) * 100);
  const shares = {};
  let assignedCents = 0;
  entries.forEach(([id, pct], index) => {
    // Give the final percentage participant the rounding remainder.
    const cents =
      index === entries.length - 1
        ? totalCents - assignedCents
        : Math.round((totalCents * Number(pct)) / 100);
    shares[id] = cents / 100;
    assignedCents += cents;
  });
  return shares;
}

export function sharesForExpense(expense) {
  if (expense.splitType === "percent" && expense.percents) {
    return splitByPercent(expense.amount, expense.percents);
  }
  return splitEqual(expense.amount, expense.splitWith);
}
