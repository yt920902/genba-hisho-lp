import { SectionHeading } from "@/components/section-heading";

const roadmap = [
  "LINE相談の受付ルールを決める",
  "案件化テンプレートを整える",
  "返信案と確認事項をAIで作る",
  "見積補助・書類作成へ広げる",
  "よくある相談をFAQ化する",
];

export function RoadmapSection() {
  return (
    <section id="development" className="bg-brand-paper px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Roadmap"
          title="導入は、小さく始めて育てる。"
          description="最初は相談整理と返信案から。慣れてきたら見積補助、書類作成、FAQ改善まで広げます。"
        />
        <div className="mt-10">
          {roadmap.map((item, index) => (
            <div key={item} className="grid grid-cols-[2rem_1fr] gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-sm font-black text-white">
                  {index + 1}
                </div>
                {index < roadmap.length - 1 ? (
                  <div className="h-12 w-px bg-slate-200" />
                ) : null}
              </div>
              <div className="pb-8">
                <p className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-lg font-bold text-brand-navy shadow-sm">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
