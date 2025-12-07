import CompetitionHistory from "@/src/components/competition/CompetitionHistory";

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="mt-10 text-4xl font-bold text-center">Problem Setting History</h2>
      <CompetitionHistory/>
    </div>
  );
}
