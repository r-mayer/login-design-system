import { clsx } from 'clsx';

interface ButtonProps {
    children: string;
}

export function Button({ children }: ButtonProps) {
    return (
        <button className={clsx('text-gray-100 bg-cyan-500 py-2 px-2 rounded-lg font-semibold transition-colors w-full text-md font-sans hover:bg-cyan-800',)}>
            {children}
        </button>
    )
}