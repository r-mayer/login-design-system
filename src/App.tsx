import { Button } from './components/Button';
import { Heading } from './components/Heading';
import { SocialButton } from './components/SocialButton';
import { Text } from './components/Text';
import { Header } from './components/Header';
import { TextInput } from './components/TextInput';
import './styles/global.css';

export function App() {
  return (
    <div className='w-screen h-screen flex-col overflow-hidden'>
      <Header></Header>
      <div className='w-full h-full bg-black grid place-items-center pt-4'>
        <div className='bg-cyan-900 py-6 px-14 w-96 rounded-3xl flex flex-col text-center mb-16'>
          <div className='mb-4'>
            <Heading size='lg'>My app login</Heading>
          </div>
          <div className='mb-4'>
            <Text size='md'>Hey! Entre com os seus dados para logar na sua conta</Text>
          </div>
          <div className='mb-2'>
            <TextInput placeholder='Seu email / Telefone'></TextInput>
          </div>
          <div className='mb-4'>
            <TextInput placeholder='Sua senha'></TextInput>
          </div>
          <div className='mb-4 flex justify-start'>
            <Text size='sm'>Tendo problemas para logar?</Text>
          </div>
          <div className='mb-4'>
            <Button>Entrar</Button>
          </div>
          <div className='mb-2'>
            <Text size='sm'>Ou entre com</Text>
          </div>
          <div className='flex gap-1 mb-4'>
            <SocialButton></SocialButton>
            <SocialButton social='ap'></SocialButton>
            <SocialButton social='fb'></SocialButton>
          </div>
          <div className='mb-4'>
            <Text size='sm'>Não tem uma conta? <span className='font-bold'>Crie uma agora</span></Text>
          </div>
        </div>
      </div>
    </div>
  )
}
