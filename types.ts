
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface WorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'condition';
  label: string;
}
