import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book a Demo | Elvara",
  description:
    "Pick a time for a quick consultation. We'll review your workflows and show how Elvara automations and booking can grow your business.",
};

export default function BookPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">Schedule Your Demo</h1>
        <p className="mt-2 text-slate-600">
          Choose a time that works for you. You'll get a calendar invite with meeting details.
        </p>
        <p className="mt-3 text-sm">
          <a href="/contact" className="underline underline-offset-4 text-slate-700 hover:text-slate-900">
            Need help?
          </a>
        </p>
      </header>

      <section className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
        <iframe
          src="https://cal.com/jeriel-herrera-cbpg4x/consultation?primary_color=2EAE6B&layout=month_view&hide_event_type_details=1"
          className="w-full"
          style={{ height: "900px" }}
          loading="lazy"
          allow="camera; microphone; fullscreen; autoplay; encrypted-media; picture-in-picture"
        />
      </section>

      <section className="mt-8 grid gap-4">
        <h2 className="text-xl font-medium text-slate-900">What to expect</h2>
        <ul className="list-disc pl-5 text-slate-700 space-y-1">
          <li>15–30 minute conversation focused on your goals</li>
          <li>Quick walkthrough of your current systems and bottlenecks</li>
          <li>Live preview of how Elvara automations and booking would fit</li>
        </ul>
      </section>

      <section className="mt-8 text-slate-700">
        <p>
          Prefer email or phone?{" "}
          <a href="mailto:hello@elvara.com" className="underline underline-offset-4">
            hello@elvara.com
          </a>{" "}
          · <a href="tel:+1800ELVARA" className="underline underline-offset-4">1-800-ELVARA</a>
        </p>
        <p className="mt-2 text-xs text-slate-500">
          We only use your details to schedule and prepare for this meeting.
        </p>
      </section>
    </main>
  );
}