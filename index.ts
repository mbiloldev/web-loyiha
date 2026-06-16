// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Recipe types (for future use)
export interface Recipe {
  id: string;
  title: string;
  description: string;
  cookTime: number; // minutes
  difficulty: "beginner" | "intermediate" | "advanced";
  servings: number;
  category: string;
  tags: string[];
  ingredients: Ingredient[];
  steps: RecipeStep[];
  imageUrl?: string;
  isPremium: boolean;
  createdAt: string;
}

export interface Ingredient {
  name: string;
  amount: string;
  unit?: string;
  notes?: string;
}

export interface RecipeStep {
  order: number;
  instruction: string;
  tip?: string;
  duration?: number; // minutes
}

// User types (for future use)
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isPremium: boolean;
  joinedAt: string;
  savedRecipes: string[];
}

// AI Chat types (for future use)
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
