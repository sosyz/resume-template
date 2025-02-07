import { useTranslation } from 'react-i18next';
import LocationIcon from '@/assets/location.svg?react';
import TimeRangeIcon from '@/assets/time-range.svg?react';
import MonoText from '../MonoText/MonoText';
import Tag from '../Tag/Tag';

export interface JobInfo {
    company: string;
    position: string;
    location: string;
    time: [string, string];
    content: string;
    isIntern?: boolean;
}

interface JobProps {
    info: JobInfo;
}

const Job = ({ info }: JobProps) => {
    const { t } = useTranslation();

    const renderJobItem = (icon: React.ReactNode, content: React.ReactNode) => (
        <div className="flex items-center gap-1">
            {icon}
            <span className="text-gray-600">{content}</span>
        </div>
    );

    return (
        <div className="mb-4 print:break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {info.company}
                        {info.isIntern && (
                            <Tag className="ml-2">
                                {t('sections.job.intern')}
                            </Tag>
                        )}
                    </h3>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span>{info.position}</span>
                    {info.location && renderJobItem(
                        <LocationIcon className="h-4 w-4 text-gray-600" />,
                        info.location
                    )}
                    <span className="flex items-center">
                        <TimeRangeIcon className="mr-1 h-4 w-4 text-gray-600" />
                        <MonoText>{info.time[0]}</MonoText>
                        {" - "}
                        <MonoText>{info.time[1]}</MonoText>
                    </span>
                </div>
            </div>
            <div className="mt-2">
                <p className="text-gray-700">{info.content}</p>
            </div>
        </div>
    );
};

export default Job; 