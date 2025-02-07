interface MonoTextProps {
    children: string;
    className?: string;
}

const MonoText = ({ children, className = "" }: MonoTextProps) => (
    <span className={`font-mono ${className}`}>
        {children}
    </span>
);

export default MonoText; 