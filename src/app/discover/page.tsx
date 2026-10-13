'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Profile = {
  id: string;
  name: string;
  age: number;
  county: string;
  distance: string;
  bio: string;
  interests: string[];
};

const mockProfiles: Profile[] = [
  { id: '1', name: 'Amina', age: 26, county: 'Nairobi', distance: '2.4 km', bio: 'Coffee lover, hikes on weekends. Looking for genuine connection.', interests: ['Travel', 'Music', 'Food'] },
  { id: '2', name: 'Brian', age: 29, county: 'Kiambu', distance: '8.1 km', bio: 'Software engineer. Into football and tech meetups.', interests: ['Tech', 'Sports', 'Movies'] },
  { id: '3', name: 'Faith', age: 24, county: 'Nairobi', distance: '1.1 km', bio: 'Student at UoN. Love Sheng, church and good vibes.', interests: ['Church', 'Books', 'Dance'] },
  { id: '4', name: 'James', age: 32, county: 'Mombasa', distance: '450 km', bio: 'Business owner. Beach walks and business talks.', interests: ['Business', 'Travel', 'Food'] },
];

export default function DiscoverPage() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLoading(false);
      },
      (err) => {
        setError('Location permission denied or unavailable. Showing demo profiles.');
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-rose-600 text-xl">❤️ Kenya Match</Link>
          <div className="text-sm text-zinc-500">Discover</div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-zinc-900 mb-2">People near you</h1>
        {loading && <p className="text-zinc-500">Getting your location...</p>}
        {error && <p className="text-amber-600 text-sm mb-4">{error}</p>}
        {location && (
          <p className="text-sm text-zinc-500 mb-6">
            Location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)} (demo matching)
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          {mockProfiles.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-semibold text-lg">{p.name}, {p.age}</h2>
                  <p className="text-sm text-zinc-500">{p.county} · {p.distance}</p>
                </div>
                <span className="text-xs bg-rose-50 text-rose-700 px-2 py-1 rounded-full">Nearby</span>
              </div>
              <p className="mt-3 text-sm text-zinc-700 leading-relaxed">{p.bio}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.interests.map((i) => (
                  <span key={i} className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full">{i}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 rounded-full border border-zinc-200 text-sm font-medium hover:bg-zinc-50">Pass</button>
                <button className="flex-1 py-2 rounded-full bg-rose-600 text-white text-sm font-medium hover:bg-rose-700">Like</button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-400">
          Demo data — real matching with Supabase + PostGIS coming next.
        </p>
      </main>
    </div>
  );
}
