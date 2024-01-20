import { z } from "zod";

export const registerForm = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type registerFormType = z.infer<typeof registerForm>;

export const loginForm = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type loginFormType = z.infer<typeof loginForm>;

export const manageHotelForm = z.object({
  name: z.string().min(1, "Name is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  description: z.string().min(1, "Description is required"),
  type: z.string().min(1, "Type is required"),
  pricePerNight: z.number().min(1, "Price is required"),
  rating: z.number().min(1, "Rating is required"),
  facilities: z.array(z.string().min(1, "Facility is required")),
  imageFiles: z.array(z.instanceof(File)),
  adultCount: z.number().min(1, "Adult count is required"),
  childCount: z.number().min(1, "Child count is required"),
});

export type manageHotelFormType = z.infer<typeof manageHotelForm>;
