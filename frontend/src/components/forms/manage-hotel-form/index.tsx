import { Button } from "@/components/ui/button";
import { manageHotelForm, manageHotelFormType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./details-section";

function ManageHotelForm() {
  const methods = useForm<manageHotelFormType>({
    resolver: zodResolver(manageHotelForm),
    defaultValues: {
      name: "",
      city: "",
      country: "",
      description: "",
      pricePerNight: 0,
      rating: 0,
      facilities: [],
      imageFiles: [],
      adultCount: 1,
      childCount: 1,
    },
  });

  const onSubmit = (data: manageHotelFormType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DetailsSection />
        <Button type="submit">Add Hotel</Button>
      </form>
    </FormProvider>
  );
}

export default ManageHotelForm;
