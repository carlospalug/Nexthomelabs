import { TeamMember } from "@/lib/team-data";
    import Image from "next/image";
    import Link from "next/link";

    interface FullTeamDisplayProps {
      teamMembers: TeamMember[];
    }

    export function FullTeamDisplay({ teamMembers }: FullTeamDisplayProps) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Link key={member.id} href={`/team/${member.slug}`}>
              <div
                className="p-4 rounded-lg border border-[#374151] bg-[#1F2937]/40 backdrop-blur-sm cursor-pointer hover:border-[#00E6E6]/50 transition-colors duration-200"
              >
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
                <p className="text-gray-300 mt-2">{member.shortDescription}</p>
                {/* Removed expertise display to keep it concise */}
              </div>
            </Link>
          ))}
        </div>
      );
    }
