export interface Review {
  id: number;
  title: string;
  routerLink: string[]
}

export const reviews = [
  {
    "id": 1,
    "title": "Module",
    "routerLink": ['featured', '1']
  },
  {
    "id": 2,
    "title": "Service",
    "routerLink": ['featured', '2']
  },
  {
    "id": 3,
    "title": "Component",
    "routerLink": ['featured', '3']
  },
  {
    "id": 4,
    "title": "Routing",
    "routerLink": ['featured', '4']
  },
];
