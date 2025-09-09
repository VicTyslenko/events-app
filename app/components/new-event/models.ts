export type FormProps = {
  title: string;
  description?: string;
  location: string;
  date: string;
};

export type NewEventProps = {
  onClose: () => void;
};
