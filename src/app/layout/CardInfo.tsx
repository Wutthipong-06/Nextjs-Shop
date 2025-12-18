import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap, Shield,} from "lucide-react";

const info = [
    {
        title: 'Fast Performance',
        Icon: Zap,
        description: 'Experience lightning-fast load times and smooth interactions.',
    },
    {
        title: 'Secure',
        Icon: Shield,
        description: 'Your data is protected with top-notch security measures.',
    },
    {
        title: 'User Friendly',
        Icon: Users,
        description: 'Intuitive design that is easy to navigate for everyone.',
    },
]

export function CardInfo() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {info.map((item) => (
                <Card key={item.title} className="w-full max-w-md relative border rounded-lg p-6 shadow-sm bg-background/60 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <CardHeader className="mb-4">
                        <div className="absolute top-5 left-5 select-none w-full pr-4 overflow-hidden">
                            <CardTitle className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 opacity-80 to-transparent">{item.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <item.Icon className="h-10 w-10 mb-4 text-primary" />
                        <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}