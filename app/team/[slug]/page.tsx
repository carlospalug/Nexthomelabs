// app/team/[slug]/page.tsx
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { team } from '@/lib/team-data';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

// Type definitions
interface Achievement {
  title: string;
  year: number;
  description: string;
}

interface Publication {
  title: string;
  link: string;
  publisher: string;
  year: number;
}

interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image: string;
  shortDescription: string;
  expertise?: string[];
  achievements?: Achievement[];
  publications?: Publication[];
  certifications?: string[];
  twitterlink?: string;
  linkedInLink?: string;
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const member = team.find((member) => member.slug === params.slug);

  if (!member) {
    return {
      title: 'Team Member Not Found | NextHomeLabs',
      robots: {
        index: false,
        follow: false,
      }
    };
  }

  const { name, role, image, shortDescription, slug } = member;
  const fullName = `${name} | NextHomeLabs`;
  const profileUrl = `https://nexthomelabs.com/team/${slug}`;

  return {
    title: fullName,
    description: shortDescription,
    keywords: [
      name,
      role,
      'NextHomeLabs',
      'AI',
      'Blockchain',
      'Technology',
      'Uganda',
      ...(member.expertise || []),
    ],
    openGraph: {
      type: 'profile',
      url: profileUrl,
      title: fullName,
      description: shortDescription,
      images: [{
        url: image,
        width: 1200,
        height: 630,
        alt: name,
      }],
      profile: {
        firstName: name.split(' ')[0],
        lastName: name.split(' ')[1] || '',
        username: slug,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: fullName,
      description: shortDescription,
      images: [image],
      creator: '@NextHomeLabs',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: profileUrl,
    },
    other: {
      'msvalidate.01': process.env.META_B39 || '',
      'google-site-verification': process.env.META_G002 || '',
    },
  };
}

export async function generateStaticParams() {
  return team.map((member) => ({
    slug: member.slug,
  }));
}

export default function TeamMemberPage({ params }: Props) {
  const member = team.find((m) => m.slug === params.slug) as TeamMember | undefined;

  if (!member) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Profile Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Profile Content */}
          <div className="space-y-6">
            <header>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {member.name}
              </h1>
              <Badge variant="secondary" className="mt-2 text-lg">
                {member.role}
              </Badge>
            </header>

            <section>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {member.shortDescription}
              </p>
            </section>

            {/* Expertise Section */}
            {member.expertise && (
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  Core Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {member.expertise?.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </section>
            )}

            {/* Achievements Section */}
            {member.achievements && (
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  Key Achievements
                </h2>
                <ul className="space-y-4">
                  {member.achievements?.map((achievement, index) => (
                    <li key={index} className="pl-4 border-l-4 border-blue-500">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {achievement.title} ({achievement.year})
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {member.twitterlink && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={member.twitterlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        aria-label="Twitter profile"
                      >
                        <FaTwitter className="w-8 h-8" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Twitter Profile</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}

              {member.linkedInLink && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={member.linkedInLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                        aria-label="LinkedIn profile"
                      >
                        <FaLinkedin className="w-8 h-8" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn Profile</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}