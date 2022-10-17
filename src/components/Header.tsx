import { Button } from "./Button"
import { Heading } from "./Heading"
import { Text } from "./Text"

export function Header() {
    return (
        <div className='w-full h-16 pt-6 bg-black flex px-20 items-center justify-between'>
            <Heading>My app</Heading>
            <div className="flex items-center gap-8">
                <Text>Login</Text>
                <Button size="md">Solicite uma demonstração</Button>
            </div>
        </div>
    )
}