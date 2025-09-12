import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book a Demo | Elvara",
  description: "Schedule a consultation to see how Elvara grows your business.",
};

export default function BookPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-semibold">Schedule Your Demo</h1>
        <p className="text-slate-600 mt-2">
          Choose a time that works for you. We'll send a calendar invite with meeting details.
        </p>
      </header>

      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
        <iframe
          src="https://cal.com/jeriel-herrera-cbpg4x/consultation?primary_color=2EAE6B&layout=month_view&hide_event_type_details=1"
          className="w-full"
          style={{ height: "880px" }}
          loading="lazy"
          allow="camera; microphone; fullscreen; autoplay; encrypted-media; picture-in-picture"
        />
      </div>
    </main>
  );
}