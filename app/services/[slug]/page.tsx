import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getServiceBySlug, services } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | Coach Pro" };
  return {
    title: `${service.title} | Coach Pro`,
    description: service.tagline,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-black tracking-wide text-teal-600 hover:text-teal-700 transition mb-8">
            ← BACK TO SERVICES
          </Link>

          <div className="mb-10 space-y-4 animate-slide-down">
            <p className="text-sm font-black tracking-wide text-teal-600 uppercase">
              {service.description}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight text-balance">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-2xl leading-relaxed">
              {service.tagline}
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black mb-12 aspect-video">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={service.image}>
              <source src={service.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 mb-16">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                What this session is about
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {service.summary}
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 sm:p-8 h-full">
                <h3 className="text-lg font-black text-teal-600 mb-5 tracking-wide">
                  WHAT YOU GET
                </h3>
                <ul className="space-y-3">
                  {service.offerings.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-gray-700 font-medium leading-relaxed">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link
              href="/#contact"
              className="inline-flex justify-center px-10 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-black rounded-full hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 uppercase tracking-wide text-center">
              Book This Session
            </Link>
            <Link
              href="/#services"
              className="inline-flex justify-center px-10 py-4 border-2 border-gray-300 text-gray-900 font-black rounded-full hover:border-teal-600 hover:text-teal-600 transition-all duration-300 uppercase tracking-wide text-center">
              View All Services
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">
              Other services
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-teal-400 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-gray-900 group-hover:text-teal-600 transition tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
