
interface TimeData {
  time: string;
  dayOfWeek: string;
  year: number;
  month: string;
  day: string;
}

export default function getTimeInUTC(timestamp: number): TimeData {
  if (timestamp) {
    const date = new Date(timestamp * 1000);

    const year = date.getUTCFullYear();
    const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
    const day = ('0' + date.getUTCDate()).slice(-2);
    const hours = ('0' + date.getUTCHours()).slice(-2);
    const minutes = ('0' + date.getUTCMinutes()).slice(-2);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long', timeZone: 'UTC' });

    const time = `${hours}:${minutes}`
    return { time, dayOfWeek, year, month, day }
  }
  return {
    time: '00:00',
    dayOfWeek: 'Unknown',
    year: 1970,
    month: '01',
    day: '01'
  };
}


