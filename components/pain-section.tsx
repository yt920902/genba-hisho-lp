import { SectionHeading } from "@/components/section-heading";

const pains = [
  "見積書作成に時間がかかる",
  "過去の見積を探すのが面倒",
  "Excel管理が大変",
  "請求書作成が二度手間",
  "契約書作成が負担",
];

export function PainSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="こんなお悩みありませんか？" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pains.map((pain) => (
            <div
              key={pain}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-orange-100 text-lg font-black text-brand-orange">
                !
              </div>
              <p className="text-base font-bold leading-7 text-brand-navy">{pain}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#service"
            className="inline-flex items-center gap-2 rounded-md border-2 border-brand-navy px-6 py-3 text-base font-bold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
          >
            現場秘書のサービスを見る
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
