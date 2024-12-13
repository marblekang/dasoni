import { Input } from "@/components/ui";

export const HeadlessInput = ({
  placeholder,
  name,
  value,
  onChange,
}: {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
}) => {
  return (
    <Input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="!border-0 !ring-0 !outline-none focus:!border-0 focus:!ring-0 focus:!outline-none shadow-none pl-0"
    />
  );
};
