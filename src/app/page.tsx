import dynamic from "next/dynamic";

const CallGrpc = dynamic(() => import("@/components/CallGrpc"), { ssr: false });

const page = () => {
  return (
    <div>
      <CallGrpc />
    </div>
  );
};

export default page;
