import Header from './components/Header'
import Hero from './components/Hero'
import MovieRow from './components/MovieRow'

export default function NetflixClone() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Hero />
        <section className="md:space-y-24">
          <MovieRow title="Trending Now" />
          <MovieRow title="Top Rated" />
          <MovieRow title="Action Thrillers" />
          <MovieRow title="Comedies" />
          <MovieRow title="Sci-Fi Adventures" />
          <MovieRow title="Horror Movies" />
          <MovieRow title="Romance Movies" />
          <MovieRow title="Documentaries" />
        </section>
      </main>
    </div>
  )
}

