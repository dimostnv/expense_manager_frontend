export default function filterExpenses(expenses, filter) {
  console.log(filter);
  if (filter.year && !filter.month) {
    return expenses.filter((expense) => {
      return expense['created'].substr(0, 4) === filter.year.toString();
    });
  } else if (!filter.year && filter.month) {
    return expenses.filter((expense) => {
      return expense['created'].substr(5, 2) === `0${filter.month}`.slice(-2);
    });
  } else {
    return expenses.filter((expense) => {
      return expense['created'].substr(0, 4) === filter.year.toString()
        &&
        expense['created'].substr(5, 2) === `0${filter.month}`.slice(-2);
    });
  }
}