import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    title: "AI見積作成サポート",
    description: "工事内容を入力するだけで見積項目を提案",
  },
  {
    title: "見積書PDF出力",
    description: "見積書をPDF化",
  },
  {
    title: "顧客・過去見積管理",
    description: "過去案件を検索可能",
  },
];

export function ServiceSection() {
  return (
    <section className="bg-brand-paper px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Service"
          title="現場秘書でできること"
          description="事務作業の入口から書類化、過去案件の活用まで、現場の負担を減らす機能をまとめて提供します。"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-black text-brand-orange">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-black text-brand-navy">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
