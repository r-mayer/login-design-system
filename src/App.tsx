import { Button } from './components/Button';
import { Heading } from './components/Heading';
import { SocialButton } from './components/SocialButton';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import './styles/global.css';

export function App() {
  return (
    <div className='w-screen h-screen bg-black grid place-items-center'>
      <div className='bg-cyan-800 py-6 px-14 w-96 rounded-3xl flex flex-col text-center'>
        <div className='mb-4'>
          <Heading>My app login</Heading>
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
        <div className='mb-4'>
          <Text size='sm'>Ou entre com</Text>
        </div>
        
        <SocialButton></SocialButton>
      </div>
    </div>
  )
}
