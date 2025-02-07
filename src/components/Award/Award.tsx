import { useTranslation } from 'react-i18next';
import TimeRangeIcon from '@/assets/time-range.svg?react';
import MonoText from '../MonoText/MonoText';
import Tag from '../Tag/Tag';

export interface AwardInfo {
    name: string;
    level: string;
    time: string;
    issuer?: string;
    tags?: string[];
}

interface AwardProps {
    info: AwardInfo;
}

const Award = ({ info }: AwardProps) => {
    const { t } = useTranslation();

    return (
        <div className="mb-3 print:break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2 overflow-hidden">
                    <h3 className="text-base font-semibold text-gray-900 truncate">
                        {info.name}
                    </h3>
                    {info.tags && info.tags.length > 0 && (
                        <div className="flex flex-nowrap gap-1 overflow-hidden">
                            {info.tags.map((tag, index) => (
                                <Tag key={index}>
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                        {/* <TrophyIcon className="h-4 w-4 text-amber-500" /> */}
                        <span>{info.level}</span>
                    </div>
                    <span className="flex items-center">
                        <TimeRangeIcon className="mr-1 h-4 w-4 text-gray-600" />
                        <MonoText>{info.time}</MonoText>
                    </span>
                </div>
            </div>
            {info.issuer && (
                <div className="mt-1 text-sm text-gray-600">
                    {t('sections.awards.issuer')}: {info.issuer}
                </div>
            )}
        </div>
    );
};

export default Award; 