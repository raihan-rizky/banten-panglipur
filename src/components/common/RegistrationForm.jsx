import React, { useState } from 'react';
import { Card, Input, Checkbox, Button, Typography, IconButton } from "@material-tailwind/react";

export default function RegistrationForm({ isVisible, onClose, onLoginClick }) {
  if (!isVisible) return null;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleClose = (e) => {
    if (e.target.id === 'wrapperRegis') onClose();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://backend-api-capstone-bdt-deploy.vercel.app/users/regist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setShowSuccessMessage(true);
      } else {
        console.error('Error signing up:', data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  }

  const handleSuccessClose = () => {
    setShowSuccessMessage(false);
    onLoginClick();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-[999] p-10 vs-max:p-5 pb-0" onClick={handleClose} id="wrapperRegis">
      <div className="container max-w-[500px] max-h-[630px] vs-max:max-h-[590px] p-5 pt-4 vs-max:pt-1 rounded-lg bg-white">
        <Card color="transparent" shadow={false}>
          <IconButton ripple={true} color="red" size="sm" className="rounded-lg self-end translate-x-6" onClick={() => onClose()}>
            <i className="fa-solid fa-xmark fa-lg" />
          </IconButton>
          <Typography variant="h4" color="blue-gray" className="vs-max:text-xl">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal vs-max:text-xs">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form className="mt-1 mb-2 w-70 max-w-screen-lg sm:w-96 vs-max:w-50" onSubmit={handleSubmit}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3 vs-max:text-[14px]">
                Your Username
              </Typography>
              <Input
                size="md"
                placeholder="username"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3 vs-max:text-[14px]">
                Your Email
              </Typography>
              <Input
                size="md"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3 vs-max:text-[14px]">
                Password
              </Typography>
              <Input
                type="password"
                size="md"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal text-xs"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button type="submit" className="mt-6 vs-max:mt-3" color="blue" fullWidth>
              Sign Up
            </Button>
            <Typography color="gray" className="mt-4 vs-max:mt-2 text-center font-normal vs-max:text-xs">
              Already have an account?{" "}
              <a onClick={onLoginClick} className="font-medium text-gray-900 cursor-pointer">
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </div>
      {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000]">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center">
            <Typography variant="h6" color="green">
              Registrasi berhasil, silahkan login.
            </Typography>
            <Button onClick={handleSuccessClose} color="blue" className="mt-4">
              OK
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
