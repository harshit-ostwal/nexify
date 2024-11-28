import {
    UserIcon,
    MapPinIcon,
    CalendarIcon,
    MessageCircleIcon,
    UserPlusIcon
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDate } from '@/lib/utils';


export function UserCard({ user, onConnect, onMessage }) {
    return (
        <Card className="transition-all duration-300 group hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="w-12 h-12">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>
                        <UserIcon className="w-6 h-6" />
                    </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h3 className="font-semibold leading-none">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
            </CardHeader>

            <CardContent className="space-y-3">
                {user.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{user.location}</span>
                    </div>
                )}
                {user.bio && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {user.bio}
                    </p>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Joined {formatDate(user.createdAt)}</span>
                </div>
            </CardContent>

            <CardFooter className="flex gap-2">
                <Button
                    className="flex-1"
                    variant="outline"
                    onClick={() => onConnect(user.id)}
                >
                    <UserPlusIcon className="w-4 h-4 mr-2" />
                    Connect
                </Button>
                <Button
                    className="flex-1"
                    onClick={() => onMessage(user.id)}
                >
                    <MessageCircleIcon className="w-4 h-4 mr-2" />
                    Message
                </Button>
            </CardFooter>
        </Card>
    );
}