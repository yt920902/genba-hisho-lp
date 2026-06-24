import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "LINEで相談受付",
    description: "お客様から届いた相談、写真、図面、希望日をまず受け止めます。",
  },
  {
    title: "AIが案件化",
    description: "依頼内容、添付資料、不足情報、次に確認することを整理します。",
  },
  {
    title: "人が確認して返信",
    description: "金額、納期、契約に関わる内容は承認してから送信します。",
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="bg-brand-paper px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Workflow"
          title="LINE相談を、案件台帳に残せる形へ。"
          description="完全自動で返信するのではなく、AIが下準備をして、人が大事な判断を確認する運用です。"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-navy text-sm font-black text-white">
                {index + 1}
              </p>
              <h3 className="mt-5 text-xl font-black text-brand-navy">{step.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
