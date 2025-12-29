import React, { useMemo } from 'react';
import { ActivityCalendar, type Activity } from 'react-activity-calendar';

interface Props {
  data: Activity[];
}

export const GitHubActivity = ({ data }: Props) => {
  const currentYear = new Date().getFullYear();

  // Sort and filter for current year only
  const filteredData = useMemo(() => {
    return data
      .filter(item => {
        const year = parseInt(item.date.split('-')[0], 10);
        return year === currentYear;
      })
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [data, currentYear]);

  const totalContributions = useMemo(() => {
    return filteredData.reduce((acc, curr) => acc + curr.count, 0);
  }, [filteredData]);

  if (filteredData.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-text-primary">
          {totalContributions} contributions in {currentYear}
        </h3>
      </div>
      
      <div className="github-activity-calendar flex justify-center">
        <ActivityCalendar
          data={filteredData}
          showWeekdayLabels
          blockSize={11}
          blockMargin={3}
          fontSize={12}
          theme={{
            light: [
              'var(--calendar-level-0)',
              'var(--calendar-level-1)',
              'var(--calendar-level-2)',
              'var(--calendar-level-3)',
              'var(--calendar-level-4)',
            ],
            dark: [
              'var(--calendar-level-0)',
              'var(--calendar-level-1)',
              'var(--calendar-level-2)',
              'var(--calendar-level-3)',
              'var(--calendar-level-4)',
            ],
          }}
          labels={{
            months: [
              'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            legend: {
              less: 'Less',
              more: 'More',
            },
          }}
        />
      </div>
    </div>
  );
};
