import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  titlePosition?: 'top' | 'left';
  children: ReactNode;
  className?: string;
}

const Section = ({ 
  title, 
  titlePosition = 'top',
  children,
  className = ''
}: SectionProps) => {
  const titleClasses = titlePosition === 'top' 
    ? 'mb-3 pb-1 border-b border-gray-800'
    : '';

  const sectionClasses = titlePosition === 'left'
    ? 'grid gap-4 lg:grid-cols-[minmax(200px,max-content)_1fr]'
    : '';

  return (
    <section className={`mb-3 ${sectionClasses} ${className}`}>
      <div className={`text-xl font-semibold text-gray-800 ${titleClasses}`}>
        <h2>{title}</h2>
      </div>
      <div className="flex flex-col">
        {children}
      </div>
    </section>
  );
};

export default Section;
