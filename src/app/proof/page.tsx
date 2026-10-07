import { verifyContractSchema } from "@/lib/genlayer/contract";
import { CHAIN_NAME, CONTRACT_ADDRESS, GENLAYER_ENDPOINT } from "@/lib/genlayer/config";

export const dynamic = "force-dynamic";

export default async function ProofPage() {
  const schema = await verifyContractSchema();
  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <p className="label">Public verification surface</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">WebWitness deployment proof</h1>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
        This page exposes the configured Studionet deployment and the live schema check used to verify it.
      </p>
      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="panel-soft p-4"><dt className="label">Chain</dt><dd className="mono mt-2 text-lg">{CHAIN_NAME} · 61999</dd></div>
        <div className="panel-soft p-4"><dt className="label">Contract</dt><dd className="mono mt-2 break-all text-sm">{CONTRACT_ADDRESS ?? "Not configured"}</dd></div>
        <div className="panel-soft p-4"><dt className="label">Endpoint</dt><dd className="mono mt-2 break-all text-sm">{GENLAYER_ENDPOINT}</dd></div>
        <div className="panel-soft p-4"><dt className="label">Schema verification</dt><dd className={`mt-2 font-semibold ${schema.ok ? "text-emerald-300" : "text-amber-300"}`}>{schema.ok ? "Verified" : schema.configured ? `Missing: ${schema.missing.join(", ")}` : "Not configured"}</dd></div>
      </dl>
    </main>
  );
}
