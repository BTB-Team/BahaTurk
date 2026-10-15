import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // به محض تغییر آدرس صفحه، اسکرول مرورگر را به بالاترین نقطه (Top: 0) منتقل می‌کند
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // این کامپوننت هیچ المان ظاهری رندر نمی‌کند
}
