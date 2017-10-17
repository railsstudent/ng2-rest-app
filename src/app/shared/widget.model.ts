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
    'img': '/assets/img/number-1.png',
    "description": "This is a description",
    "featured": true
  },
  {
    "id": 2,
    "name": "Widget 2",
    'img': '/assets/img/number-2-blue-icon.png',
    "description": "This is a description!",
    "featured": false
  },
  {
    "id": 3,
    "name": "Widget 3",
    'img': '/assets/img/number-3-icon.png',
    "description": "This is a lovely widget",
    "featured": false
  }
];
