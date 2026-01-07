"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, ChevronDown, ChevronUp } from "lucide-react";
import { BoardMember } from "@/lib/data/club";
import { cn } from "@/lib/utils";

interface BoardMemberCardProps {
  member: BoardMember;
}

export function BoardMemberCard({ member }: BoardMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Photo */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="mb-1 flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-navy-800">{member.name}</h3>
            <p className="text-sm font-medium text-ocean-600">{member.title}</p>
          </div>
          {member.yearsOnBoard > 0 && (
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
              {member.yearsOnBoard} yr{member.yearsOnBoard > 1 ? "s" : ""}
            </span>
          )}
        </div>

        {/* Expandable Bio */}
        <div className="mt-3">
          <p
            className={cn(
              "text-sm text-gray-600 transition-all",
              !isExpanded && "line-clamp-2"
            )}
          >
            {member.bio}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 flex items-center gap-1 text-sm font-medium text-ocean-600 hover:text-ocean-700"
          >
            {isExpanded ? (
              <>
                Show less
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Read more
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

        {/* Contact */}
        <div className="mt-4 border-t border-gray-100 pt-4">
          <a
            href={`mailto:${member.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
