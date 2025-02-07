import { useState } from 'react';
import EmailIcon from '@/assets/email.svg?react';
import PhoneIcon from '@/assets/phone.svg?react';
import GithubIcon from '@/assets/github.svg?react';
import WechatIcon from '@/assets/wechat.svg?react';
import BlogIcon from '@/assets/blog.svg?react';

// 定义类型接口
export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    wechat: string;
    github: string;
    blog: string;
    extra?: string;
}

interface PersonalProps {
    info: PersonalInfo;
}

const Personal = ({ info }: PersonalProps) => {
    const [copied, setCopied] = useState(false);

    const handleWechatClick = async () => {
        try {
            await navigator.clipboard.writeText(info.wechat);
            if (!copied) { // 防止重复点击时重启动画
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    // 抽取联系方式渲染逻辑
    const renderContactItem = (icon: React.ReactNode, content: React.ReactNode) => (
        <div className="flex items-center gap-1">
            {icon}
            <div>
              {content}
            </div>
        </div>
    );

    return (
        <header className="flex flex-col items-start justify-start mb-2">
            <div className="flex flex-wrap items-baseline gap-2">
                {info.name && (
                    <h1 className="text-4xl font-bold m-0">{info.name}</h1>
                )}
                {info.extra && (
                    <span className="text-sm text-gray-500">{info.extra}</span>
                )}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">   
                {info.email && renderContactItem(
                    <EmailIcon />,
                    <a href={`mailto:${info.email}`} className="hover:underline">{info.email}</a>
                )}

                {info.phone && renderContactItem(
                    <PhoneIcon />,
                    <a href={`tel:${info.phone}`} className="hover:underline">{info.phone}</a>
                )}
                
                {info.wechat && renderContactItem(
                    <WechatIcon />,
                    <button 
                        onClick={handleWechatClick}
                        className="relative text-left hover:underline"
                    >
                        {info.wechat}
                        <span 
                            className={`
                                absolute -top-8 left-0 
                                bg-gray-800 text-white text-xs px-2 py-1 rounded
                                transition-all duration-200 ease-in-out
                                ${copied 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-1 pointer-events-none'
                                }
                            `}
                        >
                            Copied
                        </span>
                    </button>
                )}

                {info.github && renderContactItem(
                    <GithubIcon />,
                    <a href={`https://github.com/${info.github}`} className="hover:underline">{info.github}</a>
                )}

                {info.blog && renderContactItem(
                    <BlogIcon />,
                    <a href={"//"+info.blog} className="hover:underline">{info.blog}</a>
                )}
            </div>
        </header>
    );
};

export default Personal;