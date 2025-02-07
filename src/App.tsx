import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import './App.css';
import Personal, { PersonalInfo } from './components/Personal/Personal';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import Project, { ProjectItem } from './components/Project/Project';
import Job, { JobInfo } from './components/Job/Job';
import Award, { AwardInfo } from './components/Award/Award';
import MarkdownContent from './components/MarkdownContent/MarkdownContent';
import Education, { EducationInfo } from './components/Education/Education';

const App = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const personalInfo = t('info.personal', { returnObjects: true }) as PersonalInfo;
  const jobs = (t('info.job.items', { returnObjects: true }) as Array<JobInfo>).sort((a, b) => {
    const timeA = new Date(a.time[0].replace(/\./g, '-'));
    const timeB = new Date(b.time[0].replace(/\./g, '-'));
    return timeB.getTime() - timeA.getTime();
  });

  const projects = (t('info.projects.items', { returnObjects: true }) as Array<ProjectItem>).sort((a, b) => {
    const timeA = new Date(a.time[0].replace(/\./g, '-'));
    const timeB = new Date(b.time[0].replace(/\./g, '-'));
    return timeB.getTime() - timeA.getTime();
  });

  const awards = (t('info.awards.items', { returnObjects: true }) as AwardInfo[])
    .sort((a, b) => {
      const timeA = new Date(a.time.replace(/\./g, '-'));
      const timeB = new Date(b.time.replace(/\./g, '-'));
      return timeB.getTime() - timeA.getTime();
    });

  const educationInfo: EducationInfo[] = t('info.education', { returnObjects: true }) as EducationInfo[];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-[210mm] mx-auto px-4 py-8 print:p-0 print:w-[210mm]">
        <div 
          id="resume"
          ref={componentRef}
          className="bg-white shadow-lg print:shadow-none rounded-lg
                   w-full px-8 py-6 print:px-[2.5em] print:py-[2.5em] print:w-[210mm]
                   box-border overflow-x-hidden"
        >
          <Personal info={personalInfo} />
          <Section title={t('sections.introduction.title')} titlePosition="top">
            <div className="flex flex-col gap-2">
              <MarkdownContent 
                content={t('info.introduction')} 
                className="text-gray-700"
              />
            </div>
          </Section>

          <Section title={t('sections.projects.title')} titlePosition="top">
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </Section>

          <Section title={t('sections.job.title')} titlePosition="top">
            {jobs.map((job, index) => (
              <Job key={index} info={job} />
            ))}
          </Section>

          <Section title={t('sections.awards.title')} titlePosition="top">
            {awards.map((award, index) => (
              <Award key={index} info={award} />
            ))}
          </Section>

          <Section title={t('sections.education.title')} titlePosition="top">
            <Education info={educationInfo} />
          </Section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
