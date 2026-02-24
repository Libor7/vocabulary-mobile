import { type PropsWithChildren } from "react";

import { StudyProvider } from "@/app/context/study/study.provider";
import { UserProvider } from "@/app/context/user/user.provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <UserProvider>
      <StudyProvider>{children}</StudyProvider>
    </UserProvider>
  );
};
