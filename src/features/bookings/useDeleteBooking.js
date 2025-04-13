import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking(){
    const queryClient = useQueryClient();

    const { mutate: deleteBooking, isPending: isDeletingBooking } = useMutation({
      mutationFn: (bookingId) => deleteBookingApi(bookingId),

      onSuccess: () => {
        toast.success("Booking successfuly deleted");
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },

      onError: (error) => toast.error(error.message),
    });

    return { deleteBooking, isDeletingBooking };
}