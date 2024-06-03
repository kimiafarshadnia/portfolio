import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-[100px]">
      <img src='/images/404.svg' alt='not_found' />
    </div>
  );
}