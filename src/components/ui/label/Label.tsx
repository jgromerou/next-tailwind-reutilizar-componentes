interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ title, ...props }: Props) => {
  return (
    <label
      htmlFor="email"
      className="block text-sm font-medium leading-6 text-gray-900"
      {...props}
    >
      {title}
    </label>
  );
};

export default Label;
