import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { manageHotelFormType } from "@/schemas";
import { useFormContext } from "react-hook-form";

function DetailsSection() {
  const form = useFormContext<manageHotelFormType>();
  const ratingOpts = Array.from({ length: 10 }, (_, i) => i + 1)
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Add Hotel</h1>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="pricePerNight"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Price Per Night</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={1}
                step={1}
                {...field}
                onChange={(value) => {
                  const numberValue = value.target.valueAsNumber;
                  if (!isNaN(numberValue) && field.onChange) {
                    field.onChange(numberValue);
                  }
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="rating"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Rating</FormLabel>
            <Select
              onValueChange={(value) => {
                const numberValue = Number(value);
                field.onChange(numberValue);
              }}
              defaultValue={field.value.toString()}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a rating" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {ratingOpts.map((rating) => (
                  <SelectItem key={rating} value={rating.toString()}>
                    {rating}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default DetailsSection;
