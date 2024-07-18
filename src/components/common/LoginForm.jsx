import React, { useState } from 'react';
import { Card, Input, Button, Typography, IconButton } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ isVisible, onClose, onSignUpClick, handleLoginSuccess }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = (e) => {
    if (e.target.id === 'wrapperLogin') onClose();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://backend-api-capstone-bdt-deploy.vercel.app/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Login successful');
        handleLoginSuccess(); // Panggil fungsi handleLoginSuccess dari props
        navigate('/'); // Navigasi ke halaman utama setelah login berhasil
      } else {
        console.error('Error logging in:', data.message);
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-[999] p-10 pt-24" onClick={handleClose} id="wrapperLogin">
      <div className="container max-w-[500px] max-h-[630px] p-5 pt-4 rounded-lg bg-white">
        <Card color="transparent" shadow={false}>
          <IconButton ripple={true} color="red" size="sm" className="rounded-lg self-end translate-x-6" onClick={() => onClose()}>
            <i className="fa-solid fa-xmark fa-lg" />
          </IconButton>
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Hi! Enter your details to login.
          </Typography>
          <form className="mt-2 mb-2 w-70 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="mt-6" color="blue" fullWidth>
              Login
            </Button>
            <Button
              size="lg"
              variant="outlined"
              color="black"
              className="flex items-center gap-3 mt-3 bg-white drop-shadow"
              fullWidth
            >
              <img src="https://docs.material-tailwind.com/icons/google.svg" alt="Google" className="h-7 w-7 mr-0 ml-12 pl-2 py-0" />
              <p className="grow-1">Continue with Google</p>
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account yet?{" "}
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
