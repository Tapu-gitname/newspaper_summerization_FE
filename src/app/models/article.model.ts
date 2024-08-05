export interface Mcq {
    question: string;
    answer: string;
    options?: string[];  // Optional if options might not always be present
  }

export interface Article {
    title: string;
    image?: string;
    summary: string;
    full_text: string;
    mcq: Mcq[];
  }