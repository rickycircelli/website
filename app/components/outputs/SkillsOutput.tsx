import Spacer from "../Spacer";
import SkillBar from "../SkillBar";

export default function SkillsOutput() {
  return (
    <div className="px-2 py-5">
      <div className="space-y-4 text-sm font-mono">
        <Spacer />

        {/* LANGUAGES */}
        <div className="grid grid-cols-[120px_1fr] gap-4">
          <div className="text-[var(--fg)]">LANGUAGES</div>
          <div className="space-y-1">
            <SkillBar level={7} label="Python" />
            <SkillBar level={6} label="SQL" />
            <SkillBar level={6} label="R" />
          </div>
        </div>
        <Spacer />

        {/* MACHINE LEARNING */}
        <div className="grid grid-cols-[120px_1fr] gap-4">
          <div className="text-[var(--fg)]">ML</div>
          <div className="space-y-1">
            <SkillBar level={7} label="XGBoost" />
            <SkillBar level={7} label="LightGBM" />
            <SkillBar level={7} label="CatBoost" />
            <SkillBar level={7} label="Scikit-learn" />
            <SkillBar level={6} label="SHAP" />
            <SkillBar level={5} label="TensorFlow" />
          </div>
        </div>
        <Spacer />

        {/* GEN AI */}
        <div className="grid grid-cols-[120px_1fr] gap-4">
          <div className="text-[var(--fg)]">GEN AI</div>
          <div className="space-y-1">
            <SkillBar level={7} label="Claude API" />
            <SkillBar level={6} label="OpenAI API" />
            <SkillBar level={7} label="Prompt Engineering" />
            <SkillBar level={6} label="AI Agents" />
            <SkillBar level={6} label="RAG" />
          </div>
        </div>
        <Spacer />

        {/* DATA */}
        <div className="grid grid-cols-[120px_1fr] gap-4">
          <div className="text-[var(--fg)]">DATA</div>
          <div className="space-y-1">
            <SkillBar level={7} label="Snowflake" />
            <SkillBar level={7} label="Pandas" />
            <SkillBar level={7} label="NumPy" />
            <SkillBar level={7} label="Power BI (PL-300)" />
            <SkillBar level={7} label="Excel" />
          </div>
        </div>
        <Spacer />

        {/* TOOLS */}
        <div className="grid grid-cols-[120px_1fr] gap-4">
          <div className="text-[var(--fg)]">TOOLS</div>
          <div className="space-y-1">
            <SkillBar level={7} label="Claude Code (CCA-F)" />
            <SkillBar level={7} label="Git / GitHub" />
            <SkillBar level={6} label="AWS (Cloud Practitioner)" />
            <SkillBar level={6} label="Supabase" />
            <SkillBar level={6} label="Railway" />
          </div>
        </div>
        <Spacer />
      </div>
    </div>
  );
}
