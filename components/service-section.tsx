import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    title: "相談内容の整理",
    description: "LINEの文章、写真、図面メモを案件情報として見える形にまとめます。",
  },
  {
    title: "不足情報の洗い出し",
    description: "図面、仕様、数量、希望日など、見積前に必要な確認事項を整理します。",
  },
  {
    title: "返信案と書類下準備",
    description: "LINE返信案、確認依頼文、見積補助メモを人が確認しやすい形で作ります。",
  },
];

export function ServiceSection() {
  return (
    <section id="service" className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Service"
          title="現場秘書でできること"
          description="受付後の迷いや抜け漏れを減らし、次の返信と見積準備に進みやすくします。"
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
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CtaButton />
          <a
            href="#development"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 transition-colors hover:text-brand-navy"
          >
            導入の流れを見る
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
