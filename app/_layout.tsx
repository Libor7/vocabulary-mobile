import { Providers } from "@/app/providers/Providers";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Providers>
      <Stack />
    </Providers>
  );
}
