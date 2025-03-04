import MapSidebar from "../features/maps/MapSidebar";
import Map from "../features/maps/Map";
import { SidebarProvider } from "../context/SidebarContext";

function AppLayout() {
  return (
    <div className="relative">
      <SidebarProvider>
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
