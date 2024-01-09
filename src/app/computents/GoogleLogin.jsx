
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ from }) => {
  const { googleLogin } = useAuth();
  const { replace, refresh } = useRouter();

  const handleGoogleLogin =async ()=>{
  
        await googleLogin()
       
      startTransition(() => {
        refresh();
        replace(from);
       
      });
  }

  return (
    <button
    onClick={handleGoogleLogin}
      type="button"
      className="btn btn-primary mt-5 mx-auto"
    >
      <FcGoogle className="text-3xl mr-3" /> Continue with google
    </button>
  );
};

export default GoogleLogin;
