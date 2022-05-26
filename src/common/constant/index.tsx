export interface content {
  club: {
    coverUrl: string;
    description: string;
    id: number;
    meeting: object[];
    name: string;
    place: string;
    type: string;
  };
  leaders?: object[];
  partners?: object[];
  price: number;
}

export interface contentProps {
  club: {
    id: number;
    coverUrl: string;
    name: string;
    description: string;
    place: string;
  };
}
