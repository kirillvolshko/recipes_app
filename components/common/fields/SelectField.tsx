import { cn } from "../../../lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
  FormLabel,
} from "../../ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

interface SelectFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  description?: string;
  classNameItem?: string;
  classNameSelect?: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  placeholder?: string;
}

const SelectField = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  classNameItem,

  options,
  defaultValue,
  placeholder,
}: SelectFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("group", classNameItem)}>
          <div className="grid gap-2 w-full">
            {label && (
              <div className="flex md:flex-row gap-4 w-full justify-between items-center">
                <FormLabel className="text-white">{label}</FormLabel>
                <FormMessage className="text-sm font-medium leading-none" />
              </div>
            )}
            <FormControl>
              <div className="relative w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value ?? defaultValue}
                >
                  <SelectTrigger className="min-w-[167px] text-white bg-secondary border-primary rounded-[6px]">
                    <SelectValue
                      placeholder={placeholder || "Select an option"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </FormControl>
          </div>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
