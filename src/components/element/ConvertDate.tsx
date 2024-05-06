import React from 'react';

const formatDate = (date: Date): string => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - date.getTime();
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(monthsDifference / 12);

  if (yearsDifference > 0) {
    return `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
  } else if (monthsDifference > 0) {
    return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
  } else if (daysDifference > 0) {
    return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
  } else if (hoursDifference > 0) {
    return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
  } else if (minutesDifference > 0) {
    return `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
  } else {
    return `${secondsDifference} second${secondsDifference > 1 ? 's' : ''} ago`;
  }
};

const ConvertDate: React.FC<{ dynamicDate: Date | string }> = ({
  dynamicDate,
}) => {
  let dateObject: Date;

  if (typeof dynamicDate === 'string') {
    dateObject = new Date(dynamicDate);
  } else {
    dateObject = dynamicDate;
  }

  if (!(dateObject instanceof Date && !isNaN(dateObject.getTime()))) {
    return <div>Error: Invalid Date</div>;
  }

  return <div>{<p>{formatDate(dateObject)}</p>}</div>;
};

export default ConvertDate;
