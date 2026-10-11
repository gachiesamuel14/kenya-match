# Kenya Match 🇰🇪❤️

**Location-based matchmaking and online dating platform for people in Kenya.**

Connect with nearby users by county, town, distance, age, interests, tribe, religion and lifestyle preferences.

## Live status

This is the **MVP foundation** — a polished marketing site + signup/login UI shells ready for real auth, profiles, GPS matching and chat.

**Repo:** https://github.com/gachiesamuel14/kenya-match

## Tech stack (planned & current)

| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | **Next.js 16** (App Router) + Tailwind CSS | Fast, SEO-friendly, excellent Netlify support |
| Hosting | **Netlify** | Continuous deploy from GitHub, serverless functions, edge |
| Auth | Supabase Auth or Netlify Identity | Easy email/password + social, free tier |
| Database | **Supabase (PostgreSQL + PostGIS)** | Location queries, real-time, auth, storage in one |
| Real-time chat | Supabase Realtime | Built-in presence & messaging |
| Photos | Supabase Storage or Cloudinary | Secure uploads |
| Maps / distance | Browser Geolocation + Haversine or PostGIS | No heavy Google Maps cost at start |
| Payments (later) | M-Pesa (Daraja API) | Local premium subscriptions |

## Features roadmap

### Phase 1 – Foundation (current)
- [x] Landing page tailored for Kenya
- [x] Signup / Login UI
- [ ] Connect real auth (Supabase)
- [ ] Deploy to Netlify

### Phase 2 – Core matching
- [ ] Profile creation (photos, bio, county, interests, optional tribe/religion)
- [ ] GPS / approximate location + privacy controls
- [ ] Discover feed with distance + filters
- [ ] Like / Match system

### Phase 3 – Chat & safety
- [ ] Real-time messaging
- [ ] Report & block system
- [ ] Basic notifications

### Phase 4 – Localisation & monetisation
- [ ] M-Pesa payments for premium
- [ ] Student / Professional / Church modes
- [ ] Sheng / Swahili-friendly copy options

## Getting started (local)

```bash
git clone https://github.com/gachiesamuel14/kenya-match.git
cd kenya-match
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Netlify

1. Push this repo to GitHub (already done).
2. In Netlify: **Add new site → Import an existing project** → choose this repo.
3. Build settings (auto-detected for Next.js):
   - Build command: `npm run build`
   - Publish directory: handled by the Netlify Next.js runtime
4. Deploy.

Or use the Netlify CLI:

```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## Next steps we can build together

1. Add Supabase project and wire up auth + profiles table.
2. Implement location permission + simple nearby query.
3. Build the swipe / discover UI.
4. Add photo upload.
5. Real-time chat.

Tell me which part you want to tackle first and we’ll continue.
