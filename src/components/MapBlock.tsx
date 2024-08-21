import Image from "next/image";
import MapComponent from "@/components/smallComponents/MapComponent";
const MapBlock = () => {
    const markers = [
        { position: [51.505, -0.09] as [number, number], title: "Marker 1" },
        { position: [51.515, -0.1] as [number, number], title: "Marker 2" },
        { position: [51.525, -0.11] as [number, number], title: "Marker 3" },
    ];

    return (
        <div className="relative flex flex-col gap-y-10 px-30 py-24">
            <h2 className="text-white">Магазины мерча ведьмака</h2>

            <div
                className="relative flex flex-col gap-y-10 px-30 py-24"
                style={{ height: "500px", width: "100%" }}
            >
                <MapComponent
                    center={[51.505, -0.09]}
                    zoom={13}
                    markers={markers}
                />
            </div>
        </div>
    );
};

export default MapBlock;
