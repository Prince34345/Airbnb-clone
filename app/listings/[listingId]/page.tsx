
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";
import getCurrentUser from "@/app/actions/getCurrentuser";
import ClientOnly from "@/app/components/Client_Only";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {

  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;