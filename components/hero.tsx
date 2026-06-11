import { CtaButton } from "@/components/cta-button";

export function Hero() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto grid min-h-[92svh] max-w-6xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:py-16">
        <div>
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-orange-100">
            建設業向けAI事務サポート
          </p>
          <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
            現場秘書
          </h1>
          <p className="mt-6 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            見積・請求・契約まわりの事務作業を、もっとラクに。
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            建設業・設備業・リフォーム業向けのAI事務サポートサービス
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton className="w-full sm:w-auto" />
            <p className="text-sm font-medium text-slate-300">
              相談はLINE公式アカウントから受付中
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 text-brand-navy shadow-soft">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <p className="text-sm font-bold text-slate-500">AI見積アシスト</p>
              <p className="mt-1 text-xl font-black">外壁補修工事</p>
            </div>
            <div className="rounded-md bg-orange-100 px-3 py-2 text-sm font-bold text-orange-700">
              作成中
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {[
              ["仮設足場", "一式"],
              ["高圧洗浄", "120m2"],
              ["下地補修", "45箇所"],
              ["シーリング打替", "80m"],
            ].map(([name, amount]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-md border border-slate-200 bg-brand-paper px-4 py-3"
              >
                <span className="font-bold">{name}</span>
                <span className="text-sm font-bold text-slate-500">{amount}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-md bg-brand-line/10 p-4">
            <p className="text-sm font-bold text-brand-line">LINE相談から開始</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              工事内容を送るだけで、見積項目の整理から書類化までサポートします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
