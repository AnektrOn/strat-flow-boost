import { useState, type Dispatch, type SetStateAction } from "react";
import { Activity, RotateCcw, Settings2, X } from "lucide-react";
import { DEFAULT_SYNAPSE_SETTINGS, type SynapseSettings } from "./synapseSettings";

type SynapseControlsPanelProps = {
  settings: SynapseSettings;
  onChange: Dispatch<SetStateAction<SynapseSettings>>;
};

function ControlSlider({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-xs text-white/70 font-medium">{label}</label>
        <span className="text-xs text-n-gold font-mono tabular-nums">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-n-gold"
      />
    </div>
  );
}

/** Panneau latéral de réglages live pour la démo synapse. */
export function SynapseControlsPanel({ settings, onChange }: SynapseControlsPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = <K extends keyof SynapseSettings>(key: K, value: SynapseSettings[K]) => {
    onChange((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-4 sm:top-24 sm:right-6 z-50 p-2.5 sm:p-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all shadow-xl pointer-events-auto"
        aria-label="Ouvrir les réglages synapse"
      >
        <Settings2 className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-80 bg-black/80 backdrop-blur-2xl border-l border-white/10 z-50 p-6 flex flex-col shadow-2xl overflow-y-auto pointer-events-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white font-medium flex items-center gap-2">
              <Activity className="w-4 h-4 text-n-gold" />
              Synapse Engine
            </h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/50 hover:text-white"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 flex-1">
            <ControlSlider
              label="Synapse Density"
              value={settings.particleCount}
              min={100}
              max={800}
              step={10}
              onChange={(v) => handleChange("particleCount", v)}
            />
            <ControlSlider
              label="Neural Reach"
              value={settings.connectionDistance}
              min={10}
              max={60}
              step={1}
              onChange={(v) => handleChange("connectionDistance", v)}
            />
            <ControlSlider
              label="Pulse Speed"
              value={settings.speed}
              min={0.1}
              max={2}
              step={0.1}
              onChange={(v) => handleChange("speed", v)}
            />
            <ControlSlider
              label="Rotation Vector"
              value={settings.rotationSpeed}
              min={0}
              max={0.01}
              step={0.001}
              onChange={(v) => handleChange("rotationSpeed", v)}
            />
            <ControlSlider
              label="Axon Thickness"
              value={settings.particleSize}
              min={0.5}
              max={4}
              step={0.1}
              onChange={(v) => handleChange("particleSize", v)}
            />

            <div className="space-y-3 pt-4 border-t border-white/10">
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Core Chromatics</p>
              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <span className="text-xs text-white/70">Nucleus</span>
                  <input
                    type="color"
                    value={settings.colorCenter}
                    onChange={(e) => handleChange("colorCenter", e.target.value)}
                    className="w-full h-8 rounded cursor-pointer bg-transparent border-0 p-0"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <span className="text-xs text-white/70">Membrane</span>
                  <input
                    type="color"
                    value={settings.colorEdges}
                    onChange={(e) => handleChange("colorEdges", e.target.value)}
                    className="w-full h-8 rounded cursor-pointer bg-transparent border-0 p-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onChange({ ...DEFAULT_SYNAPSE_SETTINGS })}
            className="mt-8 w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Calibration
          </button>
        </div>
      )}
    </>
  );
}
