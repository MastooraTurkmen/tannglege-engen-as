"use client";

import LoadingPage from "@/app/loading";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const Location = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey || "",
  });

  if (loadError) {
    return (
      <div className="flex m-14 flex-col justify-center text-center items-center text-black">
        <h1 className="md:text-3xl lg:text-5xl z-10 text-2xl font-bold">
          Hvor vi lokaliserte
        </h1>
        <div className="bg-[#00B8FF] z-0 mt-[-9px] py-1 md:px-[130px] lg:px-[200px] px-[90px] border-none"></div>
        <p className="lg:text-xl m-5 lg:w-[500px]">
          Vi holder til i andre etasje, inngangen til høyre for Coop Prix.
        </p>
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Kart ikke tilgjengelig</p>
            <p className="text-sm text-gray-600">
              Feil ved lasting av Google Maps: {loadError.message}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return <LoadingPage />;
  }

  // Coordinates for Waldemar Thranes gate 50, 171 Oslo 59.92642803106044, 10.74520552670994

  const clinicLocation = { lat: 59.92642803106044, lng: 10.74520552670994 };

  return (
    <div className="flex m-14 flex-col overflow-hidden justify-center text-center items-center text-black">
      <h1 className="md:text-3xl lg:text-5xl z-10 text-2xl font-bold">
        Hvor vi lokaliserte
      </h1>
      <div className="bg-[#00B8FF] z-0 mt-[-9px] py-1 md:px-[130px] lg:px-[200px] px-[90px] border-none"></div>
      <p className="lg:text-xl m-5 lg:w-[500px]">
        Vi holder til i andre etasje, inngangen til høyre for Coop Prix.
      </p>
      {/* Google map */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <GoogleMap
          center={clinicLocation}
          zoom={16}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            mapTypeId: "roadmap",
            streetViewControl: true,
            fullscreenControl: true,
          }}
        >
          {/* Marker for the dental clinic */}
          <Marker
            position={clinicLocation}
            title="Tannlege"
            label={{
              text: "Tannlege Ann-Kristin",
              className: "marker-label",
            }}
          />
        </GoogleMap>
      </div>
    </div>
  );
};

export default Location;
