export default function MarketsLoading() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="h-12 bg-gray-700 rounded w-1/2 mx-auto" />
            <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto" />
          </div>

          {/* Market Graph */}
          <div className="h-[500px] bg-gray-700 rounded-lg mb-16" />

          {/* Market Insights */}
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 space-y-4">
                <div className="h-6 bg-gray-700 rounded w-3/4" />
                <div className="h-20 bg-gray-700 rounded" />
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-gray-700 rounded w-1/3" />
                  <div className="h-10 bg-gray-700 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
