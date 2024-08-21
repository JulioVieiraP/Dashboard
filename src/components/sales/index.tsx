import { CircleDollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const Sales = () => {
  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
        <CardHeader>
            <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800">
                    Overview vendas
                </CardTitle>
                <CircleDollarSign className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>
                Novos clientes nas últimas 24 horas
            </CardDescription>
        </CardHeader>

        <CardContent>
            <ul>
                <li>
                    <article className="flex items-center gap-2 border-b py-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://placehold.co/800"/>
                            <AvatarFallback>DV</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm sm:text-base font-semibold">Test</p>
                            <span className="text-[12px] sm:text-sm text-gray-400">teste@test.com</span>
                        </div>
                    </article>
                </li>
                <li>
                    <article className="flex items-center gap-2 border-b py-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://placehold.co/800"/>
                            <AvatarFallback>DV</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm sm:text-base font-semibold">Test</p>
                            <span className="text-[12px] sm:text-sm text-gray-400">teste@test.com</span>
                        </div>
                    </article>
                </li>
            </ul>
        </CardContent>
    </Card>
  )
}

export default Sales