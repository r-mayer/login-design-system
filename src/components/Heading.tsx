import { clsx } from 'clsx';

interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: string;
}

export function Heading({ size = 'md', children }: HeadingProps) {
    return (
        <h2 className={clsx(
            'text-gray-500 font-bold font-sans',
            {
                'text-md': size == 'sm',
                'text-lg': size == 'md',
                'text-xl': size == 'lg',
            }
        )}
        >
            {children}
        </h2>
    )
}