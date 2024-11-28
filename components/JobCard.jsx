import {
    CalendarIcon,
    MapPinIcon,
    Building2Icon,
    BriefcaseIcon,
    DollarSignIcon,
    ThumbsUpIcon,
    ShareIcon,
    UserIcon,
    ClockIcon,
    Trash2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatDate } from '@/lib/utils';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from './ui/button';
import { toast } from 'sonner';
import { useState } from 'react';

export function JobCard({ application, onRemoveApplication }) {
    const getStatusColor = (status) => {
        const statusMap = {
            pending: 'bg-yellow-500',
            applied: 'bg-green-500',
            rejected: 'bg-red-500',
            interviewing: 'bg-blue-500',
        };
        return statusMap[status.toLowerCase()] || 'bg-gray-500';
    };

    const job = application.JobPost;
    if (!job) return null;


    const handleRemoveApplication = async () => {
        if (onRemoveApplication) {
            await onRemoveApplication(application.id);
        }
    };

    return (
        <Card className="transition-all duration-300 group hover:shadow-xl">
            <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                    <CardTitle className="text-xl line-clamp-2">
                        {job.title}
                    </CardTitle>
                    <Badge
                        variant={"outline"}
                        className={`${getStatusColor(application.status)} text-white shrink-0`}
                    >
                        {application.status}
                    </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                        <ThumbsUpIcon className="w-3 h-3" />
                        {job.likes} likes
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                        <ShareIcon className="w-3 h-3" />
                        {job.shares} shares
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                        <UserIcon className="w-3 h-3" />
                        {job.applies.length} applies
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2Icon className="w-4 h-4 shrink-0" />
                        <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPinIcon className="w-4 h-4 shrink-0" />
                        <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <BriefcaseIcon className="w-4 h-4 shrink-0" />
                        <span>{job.role}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSignIcon className="w-4 h-4 shrink-0" />
                        <span>{job.salary}</span>
                    </div>
                </div>

                <Separator />

                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                        {job.content}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <CalendarIcon className="w-4 h-4 shrink-0" />
                        <span>Applied {formatDate(application.createdAt)}</span>
                    </div>
                    {job.joiningDate && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <ClockIcon className="w-4 h-4" />
                            <span>Joining date: {new Date(job.joiningDate).toLocaleDateString()}</span>
                        </div>
                    )}
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive" className="p-3">
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Remove Application</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Are you sure you want to remove your application for {job.title} at {job.company}? This action cannot be undone.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleRemoveApplication}>
                                    Remove Application
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>


            </CardContent>
        </Card>
    );
}