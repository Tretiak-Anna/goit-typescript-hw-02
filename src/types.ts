export interface Image {
  id: string;
  url: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
}

export interface ApiResponse {
  results: Image[];
  total: number;
  total_pages: number;
}
