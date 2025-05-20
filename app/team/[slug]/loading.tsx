import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Skeleton className="w-40 h-8 bg-gray-700" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Skeleton className="w-full aspect-square rounded-xl mb-4" />
            <div className="flex gap-4">
              <Skeleton className="w-12 h-12 rounded-full" />
              <Skeleton className="w-12 h-12 rounded-full" />
              <Skeleton className="w-12 h-12 rounded-full" />
            </div>
          </div>
          <div className="space-y-8">
            <Skeleton className="w-64 h-10 bg-gray-700" />
            <Skeleton className="w-32 h-8 bg-gray-700 mb-4" />
            <Skeleton className="w-full h-4 bg-gray-700" />
            <Skeleton className="w-full h-4 bg-gray-700" />
            <Skeleton className="w-full h-4 bg-gray-700" />
            <Skeleton className="w-1/2 h-4 bg-gray-700" />

            <div className="space-y-6">
              <div>
                <Skeleton className="w-48 h-8 bg-gray-700 mb-4" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="w-24 h-6 bg-gray-700" />
                  <Skeleton className="w-24 h-6 bg-gray-700" />
                  <Skeleton className="w-24 h-6 bg-gray-700" />
                </div>
              </div>

              <div>
                <Skeleton className="w-48 h-8 bg-gray-700 mb-4" />
                <div className="space-y-4">
                  <Skeleton className="w-full h-16 bg-gray-700" />
                  <Skeleton className="w-full h-16 bg-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
