import {
    UserIcon,
    MapPinIcon,
    CalendarIcon,
    MessageCircleIcon,
    UserPlusIcon,
    Info
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDate } from '@/lib/utils';


export function UserCard({ user }) {
    return (
        <Card className="transition-all duration-300 group hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="w-12 h-12">
                    <AvatarImage src={user.avatar} alt={user.fullname} />
                    <AvatarFallback>
                        <UserIcon className="w-6 h-6" />
                    </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h3 className="font-semibold leading-none">{user.fullname}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
            </CardHeader>

            <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{user.shortBio}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {user.about}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Joined {formatDate(user.createdAt)}</span>
                </div>
            </CardContent>

            <CardFooter className="flex gap-2">
                <Button
                    className="flex-1"
                    variant="outline"
                >
                    <UserPlusIcon className="w-4 h-4 mr-2" />
                    Connect
                </Button>
                <Button
                    className="flex-1"
                >
                    <MessageCircleIcon className="w-4 h-4 mr-2" />
                    Message
                </Button>
            </CardFooter>
        </Card>
    );
}