"use client";

import { JobCard } from "@/components/JobCard";
import axios from "axios";
import { BriefcaseIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function Page() {
    const [jobs, setJobs] = useState([]);

    // Fetch applied jobs
    const fetchAppliedJobs = async () => {
        try {
            const response = await axios.get(`/api/appliedJobs`);
            setJobs(response.data.appliedJobs);
        } catch (error) {
            console.error("Error fetching applied jobs:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchAppliedJobs();
    }, []);

    const handleRemoveApplication = async (applicationId) => {
        try {
            console.log(applicationId);
            await axios.delete(`/api/removeJobApplications`, {
                data: { applicationId },
            });
            fetchAppliedJobs();
            toast("Your job application has been successfully removed.");
        } catch (error) {
            toast("Failed to remove the application. Please try again later.");
        }
    };

    return (
        <div className="min-h-full">
            <div className="flex flex-col gap-10 py-20 mx-auto max-w-7xl">
                <div className="flex items-center justify-between pb-8 border-b">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight">Your Applications</h1>
                        <p className="mt-2 text-muted-foreground">
                            Track and manage your job applications in one place
                        </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                        <BriefcaseIcon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{jobs.length} Applications</span>
                    </div>
                </div>
                {jobs.length === 0 ? (
                    <div className="text-lg font-medium">
                        No jobs applied for yet.
                    </div>
                ) : (
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((application) => (
                            <JobCard
                                key={application.id}
                                application={application}
                                onRemoveApplication={handleRemoveApplication}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default Page;