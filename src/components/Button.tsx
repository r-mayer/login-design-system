import { clsx } from 'clsx';

interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    children: string;
}

export function Button({ size = 'lg', children }: ButtonProps) {
    return (
        <button className={clsx('text-gray-100 bg-cyan-500 py-2 px-2 rounded-lg font-semibold transition-colors w-full font-sans hover:bg-cyan-800',
            {
                'text-xs': size == 'sm',
                'text-sm': size == 'md',
                'text-md': size == 'lg',
            }
        )}>
            {children}
        </button>
    )
}