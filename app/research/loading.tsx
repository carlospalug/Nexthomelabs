export default function ResearchLoading() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="h-12 bg-gray-700 rounded w-1/2 mx-auto" />
            <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto" />
          </div>

          {/* Research Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/50 space-y-4">
                <div className="h-10 w-10 bg-gray-700 rounded" />
                <div className="h-6 bg-gray-700 rounded w-3/4" />
                <div className="h-20 bg-gray-700 rounded" />
                <div className="h-4 bg-gray-700 rounded w-1/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
