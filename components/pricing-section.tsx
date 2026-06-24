import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";

const included = [
  "LINE相談の整理ルール作成",
  "案件受付テンプレート",
  "返信文テンプレート",
  "見積前チェック項目",
  "月次の運用改善相談",
  "LP・FAQ改善の提案",
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-brand-navy px-5 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Pricing"
          title="まずは小さく試せる料金設計"
          description="相談整理から始め、必要に応じて見積補助や書類作成の範囲を広げます。"
          tone="dark"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg bg-white p-6 text-brand-navy shadow-soft sm:p-8">
            <p className="text-sm font-bold text-slate-500">初期導入費</p>
            <p className="mt-3 text-4xl font-black">30,000円〜</p>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              LINE受付、案件化テンプレート、返信ルールの初期整備を行います。
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 text-brand-navy shadow-soft sm:p-8">
            <p className="text-sm font-bold text-slate-500">月額運用サポート</p>
            <p className="mt-3 text-4xl font-black">5,000円〜</p>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              実際の相談内容をもとに、テンプレートとFAQを継続改善します。
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-lg border border-white/15 bg-white/10 p-6 sm:p-8">
            <h3 className="text-lg font-black">含まれる内容</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base font-bold">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-line text-sm text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaButton variant="line" className="w-full sm:w-auto" />
            </div>
        </div>
      </div>
    </section>
  );
}
