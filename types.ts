
export interface ComparisonMetric {
  name: string;
  usa: number;
  india: number;
  gap: string;
  unit?: string;
}

export interface SupplyGapData {
  year: string;
  mfInflow: number;
  ipoRaised: number;
}

export interface JourneyStage {
  label: string;
  shops: number;
  revenue: string;
  milestone: string;
  valuation: string;
}
