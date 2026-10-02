import React, { useEffect, useState } from "react";

const Credits = () => {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/credits`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch credits");
        }

        const data = await response.json();
        setCredits(data);
      } catch (err) {
        setError("Unable to load credits.");
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-brand-dark/50">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Credits Section */}
      <section className="mt-20 py-12">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          
          <div className="mb-12 flex justify-center">
            <h2 className="text-center text-4xl font-bold">
              <span className="border-b-4 border-brand-primary pb-2">
                Credits
              </span>
            </h2>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-brand-dark">
            {credits?.title}
          </h1>

          <p className="mb-6 text-brand-dark">
            <strong>Last Updated:</strong> {credits?.last_updated}
          </p>

          <p className="mb-6 leading-7 text-brand-dark/70">
            {credits?.description}
          </p>

          <ul className="list-disc space-y-3 pl-6">
            {credits?.resources?.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:underline"
                >
                  {resource.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between rounded-lg bg-brand-primary p-6 text-white md:p-8 lg:flex-row lg:items-center">
            
            <div className="pb-2 lg:pb-1">
              <h2 className="mb-2 text-2xl font-bold text-brand-accent">
                Not sure which plan suits you?
              </h2>

              <p className="mb-0 text-brand-text">
                Imperdiet consectetur dolor, tristique himenaeos ultrices
                tristique neque.
              </p>
            </div>

            <div className="my-2">
              <a
                href="/contact"
                className="inline-block rounded-md bg-white px-6 py-2 text-lg font-medium text-brand-dark transition hover:bg-brand-light"
              >
                Contact us
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Credits;