import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  description?: string | null;
  listingPrice?: number | null;
  status?: "Option1" | null;
};
