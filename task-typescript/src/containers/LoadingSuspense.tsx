import { CgSpinner } from "react-icons/cg";

function LoadingSuspense({ p_allPage }: { p_allPage?: boolean }) {
  return (
    <div
      className={
        (p_allPage ? "fixed" : "") +
        " flex items-center justify-center w-full h-full p-6 text-lg font-medium z-50 bg-gray-100 md:inset-0 h-modal md:h-full"
      }
    >
      <CgSpinner className="animate-spin h-14 w-14 text-purple-600" />
    </div>
  );
}

export default LoadingSuspense;
