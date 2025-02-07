import { useTranslation } from 'react-i18next';
import TimeRangeIcon from '@/assets/time-range.svg?react';
import MonoText from '../MonoText/MonoText';
import MarkdownContent from '../MarkdownContent/MarkdownContent';

export interface ProjectUrl {
  caption: string;
  url: string;
}

export interface ProjectItem {
  name: string;
  time: [string, string];
  url: ProjectUrl[];
  work: string;
  content: string;
  technology: string;
}

export interface ProjectProps {
  project: ProjectItem;
}

const Project = ({ project }: ProjectProps) => {
  const { t } = useTranslation();

  return (
    <div className="mb-4 print:break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <span>
            {t('sections.projects.role') && `${t('sections.projects.role')}: `}
            {project.work}
          </span>
          <span className="flex items-center">
            <TimeRangeIcon className="mr-1 h-4 w-4 text-gray-600" />
            <MonoText>{project.time[0]}</MonoText>
            {" - "}
            <MonoText>{project.time[1]}</MonoText>
          </span>
        </div>
      </div>

      {project.url?.length > 0 && (
        <div className="mt-1 space-y-1">
          {project.url.map((url, index) => (
            <p key={index}>
              <a 
                href={url.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {url.caption}
              </a>
            </p>
          ))}
        </div>
      )}

      <div className="mt-2 space-y-2 print:break-inside-avoid">
        <p className="text-gray-700 print:break-inside-avoid">
          <MarkdownContent content={t('sections.projects.description') + project.content} />
        </p>
        <p className="text-gray-700 print:break-inside-avoid">
          {t('sections.projects.technology')}: 
          <span className="ml-1">
            {project.technology.split(',').map((tech, index) => (
              <span 
                key={index} 
                className="mr-2 inline-block rounded bg-gray-100 px-2 py-0.5 text-sm text-gray-700"
              >
                {tech.trim()}
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Project;
