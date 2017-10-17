export interface Widget {
  id: number;
  img?: string;
  name?: string;
  description?: string;
  featured?: boolean;
}

export const widgets = [
  {
    "id": 1,
    "name": "Widget 1",
    "description": "This is a description",
    "featured": true,
    "img": "/assets/img/number-1.png"
  },
  {
    "id": 2,
    "name": "Widget 2",
    "description": "This is a description!",
    "featured": false,
    "img": "/assets/img/number-2-blue-icon.png"
  },
  {
    "id": 3,
    "name": "Widget 3",
    "description": "This is a lovely widget",
    "featured": false,
    "img": "/assets/img/number-3-icon.png"
  }
];
