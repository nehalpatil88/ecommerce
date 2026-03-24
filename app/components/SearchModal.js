"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchStore } from "../context/SearchContext";

const searchableItems = [
  { name: "Kharvas", href: "/categories/Sweets" },
  { name: "Special Ladoo", href: "/categories/Sweets" },
  { name: "Elaichi Shrikhand", href: "/categories/Sweets" },
  { name: "Awala Candy", href: "/categories/Kokan" },
  { name: "Byadgi Chilli Powder", href: "/categories/Spices" },
  { name: "Goda Masala", href: "/categories/Spices" },
  { name: "Besan Flour", href: "/categories/Flours" },
  { name: "Basmati Rice", href: "/categories/Rice" },
];

const bestsellers = [
  "Kharvas",
  "Special Ladoo",
  "Elaichi Shrikhand",
  "Awala Candy",
];

export default function SearchModal({ isOpen, onClose }) {
  const router = useRouter();
  const { recentSearches, addRecentSearch, clearRecentSearches } =
    useSearchStore();
  const [query, setQuery] = useState("");

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    return searchableItems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleSearch = (term, href = "/categories") => {
    addRecentSearch(term);
    setQuery("");
    onClose();
    router.push(href);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40">
      <div className="mx-auto mt-20 w-[92%] max-w-2xl rounded-2xl bg-white p-5 shadow-xl">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border px-4 py-3"
          >
            Close
          </button>
        </div>

        {!query.trim() && (
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-semibold">Recent searches</p>
              {recentSearches.length > 0 && (
                <button
                  type="button"
                  onClick={clearRecentSearches}
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {recentSearches.length > 0 ? (
                recentSearches.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSearch(item)}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-sm"
                  >
                    {item}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-500">No recent searches</p>
              )}
            </div>

            <p className="mt-6 mb-2 font-semibold">Bestsellers</p>
            <div className="flex flex-wrap gap-2">
              {bestsellers.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleSearch(item)}
                  className="rounded-full border px-3 py-1.5 text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {query.trim() && (
          <div className="mt-6 space-y-2">
            {filteredResults.length > 0 ? (
              filteredResults.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleSearch(item.name, item.href)}
                  className="block w-full rounded-xl border border-gray-200 px-4 py-3 text-left hover:bg-gray-50"
                >
                  {item.name}
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-500">No results found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}