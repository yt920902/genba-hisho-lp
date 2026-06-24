import { CtaButton } from "@/components/cta-button";

export function MonitorSection() {
  return (
    <section className="bg-orange-50 px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-brand-orange">
            Trial
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy">
            まずは、今届いているLINE相談から整えませんか。
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
            現在、建設業・設備業・リフォーム業の事業者様向けに無料相談を実施しています。相談内容を見ながら、どこをAI化すると効果が出るか一緒に整理します。
          </p>
          <div className="mt-8">
            <CtaButton className="w-full sm:w-auto" />
          </div>
        </div>
        <div className="rounded-lg bg-brand-navy p-4 shadow-soft">
          <img
            src="/line-rich-menu.png"
            alt="現場秘書のLINEリッチメニュー"
            className="h-auto w-full rounded-md border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
