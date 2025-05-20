export default function NewsLoading() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="h-12 bg-gray-700 rounded w-1/2 mx-auto" />
            <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto" />
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video bg-gray-700 rounded-lg" />
              <div className="space-y-4">
                <div className="h-8 bg-gray-700 rounded w-3/4" />
                <div className="h-24 bg-gray-700 rounded" />
                <div className="h-10 bg-gray-700 rounded w-1/3" />
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-video bg-gray-700 rounded-lg" />
                <div className="h-6 bg-gray-700 rounded w-3/4" />
                <div className="h-16 bg-gray-700 rounded" />
                <div className="h-10 bg-gray-700 rounded w-1/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
