import { CtaButton } from "@/components/cta-button";

export function MonitorSection() {
  return (
    <section className="bg-orange-50 px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-orange">
          Monitor
        </p>
        <h2 className="mt-3 text-3xl font-black text-brand-navy">
          試験導入企業募集中
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-700">
          現在、建設業・設備業・リフォーム業の事業者様向けに無料相談を実施しています。
        </p>
        <div className="mt-8">
          <CtaButton className="w-full sm:w-auto" variant="line" />
        </div>
      </div>
    </section>
  );
}
