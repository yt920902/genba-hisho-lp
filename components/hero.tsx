import { CtaButton } from "@/components/cta-button";

export function Hero() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto grid min-h-[88svh] max-w-6xl items-center gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:py-20">
        <div>
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-bold text-orange-100">
            建設業向けAI事務サポート
          </p>
          <p className="mt-4 text-base font-black tracking-widest text-brand-orange">
            現場秘書
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            建設業の事務作業を、<br className="hidden sm:block" />
            AIと人のサポートで軽くする。
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            見積書・請求書・契約書・顧客管理の悩みを、まずはLINEで無料相談。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton className="w-full sm:w-auto" />
          </div>
          <a
            href="#service"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 transition-colors hover:text-white"
          >
            サービス内容を見る
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
