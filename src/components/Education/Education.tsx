import TimeRangeIcon from '@/assets/time-range.svg?react';
import MonoText from '../MonoText/MonoText';
import Tag from '../Tag/Tag';

export interface EducationInfo {
    school: string;
    major: string;
    degree: string;
    time: [string, string];
    tag?: string[];
}

interface EducationProps {
    info: EducationInfo[];
}

const Education = ({ info }: EducationProps) => {
    // const { t } = useTranslation();

    return (
        <div className="space-y-4 print:break-inside-avoid">
            {info.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                                {edu.school}
                            </h3>
                            {edu.tag && (
                                <div className="flex flex-wrap items-center gap-1">
                                    {edu.tag.map((tag, tagIndex) => (
                                        <Tag key={tagIndex}>
                                            {tag}
                                        </Tag>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <span>{edu.major}</span>
                            <span>{edu.degree}</span>
                            <span className="flex items-center">
                                <TimeRangeIcon className="mr-1 h-4 w-4 text-gray-600" />
                                <MonoText>{edu.time[0]}</MonoText>
                                {" - "}
                                <MonoText>{edu.time[1]}</MonoText>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;
