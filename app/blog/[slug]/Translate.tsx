"use client";

import { useState } from "react";

export default function Translate({ originalHTML }: { originalHTML: string }) {
  const [translatedHTML, setTranslatedHTML] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function translateToHindi() {
    setLoading(true);

    // 🔥 Call your own API route (we create it in Step 2)
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html: originalHTML, target: "hi" })
    });

    const data = await res.json();
    setTranslatedHTML(data.translated);
    setLoading(false);
  }

  function reset() {
    setTranslatedHTML(null);
  }

  return (
    <div>
      {/* Buttons */}
      <div className="flex gap-3 my-4">
        {!translatedHTML ? (
          <button
            onClick={translateToHindi}
            className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
          >
            {loading ? "Translating..." : "Translate to Hindi"}
          </button>
        ) : (
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-600 rounded-lg text-white hover:bg-gray-700"
          >
            Back to English
          </button>
        )}
      </div>

      {/* Render translated OR original */}
      <article
        className="prose prose-invert leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: translatedHTML ?? originalHTML,
        }}
      />
    </div>
  );
}
