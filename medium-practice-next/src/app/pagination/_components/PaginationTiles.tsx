"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

export default function PaginationTiles() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const limit = parseInt(searchParams.get("limit") || "40");
  const offset = parseInt(searchParams.get("offset") || "0");

  const handlePagination = (newOffset: number) => {
    router.push(`/pagination?limit=${limit}&offset=${newOffset}`);
  };

  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
        disabled={offset === 0}
        onClick={() => handlePagination(Math.max(0, offset - limit))}
      >
        Previous
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => handlePagination(offset + limit)}
      >
        Next
      </button>
    </div>
  );
}
