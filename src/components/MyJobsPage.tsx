/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PanelWithTabs from './PanelWithTabs.component';
import JobItems from './JobItems';
import jobs from '../assets/dummy/jobs.json';

export default function MyJobsPage() {
  return (
    <PanelWithTabs tabs={[
      { label: 'Created', content: <JobItems jobs={jobs} /> },
      { label: 'Favourited', content: <JobItems jobs={jobs} /> },
      { label: 'Engaged', content: <JobItems jobs={jobs} /> },
    ]}
    />
  );
}
