import { Suspense } from "react";
import LoginModal from "@/app/(beforeLogin)/_component/LoginModal";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginModal />
    </Suspense>
  );
}
