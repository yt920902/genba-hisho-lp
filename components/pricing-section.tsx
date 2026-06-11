import { SectionHeading } from "@/components/section-heading";

const included = ["見積書作成支援", "PDF出力", "軽微修正", "サポート"];

export function PricingSection() {
  return (
    <section className="bg-brand-navy px-5 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Pricing"
          title="料金"
          description="試験導入しやすい料金から、事業者様ごとの運用に合わせてご提案します。"
          tone="dark"
        />
        <div className="mx-auto mt-10 max-w-4xl rounded-lg bg-white p-6 text-brand-navy shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-lg bg-brand-paper p-6">
              <p className="text-sm font-bold text-slate-500">初期導入費</p>
              <p className="mt-3 text-4xl font-black">30,000円〜</p>
            </div>
            <div className="rounded-lg bg-brand-paper p-6">
              <p className="text-sm font-bold text-slate-500">月額利用料</p>
              <p className="mt-3 text-4xl font-black">5,000円〜</p>
            </div>
          </div>
          <div className="mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
