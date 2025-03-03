import MapSidebar from "../features/maps/MapSidebar";
import Map from "../features/maps/Map";
import DetailCard from "../components/DetailCard";
import { SidebarProvider } from "../context/SidebarContext";

function AppLayout() {
  return (
    <div className="relative">
      <SidebarProvider>
        <DetailCard />
        <div className="flex h-dvh w-full">
          {/* Sidebar */}
          <MapSidebar />
          {/* Konten Utama (Full Map) */}
          <Map />
        </div>
      </SidebarProvider>
    </div>
  );
}

export default AppLayout;
