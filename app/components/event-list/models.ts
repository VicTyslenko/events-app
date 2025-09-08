export interface EventProps {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

export interface EventsProps {
  events: EventProps[];
}
