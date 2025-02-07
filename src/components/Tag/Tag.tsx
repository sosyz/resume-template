interface TagProps {
    children: React.ReactNode;
    className?: string;
}

const Tag = ({ children, className = "" }: TagProps) => (
    <span 
        className={`inline-flex shrink-0 items-center rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 ${className}`}
    >
        {children}
    </span>
);

export default Tag; 