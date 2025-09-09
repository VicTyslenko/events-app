export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  withIcon?: boolean;
  type?: "text" | "checkbox";
  placeholder?: string;
};
