import {
  Card,
  Input,
  Button,
  Typography,
  IconButton
} from "@material-tailwind/react";

export default function LoginForm({ isVisible, onClose, onSignUpClick }) {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === 'wrapperLogin') onClose();
  }
  return (
    <div className="fixed inset-0 bg-black
        bg-opacity-25 backdrop-blur-sm z-[999] p-10 pt-24 " onClick={handleClose} id="wrapperLogin">
      <div className="container max-w-[500px] max-h-[630px] p-5 pt-4 rounded-lg bg-white">
        <Card color="transparent" shadow={false}>
          <IconButton ripple={true} color="red" size="sm" className="rounded-lg self-end translate-x-6" onClick={() => onClose()}>
            <i className="fa-solid fa-xmark fa-lg" />
          </IconButton>
          <Typography variant="h4" color="blue-gray" >
            Login
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Hi! Enter your details to login.
          </Typography>
          <form className="mt-2 mb-2 w-70 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button className="mt-6" color="blue" fullWidth>
              login
            </Button>
            <Button
              size="lg"
              variant="outlined"
              color="black"
              className="flex items-center gap-3 mt-3 bg-white drop-shadow"
              fullWidth
            >
              <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-7 w-7 mr-0 ml-12 pl-2 py-0" />
              <p className="grow-1 ">continue with Google</p>
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Belum punya akun?{" "}
              <a onClick={onSignUpClick} className="font-medium text-gray-900 cursor-pointer">
                Sign Up
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
}