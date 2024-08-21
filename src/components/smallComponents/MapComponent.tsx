import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

type Position = [number, number];

type MapComponentProps = {
    center: Position;
    zoom: number;
    markers: Array<{
        position: Position;
        title: string;
    }>;
};

const MapComponent: FC<MapComponentProps> = ({ center, zoom, markers }) => {
    const customIcon = new Icon({
        iconUrl: "/images/Logo.svg",
        iconSize: [28, 28],
    });

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    position={marker.position}
                    icon={customIcon}
                >
                    <Popup>{marker.title}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
