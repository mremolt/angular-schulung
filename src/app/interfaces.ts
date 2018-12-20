export interface IJoke {
  id: number;
  joke: string;
  categories: string[];
}

export interface IJokeResponse {
  type: string;
  value: Array<IJoke>;
}
