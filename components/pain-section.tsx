import { SectionHeading } from "@/components/section-heading";

const pains = [
  "LINEの相談内容が流れてしまう",
  "図面や写真の確認漏れが起きる",
  "返信文を考える時間が長い",
  "見積前の不足情報が整理できない",
  "案件ごとの次アクションが見えにくい",
];

export function PainSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Problem"
          title="相談は来る。でも、整理する時間が足りない。"
          description="現場対応をしながら、LINE、写真、図面、見積依頼をさばくのは大変です。現場秘書は、まず受付後の整理を軽くします。"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pains.map((pain) => (
            <div
              key={pain}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-orange-100 text-sm font-black text-brand-orange">
                要
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
            運用の流れを見る
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
