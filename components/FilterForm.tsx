import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { useEffect } from "react";
import { categories } from "@/utils/categories";
import SelectField from "./common/fields/SelectField";

const FormSchema = z.object({
  search: z.string(),
  categoryFilter: z.string(),
});

type FormValues = z.infer<typeof FormSchema>;

export const FilterForm = ({
  onCategoryFilterChange,
}: {
  onCategoryFilterChange: (categoryFilter: string) => void;
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const categoryFilter = form.watch("categoryFilter");

  useEffect(() => {
    onCategoryFilterChange(categoryFilter);
  }, [categoryFilter, onCategoryFilterChange]);

  const onSubmit = () => {
    console.log("Search submitted");
    form.reset();
  };

  return (
    <div className="w-full h-full mb-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-2 h-full"
        >
          <div className="flex">
            {/* <InputField
              control={form.control}
              name="search"
              placeholder="Input name of dish"
            />
            <Button type="submit">Search</Button> */}
          </div>
          <div>
            <SelectField
              control={form.control}
              name="categoryFilter"
              placeholder="Select category"
              options={categories}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};
