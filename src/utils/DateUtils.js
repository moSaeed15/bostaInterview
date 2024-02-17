export function dateFormat(originalDateString) {
  if (!originalDateString) return 'None';
  const date = new Date(originalDateString);

  // Array of month names
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Extract day, month, and year from the Date object
  const day = date.getDate();
  const monthIndex = date.getMonth(); // Month index starts from 0
  const year = date.getFullYear();

  // Construct the formatted date string
  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  return formattedDate;
}

export function formatDate(dateString) {
  const date = new Date(dateString);

  // Extract day, month, and year components
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month index starts from 0
  const year = date.getFullYear();

  // Return formatted date string
  return `${month}/${day}/${year}`;
}

export function formatTime(timeString) {
  const date = new Date(timeString);

  // Extract hour and minute components
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');

  // Determine AM or PM
  const amPM = date.getHours() >= 12 ? 'pm' : 'am';

  // Convert hour to 12-hour format
  const formattedHour = date.getHours() % 12 || 12;

  // Return formatted time string
  return `${formattedHour}:${minute} ${amPM}`;
}
