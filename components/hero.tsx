import { CtaButton } from "@/components/cta-button";

export function Hero() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto grid min-h-[86svh] max-w-6xl items-center gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-16">
        <div>
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-bold text-orange-100">
            LINEで始める建設業向けAI事務サポート
          </p>
          <p className="mt-4 text-base font-black tracking-widest text-brand-orange">
            現場秘書
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            現場から届く相談を、<br className="hidden sm:block" />
            その日のうちに案件化する。
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            見積依頼、図面確認、返信文、書類の下準備まで。LINEに届いた内容をAIと人の確認で整理し、次にやることが見える状態にします。
          </p>
          <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-3">
            {["LINE受付", "案件整理", "人間確認"].map((item) => (
              <div
                key={item}
                className="rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
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
              <p className="text-sm font-bold text-slate-500">本日のLINE相談</p>
              <p className="mt-1 text-xl font-black">店舗改修の見積依頼</p>
            </div>
            <div className="rounded-md bg-brand-line/15 px-3 py-2 text-sm font-bold text-brand-line">
              整理中
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {[
              ["依頼内容", "見積相談"],
              ["添付資料", "写真あり"],
              ["不足情報", "図面・希望日"],
              ["次アクション", "返信案作成"],
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
            <p className="text-sm font-bold text-brand-line">承認前に止まる運用</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              金額、納期、契約に関わる返信は、人が確認してからお客様へ送ります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
