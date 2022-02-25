import moment from 'moment';

export default function getMonthDateRange(year: number, month: number) {
  const startDate = moment([year, month - 1]);
  const endDate = moment(startDate).endOf('month');

  console.log(startDate.toDate());
  console.log(endDate.toDate());
  return { start: startDate.toDate(), end: endDate.toDate() };
}
