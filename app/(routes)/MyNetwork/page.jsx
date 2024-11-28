"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Users } from 'lucide-react';
import { UserCard } from '@/components/UserCard';
import { NetworkFilters } from '@/components/NetworkFilters';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('name');

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data.user);
        } catch (error) {
            toast('Failed to fetch users. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    console.log(users);

    useEffect(() => {
        fetchUsers();
    }, []);

    const filteredUsers = users
        .filter((user) =>
            user.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.location?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.fullname.localeCompare(b.fullname);
                case 'recent':
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                case 'location':
                    return (a.location || '').localeCompare(b.location || '');
                default:
                    return 0;
            }
        });

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between pb-8 border-b">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight">Your Network</h1>
                        <p className="mt-2 text-muted-foreground">
                            Connect with professionals and expand your network
                        </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="font-medium">{users.length} Users</span>
                    </div>
                </div>

                <div className="mt-8">
                    <NetworkFilters
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        sortBy={sortBy}
                        onSortChange={setSortBy}
                    />
                </div>

                <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredUsers.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;