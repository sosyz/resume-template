export interface MarkdownContentProps {
    content: string;
    className?: string;
}

const MarkdownContent = ({ content, className = "" }: MarkdownContentProps) => {
    const formatContent = (content: string) => {
        // 将内容按段落分割
        return content.split('\n\n').map((paragraph, i) => {
            // 处理段落中的加粗文本 移除单个换行符
            const parts = paragraph.replace(/(?<!\n)\n(?!\n)/g, '').split(/(\*\*.*?\*\*)/g);
            
            return (
                <span key={i} className="print:inline-block">
                    {i > 0 && <br />}
                    {parts.map((part, j) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            // 处理加粗文本
                            return (
                                <strong key={j} className="font-semibold">
                                    {part.slice(2, -2)}
                                </strong>
                            );
                        }
                        // 普通文本
                        return <span key={j}>{part}</span>;
                    })}
                </span>
            );
        });
    };

    return (
        <div className={className}>
            {formatContent(content)}
        </div>
    );
};

export default MarkdownContent; 