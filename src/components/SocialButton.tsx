import GoogleLogo from '../assets/google.svg'
import AppleLogo from '../assets/apple.svg'
import FacebookLogo from '../assets/facebook.svg'

interface SocialButtonProps {
    social?: 'fb' | 'gg' | 'ap';
}

export function SocialButton({ social = 'gg' }: SocialButtonProps) {
    let source = {img: GoogleLogo, name: 'Google'}
    if (social == 'ap') {
        source = {img: AppleLogo, name: 'Apple'}
    }
    if (social == 'fb') {
        source = {img: FacebookLogo, name:'Facebook'}
    }
    return (
        <button className='bg-cyan-900 rounded-lg items-center justify-center border-gray-100t w-1/3 gap-1 h-8 text-xs font-semibold text-gray-500 flex gap-1 hover:bg-gray-800 transition-colors'>
            <img src={source.img}/>
            <span>{source.name}</span>
        </button>
    )
}