/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PanelWithTabs from './PanelWithTabs.component';
import JobItems from './JobItems';
import jobs from '../assets/dummy/jobs.json';
import Review from './Review/Review';

export default function MyReviewsPage() {
  return (
    <PanelWithTabs tabs={[
      { label: 'User Reviews - Given', content: <Review /> },
      { label: 'User Reviews - Received', content: <Review /> },
      { label: 'Job Reviews - Given', content: <Review /> },
      { label: 'Job Reviews - Received', content: <Review /> },
    ]}
    />
  );
}
