"use client";
import { JitsiMeeting } from "@jitsi/react-sdk";

export default function Home() {
  const date = new Date();
  const day = date.getDay().toLocaleString();
  const month = date.getMonth().toLocaleString();
  const year = date.getFullYear().toLocaleString();

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h1>Conectando con Servando Negrete.</h1>
      <JitsiMeeting
        roomName={`Sesion_${day}-${month}-${year}`}
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        }}
        userInfo={{
          displayName: "Diego Espinosa",
          email: "diego.espinosagrc@uanl.edu.mx",
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "400px";
        }}
      />
    </main>
  );
}
