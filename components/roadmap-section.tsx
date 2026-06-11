import { SectionHeading } from "@/components/section-heading";

const roadmap = [
  "見積書作成",
  "請求書作成",
  "契約書作成",
  "現場書類管理",
];

export function RoadmapSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="今後追加予定" />
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
