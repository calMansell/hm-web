import { Skill } from './Skill';

export interface Job {
  id: string;
  title: string;
  description: string;
  lon: number;
  lat: number;
  region: string;
  subRegion: string;
  views: number;
  poster: number;
  worker: number | null;
  status: string;
  skillsRequiredForJob: Skill[];
  jobReview: number | null;
  images: string[];
}
