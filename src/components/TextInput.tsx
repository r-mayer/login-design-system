import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: TextInputProps) {
    return (
        <input className={clsx(
            'bg-cyan-900 border-gray-100t border text-gray-100 py-2 px-5 w-full rounded-lg outline-none placeholder:text-gray-700 text-sm focus:ring-2 ring-cyan-500',
        )}
        {...props}
        />
    )
}